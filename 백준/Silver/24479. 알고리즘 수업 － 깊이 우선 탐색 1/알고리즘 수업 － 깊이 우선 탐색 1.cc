#include <bits/stdc++.h>
using namespace std;

int dist[100005];
vector<int> adj[100005];
int ord = 2;

void dfs(int v) {
  for (auto nv : adj[v]) {
    if (dist[nv] != 0) continue;
    dist[nv] = ord++;
    dfs(nv);
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  int n, m, r;
  cin >> n >> m >> r;
  while (m--) {
    int u, v;
    cin >> u >> v;
    adj[u].push_back(v);
    adj[v].push_back(u);
  }
  for (int i = 1; i <= n; i++) {
    sort(adj[i].begin(), adj[i].end());
  }
  dist[r] = 1;
  dfs(r);
  for (int i = 1; i <= n; i++)
    cout << dist[i] << '\n';
}