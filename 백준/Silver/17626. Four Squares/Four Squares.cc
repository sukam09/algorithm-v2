#include <bits/stdc++.h>
using namespace std;

int d[50005];
int n;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cin >> n;
  for (int i = 1; i <= n; i++) {
    d[i] = d[i - 1] + 1;
    for (int j = 1; j * j <= i; j++) {
      d[i] = min(d[i], d[i - j * j] + 1);
    }
  }
  cout << d[n];
}