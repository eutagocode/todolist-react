import { useState } from "react";

const Form = (props) => {
    const [text, setText] = useState("");

    const handleInput = (event) => {
        const inputField = event.target.value;
        setText(inputField);
    };

    const createItem = (event) => {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("");
        }
    };

    return (
        <form>
            <input onInput={handleInput} value={text} type="text" />
            <button onClick={createItem}>Adicionar</button>
        </form>
    );
};

export default Form;
