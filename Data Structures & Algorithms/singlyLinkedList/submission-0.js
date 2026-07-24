class LinkedListNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {

        let curr = this.head;

        while(index > 0 && curr !== null){
            curr = curr.next;
            index--;
        }

        return curr === null ? -1 : curr.value;
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newHead = new LinkedListNode(val);
        newHead.next = this.head;
        this.head = newHead;
        if(this.tail == null) this.tail = newHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new LinkedListNode(val);

        if(this.tail == null){
            this.head = this.tail = newTail;
        } else {
        this.tail.next = newTail;
        this.tail = newTail;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (this.head === null || index < 0) return false;

        if (index === 0) {
            this.head = this.head.next;
            if (this.head === null) this.tail = null;   // list is now empty
            return true;
        }

        let before = this.head;
        let curr = this.head.next;
        while (index > 1 && curr !== null) {
            before = curr;
            curr = curr.next;
            index--;
        }

        if (curr === null) return false;   // index was out of bounds

        before.next = curr.next;
        if (curr === this.tail) this.tail = before;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let result = [];

        let curr = this.head;
        while(curr != null){
            result.push(curr.value);
            curr = curr.next;
        }

        return result;
    }
}
