import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center uppercase sm:my-16 ">
      <h1 className="text-xls mb-8 font-semibold md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continuing Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;