const bubbleSort = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1);
    }
  }
};
