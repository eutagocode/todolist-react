const CreateItem = (props) => {
    return (
        <form className="w-full mx-4 sm:mx-0 sm:w-1/2 h-60 p-6 bg-white rounded-md flex flex-col justify-center gap-8">
            <h2 className="font-bold text-2xl uppercase text-center">
                Adicionar uma nova tarefa
            </h2>
            <input
                onInput={props.handleInput}
                className="border-b-2 py-2 px-3 hover:border-violet-600 transition-all outline-none"
                type="text"
                placeholder="Adicionar uma nova tarefa"
                value={props.text}
                autoFocus
            />
            <button
                onClick={props.handleShowModal}
                className="w-full h-16 sm:h-11 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors uppercase font-bold"
            >
                Adicionar
            </button>
        </form>
    );
};

export default CreateItem;
