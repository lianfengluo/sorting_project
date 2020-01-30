type SetFun = (i:number, value: number) =>void;

export const bubbleSort = async(array:number[], set:SetFun) => {
  for (let i = 0; i < array.length - 1; ++i) {
    for (let j = i + 1; j < array.length; ++j) {
      if (array[i] > array[j]) {
        const temp = array[i];
        await set(i, array[j]);
        await set(j, temp);
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
} 

export const quickSort = async(array:number[], set:SetFun) => {
  const partition = async(array:number[], left: number, right: number):Promise<number> => {
    let pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; ++j) {
      if (array[j] < pivot) {
        ++i;
        const temp:number = array[i];
        await set(i, array[j]);
        await set(j, temp);
        array[i] = array[j];
        array[j] = temp;
      }
    }
    await set(right, array[i + 1]);
    await set(i + 1, array[right]);
    [array[i + 1], array[right]] = [array[right], array[i + 1]]
    return i + 1;
  }
  const _qsort = async(array:number[], left: number, right: number, set:SetFun) => {
    if (left < right) {
      const pivot:number = await partition(array, left, right);
      await _qsort(array, left, pivot - 1, set);
      await _qsort(array, pivot + 1, right, set);
    }
  }
  _qsort(array, 0, array.length - 1, set);
} 

export const mergeSort  = async(array:number[], set:SetFun) => {
  const _mergeSort = async(arr1:number[], arr2:number[], left: number, right: number): Promise<void> => {
    if (left + 1 >= right) {
      return
    }
    const mid = Math.floor((left + right) / 2);
    await _mergeSort(arr2, arr1, left, mid);
    await _mergeSort(arr2, arr1, mid, right);
    let i: number = left;
    let j: number = mid;
    let k: number = left;
    while (i < mid && j < right) {
      if (arr2[i] < arr2[j]) {
          await set(k, arr2[i]);
        arr1[k] = arr2[i];
        ++i;
      } else {
          await set(k, arr2[j]);
        arr1[k] = arr2[j];
        ++j;
      }
      ++k;
    }
    while (i < mid) {
        await set(k, arr2[i]);
      arr1[k] = arr2[i];
      ++k; ++i;
    }
    while (j < right) {
        await set(k, arr2[j]);
      arr1[k] = arr2[j];
      ++k; ++j;
    }
  }
  _mergeSort(array, [...array], 0, array.length);
} 

export const heapSort = async(array:number[], set:SetFun) => {
  const heapify = async(arr: number[], n: number, i: number): Promise<void> => {
    let left: number = 2 * i + 1;
    let right: number = 2 * i + 2;
    let largest: number = i;
    if (left < n && arr[largest] < arr[left])
      largest = left;
    if (right < n && arr[largest] < arr[right])
      largest = right;
    if (largest !== i) {
      const temp: number = arr[largest];
      await set(i, arr[largest]);
      await set(largest, temp);
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      await heapify(arr, n, largest);
    }
  }
  const _heapSort = async(arr: number[]): Promise<void> => {
    const length: number = arr.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; --i) {
      await heapify(arr, length, i);
    }
    for (let i = length - 1; i > 0; --i) {
      const temp: number = arr[0]; 
      await set(i, arr[0]);
      await set(0, temp);
      [arr[i], arr[0]] = [arr[0], arr[i]];
      await heapify(arr, i, 0);
    }
  }
  _heapSort(array);
}

