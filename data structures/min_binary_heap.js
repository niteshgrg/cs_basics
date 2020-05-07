function addElement(heap, element) {
    let currIndex = heap.length;
    heap.push(element);
    bubbleUp(heap, currIndex);
}

function poll(heap) {
    heap[0] = heap[heap.length - 1];
    heap.pop();
    sinkDown(heap, 0);
}

function bubbleUp(heap, index) {
    let parent;
    if(index === 0) return;
    if(index%2 === 0) {
        parent = (index-2)/2;
    } else {
        parent = (index-1)/2;
    }
    if(heap[parent] > heap[index]) {
        let temp = heap[parent];
        heap[parent] = heap[index];
        heap[index] = temp;
        bubbleUp(heap, parent);
    }
}

function sinkDown(heap, index) {
    let heapLength = heap.length;

    let leftChild = 2*index + 1;
    let rightChild = 2*index + 2;

    if(leftChild >= heapLength && rightChild >= heapLength) return;

    leftChild = leftChild < heapLength ? leftChild : Number.MAX_SAFE_INTEGER;
    rightChild = rightChild < heapLength ? rightChild : Number.MAX_SAFE_INTEGER;

    if(heap[index] > Math.min(heap[leftChild], heap[rightChild])) {
        let minChild = heap[leftChild] <= heap[rightChild] ? leftChild : rightChild;
        let temp = heap[minChild];
        heap[minChild] = heap[index];
        heap[index] = temp;
        sinkDown(heap, minChild);
    }
}

let heap = [1, 2, 3];
addElement(heap, 0);
poll(heap);
console.log(heap);