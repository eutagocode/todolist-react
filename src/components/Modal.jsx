import CreateItem from "./CreateItem";

const Modal = (props) => {
    return (
        <div
            className={`${
                props.showModal ? "flex" : "hidden"
            } fixed h-screen w-screen top-0 left-0 justify-center items-center bg-black/65`}
        >
            <CreateItem
                text={props.text}
                handleInput={props.handleInput}
                handleShowModal={props.handleShowModal}
            ></CreateItem>
        </div>
    );
};

export default Modal;
