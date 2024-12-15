import { useEffect, useState } from "react";
import Item from "./ItemModel";
import List from "./List";
import Form from "./Form";

const Todo = () => {
    const [items, setItems] = useState([]);

    const onAddItem = (text) => {
        const item = new Item(text);

        setItems([...items, item]);
    };

    const onItemDeleted = (item) => {
        const filteredItems = items.filter((task) => task.id !== item.id);

        setItems(filteredItems);
    };

    const onDone = (item) => {
        const updatedItems = items.map((task) => {
            if (task.id === item.id) {
                task.done = !task.done;
            }
            return task;
        });

        setItems(updatedItems);
    };

    return (
        <div className="container mx-auto mt-9 flex flex-col gap-4">
            <h1 className="text-center font-bold uppercase text-3xl">
                To Do List
            </h1>
            <Form onAddItem={onAddItem}></Form>
            <hr className="h-[1px] w-full bg-slate-300" />
            <List
                onDone={onDone}
                onItemDeleted={onItemDeleted}
                items={items}
            ></List>
        </div>
    );
};

export default Todo;
