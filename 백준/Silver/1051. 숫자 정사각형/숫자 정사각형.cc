#include <bits/stdc++.h>
using namespace std;

int arr[55][55];

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  int n, m;
  cin >> n >> m;
  for (int i = 0; i < n; i++) {
    string row;
    cin >> row;
    for (int j = 0; j < m; j++) {
      arr[i][j] = row[j] - '0';
    }
  }
  int k = min(n, m);
  int ans = 1;
  // l: 길이
  for (int l = 1; l <= k; l++) {
    for (int i = 0; i <= n - l; i++) {
      for (int j = 0; j <= m - l; j++) {
        int a = arr[i][j];
        int b = arr[i][j + l - 1];
        int c = arr[i + l - 1][j];
        int d = arr[i + l - 1][j + l - 1];
        if (a == b && b == c && c == d && d == a) {
          ans = max(ans, l * l);
        }
      }
    }
  }
  cout << ans;
}