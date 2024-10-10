import { useContext } from 'react';
import { UserContext } from './Component1';

const Component5 = () => {
  const user = useContext(UserContext);

  return (
    <div class="card">
      <h2>Component 5</h2>
      <h3>{`Hello ${user} again!`}</h3>
    </div>
  );
};

export default Component5;
