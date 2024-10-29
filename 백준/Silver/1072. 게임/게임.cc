#include <bits/stdc++.h>
using namespace std;

long long x, y;
int z;

int solve(long long k) {
  long long p = (y + k) * 100 / (x + k);
  return p > z;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cin >> x >> y;
  z = y * 100 / x;
  if (z >= 99) {
    cout << -1;
    return 0;
  }
  long long st = 1;
  long long en = 1000000000;
  while (st < en) {
    int mid = (st + en) / 2;
    if (solve(mid)) {
      en = mid;
    } else {
      st = mid + 1;
    }
  }
  cout << en;
}