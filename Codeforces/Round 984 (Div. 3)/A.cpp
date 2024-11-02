#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using pii = pair<int, int>;
using ti3 = tuple<int, int, int>;

void solve() {
  int n;
  cin >> n;
  vector<int> a(n);
  for (int i = 0; i < n; i++) cin >> a[i];
  bool ok = 1;
  for (int i = 1; i < n; i++) {
    if (abs(a[i] - a[i - 1]) != 5 && abs(a[i] - a[i - 1]) != 7) {
      ok = 0;
      break;
    }
  }
  cout << (ok ? "YES\n" : "NO\n");
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