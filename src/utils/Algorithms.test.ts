import { bubbleSort, quickSort, mergeSort, heapSort }  from "./Algorithms";

test("test bubbleSort", async() => {
    const array: number[] = [1, 2, 3, 4, 5];
    await bubbleSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
    const array2: number[] = [5, 4, 3, 2, 1, 1];
    await bubbleSort(array2);
    expect(array2).toEqual([1, 1, 2, 3, 4, 5]);
    const array3: number[] = [1, 4, 3, 5, 2, 1];
    await bubbleSort(array3);
    expect(array3).toEqual([1, 1, 2, 3, 4, 5]);
});

test("test quickSort", async() => {
    const array: number[] = [1, 2, 3, 4, 5];
    await quickSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
    const array2: number[] = [5, 4, 3, 2, 1, 1];
    await quickSort(array2);
    expect(array2).toEqual([1, 1, 2, 3, 4, 5]);
    const array3: number[] = [1, 4, 3, 5, 2, 1];
    await quickSort(array3);
    expect(array3).toEqual([1, 1, 2, 3, 4, 5]);
});

test("test mergeSort", async() => {
    const array: number[] = [1, 2, 3, 4, 5];
    await mergeSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
    const array2: number[] = [5, 4, 3, 2, 1, 1];
    await mergeSort(array2);
    expect(array2).toEqual([1, 1, 2, 3, 4, 5]);
    const array3: number[] = [1, 4, 3, 5, 2, 1];
    await mergeSort(array3);
    expect(array3).toEqual([1, 1, 2, 3, 4, 5]);
});

test("test heapSort", async() => {
    const array: number[] = [1, 2, 3, 4, 5];
    await heapSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
    const array2: number[] = [5, 4, 3, 2, 1, 1];
    await heapSort(array2);
    expect(array2).toEqual([1, 1, 2, 3, 4, 5]);
    const array3: number[] = [1, 4, 3, 5, 2, 1];
    await heapSort(array3);
    expect(array3).toEqual([1, 1, 2, 3, 4, 5]);
});
