const mergeSort = (st, en) => {
  if (en === st + 1) return;
  const mid = Math.floor((st + en) / 2);
  mergeSort(st, mid);
  mergeSort(mid, en);
  merge(st, en);
};

const merge = (st, en) => {
  const mid = Math.floor((st + en) / 2);
  let lidx = st;
  let ridx = mid;
  for (let i = st; i < en; i++) {
    if (ridx === en) tmp[i] = arr[lidx++];
    else if (lidx === mid) tmp[i] = arr[ridx++];
    else if (arr[lidx] <= arr[ridx]) tmp[i] = arr[lidx++];
    else tmp[i] = arr[ridx++];
  }
  for (let i = st; i < en; i++) arr[i] = tmp[i];
};
