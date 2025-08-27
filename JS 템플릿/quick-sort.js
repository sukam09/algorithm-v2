const quickSort = (st, en) => {
  if (en <= st + 1) return;
  const pivot = arr[st];
  let l = st + 1;
  let r = en - 1;
  while (1) {
    while (l <= r && arr[l] <= pivot) l++;
    while (l <= r && arr[r] > pivot) r--;
    if (l > r) break;
    swap(l, r);
  }
  swap(st, r);
  quickSort(st, r);
  quickSort(r + 1, en);
};
