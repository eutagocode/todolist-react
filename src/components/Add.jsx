import plus from "../assets/plus.svg";

const Add = () => {
    return (
        <footer className="w-full flex justify-end">
            <button className="h-14 w-14 rounded-full bg-violet-500 flex justify-center items-center">
                <img
                    height={32}
                    width={32}
                    src={plus}
                    alt="Ícone de mais para criar uma nova tarefa"
                />
            </button>
        </footer>
    );
};

export default Add;
