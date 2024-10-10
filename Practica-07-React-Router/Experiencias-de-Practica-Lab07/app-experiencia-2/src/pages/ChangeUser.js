import { useContext } from 'react';
import UserContext from './UserContext';

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);

  const changeUser = () => {
    setUser("Jane Doe");
  };

  return (
    <div>
      <div class="button-container">
        <button onClick={changeUser}>Change User</button>
      </div>
    </div>
  );
};

export default ChangeUser;
