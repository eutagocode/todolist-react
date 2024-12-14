import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
    const [items, setItems] = useState([]);

    const onAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div className="container mx-auto">
            <h1>Todo</h1>
            <Form onAddItem={onAddItem}></Form>
            <List items={items}></List>
        </div>
    );
};

export default Todo;
