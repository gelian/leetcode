class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const head = new ListNode();
    let current = head;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const x = l1 !== null ? l1.val : 0;
        const y = l2 !== null ? l2.val : 0;

        const sum = x + y + carry;
        const quo = ~~(sum / 10);
        const rem = sum % 10;

        carry = quo;
        current.next = new ListNode(rem);
        current = current.next;

        l1 = l1 !== null ? l1.next : l1;
        l2 = l2 !== null ? l2.next : l2;
    }

    return head.next;
}
