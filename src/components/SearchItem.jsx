import { useState } from "react";
import search from "../assets/search.svg";

const SearchItem = (props) => {
    const [text, setText] = useState("");

    const handleInput = (event) => {
        const inputField = event.target.value;
        setText(inputField);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const filteredItem = props.items.filter((item) => {
            const checkingText = item.text.includes(text);

            const textWithUpperCase =
                text.charAt(0).toUpperCase() + text.slice(1);

            const checkingTextUpperCase = item.text.includes(textWithUpperCase);

            return checkingText || checkingTextUpperCase;
        });

        if (filteredItem.length === 0) {
            console.log("Nada encontrado!");
        } else {
            props.setFilteredItems(filteredItem);
        }
    };

    return (
        <form className="w-full flex">
            <input
                onInput={handleInput}
                className="w-full border-2 border-violet-600 rounded-s-md p-3 focus:outline-none"
                type="text"
                placeholder="Pesquisar tarefa"
                value={text}
            />
            <button
                onClick={handleSearch}
                className="w-14 bg-violet-600 rounded-e-md flex justify-center items-center"
            >
                <img src={search} alt="Ícone de enviar" />
            </button>
        </form>
    );
};

export default SearchItem;
