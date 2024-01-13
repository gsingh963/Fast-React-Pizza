import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  // we can use fetcher form to update some data without causing the  navigation

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// Revalidation means that React Router that the data has changed as a result of this action and whenever it happens  it'll automatically refetch the data in the background and then rerender the page with new data

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}

// Define prop types for UpdateOrder
UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired, // Adjust the prop type as needed
};
