#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using pii = pair<int, int>;
using ti3 = tuple<int, int, int>;

void solve() {
  int n, k;
  cin >> n >> k;
  vector<int> v(k + 1);
  for (int i = 0; i < k; i++) {
    int x, y;
    cin >> x >> y;
    v[x] += y;
  }
  sort(v.begin(), v.end(), greater<int>());
  int ret = 0;
  for (int i = 0; i < n; i++) {
    if (i >= (int)v.size()) break;
    ret += v[i];
  }
  cout << ret << '\n';
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  int t;
  cin >> t;
  while (t--) {
    solve();
  }
}