import Item from "./Item";

const List = (props) => {
    return (
        <ul className="w-full flex flex-col justify-center gap-3 rounded-md p-3 px-8">
            {props.items.map((item) => (
                <Item
                    key={item.id}
                    onDone={props.onDone}
                    onItemDeleted={props.onItemDeleted}
                    item={item}
                ></Item>
            ))}
        </ul>
    );
};

export default List;
