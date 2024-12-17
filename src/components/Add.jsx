import { useState } from "react";
import Modal from "./Modal";
import plus from "../assets/plus.svg";

const Add = (props) => {
    const [text, setText] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleInput = (event) => {
        const inputField = event.target.value;
        setText(inputField);
    };

    const handleShowModal = (event) => {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
        }
        setShowModal(!showModal);

        setText("");
    };

    return (
        <footer className="w-full flex justify-end">
            <button
                onClick={handleShowModal}
                className="h-14 w-14 rounded-full bg-violet-500 flex justify-center items-center"
            >
                <img
                    height={32}
                    width={32}
                    src={plus}
                    alt="Ícone de mais para criar uma nova tarefa"
                />
            </button>
            <Modal
                text={text}
                handleInput={handleInput}
                showModal={showModal}
                handleShowModal={handleShowModal}
            ></Modal>
        </footer>
    );
};

export default Add;
