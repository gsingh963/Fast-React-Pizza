import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';

import DeleteItem from '../../ui/DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './CartSlice';

function CartItem({ item }) {
  const { name, quantity, totalPrice, pizzaId } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  console.log(currentQuantity);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    // Add more properties as needed
  }).isRequired,
  formatCurrency: PropTypes.func.isRequired,
};

export default CartItem;
