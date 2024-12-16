import { useEffect, useState } from "react";
import Item from "./components/ItemModel";
import List from "./components/List";
import Form from "./components/Form";
import Add from "./components/Add";
import Modal from "./components/Modal";

const Todo = () => {
    const SAVED_ITEMS = "SAVED_ITEMS";
    const [items, setItems] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS) || "[]");

        if (savedItems) setItems(savedItems);

        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized)
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items, isInitialized]);

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
        <div className="container mx-auto mt-9 flex flex-col gap-4 px-4 sm:px-0">
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
            <Add></Add>
            <Modal></Modal>
        </div>
    );
};

export default Todo;
