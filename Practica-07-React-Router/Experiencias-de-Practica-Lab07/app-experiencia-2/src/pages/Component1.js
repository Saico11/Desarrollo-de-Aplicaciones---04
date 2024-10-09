import { useContext } from 'react';
import UserContext from './UserContext';

const Component1 = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="card">
      <h1>Hello, {user}!</h1>
    </div>
  );
};

export default Component1;
