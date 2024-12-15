import { v7 } from "uuid";

class Item {
    constructor(text) {
        this.id = v7();
        this.text = text;
        this.done = false;
    }
}

export default Item;
