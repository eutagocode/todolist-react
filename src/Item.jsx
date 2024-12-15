import trash from "./assets/trash.svg";
import undone from "./assets/undone.svg";
import done from "./assets/done.svg";

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
                    ? "line-through w-full py-3 ps-3 flex justify-between border-b-2 border-violet-600 hover:shadow-lg font-medium text-lg"
                    : "w-full py-3 ps-3 flex justify-between border-b-2 border-violet-600 hover:shadow-lg font-medium text-lg"
            }
        >
            <div className="flex items-center gap-2">
                <button onClick={() => props.onDone(props.item)}>
                    <DoneImg done={props.item.done}></DoneImg>
                </button>
                {props.item.text}
            </div>
            <button
                className="p-1 rounded-md bg-red-600 flex justify-center items-center"
                onClick={() => props.onItemDeleted(props.item)}
            >
                <img src={trash} alt="Ícone de lixeira" />
            </button>
        </li>
    );
};

export default Item;
