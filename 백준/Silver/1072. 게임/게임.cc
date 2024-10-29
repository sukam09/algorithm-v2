#include <bits/stdc++.h>
using namespace std;
using ll = long long;

ll x, y, z;

int solve(ll k) {
  ll p = (y + k) * 100 / (x + k);
  return p > z;
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cin >> x >> y;
  z = y * 100 / x;
  ll st = 1;
  ll en = 1000000001;
  while (st < en) {
    ll mid = (st + en) / 2;
    if (solve(mid)) {
      en = mid;
    } else {
      st = mid + 1;
    }
  }
  cout << (en == 1000000001 ? -1 : en);
}