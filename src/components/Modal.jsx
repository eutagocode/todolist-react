const Modal = (props) => {
    return (
        // Nesta tag deve colocar a className flex para que apareça.
        <div className="hidden fixed h-screen w-screen top-0 left-0 justify-center items-center bg-black/65">
            <form className="w-full mx-4 sm:mx-0 sm:w-1/2 h-60 p-6 bg-white rounded-md flex flex-col justify-center gap-8">
                <h2 className="font-bold text-2xl uppercase text-center">
                    Adicionar uma nova tarefa
                </h2>
                <input
                    className="border-b-2 py-2 px-3 hover:border-violet-600 transition-all outline-none"
                    type="text"
                    placeholder="Adicionar uma nova tarefa"
                />
                <button className="w-full h-11 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors uppercase font-bold">
                    Adicionar
                </button>
            </form>
        </div>
    );
};

export default Modal;
