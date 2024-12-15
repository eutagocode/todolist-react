import { useState } from "react";
import send from "../assets/send.svg";

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
        <form className="w-full flex">
            <input
                className="w-full border-2 border-violet-600 rounded-s-md p-3 focus:outline-none"
                onInput={handleInput}
                value={text}
                type="text"
                placeholder="Adicionar uma nova tarefa"
            />
            <button
                className="w-14 bg-violet-600 rounded-e-md flex justify-center items-center "
                onClick={createItem}
            >
                <img src={send} alt="Ícone de enviar" />
            </button>
        </form>
    );
};

export default Form;
