import AppDataSource from '../../data-source';
import { Cart } from '../../entities/cart.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { fixedFloat } from '../../utils';

const cartDelGameService = async (userEmail: string, product_id) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = await cartRepository.findOne({
    where: {
      id: user?.cart.id,
    },
  });

  if (cart) {
    if (cart.games.filter(game => game.id === product_id).length === 0) {
      throw new AppError('Product is not in the cart', 404);
    }

    cart.games = cart.games.filter(game => game.id !== product_id);
    cart.subtotal = fixedFloat(
      cart.games.reduce((acc, game) => acc + game.price, 0),
    );

    await cartRepository.save(cart);

    return;
  }
};
export default cartDelGameService;
