/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
    // if list is empty return it
    if (!list.head) return list;

    //
    const x_next = x.next;
    const x_prev = list.findWithPrevious((node) => node === x)[1];
    const y_prev = list.findWithPrevious((node) => node === y)[1];

    // swap the next pointer of x and y
    [x.next, y.next] = [y.next, x.next];

    // Set y as the head of the list if x is the head of the list
    // otherwise just set the next node of the x_prev to y
    if (x_prev) {
      x_prev.next = y;
    } else {
      list.head = y;
    }
    
    // Set x as the head of the list if y is the head
    // otherwise just set the next node of the y_prev to x
    if (y_prev) {
      y_prev.next = x;
    } else {
      list.head = x;
    }
  
    return list;
}

module.exports = swap;
