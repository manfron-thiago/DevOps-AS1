import { useState } from 'react'; // Removido React da importação
import PropTypes from 'prop-types';

const MyComponent = ({ onClick }) => {
    const [text, setText] = useState('Initial text');

    const handleClick = () => {
        setText('Text updated');
        onClick();
    };

    return (
        <div data-testid="my-component">
            <h1>Learn React</h1>
            <p>{text}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

MyComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default MyComponent;
