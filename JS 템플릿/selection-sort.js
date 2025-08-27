const selectionSort = () => {
  for (let i = 0; i < n; i++) {
    let mnidx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[mnidx]) mnidx = j;
    }
    swap(i, mnidx);
  }
};
