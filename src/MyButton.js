import {useState} from 'react';

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Le bouton a été cliqué {count} fois
        </button>
    );
}

export default MyButton;
