const insertionSort = () => {
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
};
