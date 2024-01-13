import PropTypes from 'prop-types';

import { deleteItem } from '../features/cart/CartSlice';
import Button from './Button';
import { useDispatch } from 'react-redux';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

// Define prop types for DeleteButton
DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired, // Adjust the prop type as needed
};

export default DeleteItem;
