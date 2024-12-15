import trash from "../assets/trash.svg";
import undone from "../assets/undone.svg";
import done from "../assets/done.svg";

const Item = (props) => {
    const DoneImg = (props) => {
        if (props.done) {
            return <img src={done} alt="Ícone de pronto" />;
        } else {
            return <img src={undone} alt="Ícone de á fazer pronto" />;
        }
    };

    return (
        <li
            className={
                props.item.done
                    ? "line-through w-full py-3 ps-3 flex justify-between items-center border-b-2 border-violet-600 hover:shadow-lg"
                    : "w-full py-3 ps-3 flex justify-between items-center border-b-2 border-violet-600 hover:shadow-lg"
            }
        >
            <div className="flex items-center gap-2">
                <button
                    className="h-6 min-w-6"
                    onClick={() => props.onDone(props.item)}
                >
                    <DoneImg done={props.item.done}></DoneImg>
                </button>
                <p className="font-medium text-lg break-all">
                    {props.item.text}
                </p>
            </div>
            <button
                className="min-w-8 h-8 rounded-md bg-red-600 flex justify-center items-center"
                onClick={() => props.onItemDeleted(props.item)}
            >
                <img src={trash} alt="Ícone de lixeira" />
            </button>
        </li>
    );
};

export default Item;
