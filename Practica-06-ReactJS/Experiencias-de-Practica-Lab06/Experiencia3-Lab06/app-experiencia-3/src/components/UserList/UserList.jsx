import './UserList.css';

const UserList = () => {
  const users = [
    { name: 'Juanito Alcachofa', job: 'Reportero' },
    { name: 'Ronald McDonald', job: 'Animador' },
    { name: 'Chuck Norris', job: 'Actor' },
    { name: 'Joel Gonzales', job: 'Cantante' },
  ];

  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li key={index} className="user-item">
          {user.name} - {user.job}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
