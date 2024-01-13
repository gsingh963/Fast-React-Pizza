import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  if (to === -1)
    return <button onClick={() => navigate(-1)}>{children}</button>;

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired, // Use PropTypes.node for children
  to: PropTypes.string.isRequired, // Assuming 'to' is a string, adjust if it's a different type
};

export default LinkButton;
