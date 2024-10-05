const ActionButton = () => {
    const handleClick = () => {
        alert('Hola qué tal');
    };

    return <button onClick={handleClick}>Click Aqui</button>;
};
  
export default ActionButton;