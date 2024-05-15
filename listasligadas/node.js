class node {
    constructor(data) {
        this.data = data;
        this.next = null;
        
    }
}
const list = new linkedList()
list.prepend(1);
list.prepend(2);
list.prepend(3);
console.log(list)

