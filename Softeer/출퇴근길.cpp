#include <bits/stdc++.h>
using namespace std;

vector<int> adj[100005];
vector<int> revadj[100005]; // 역방향 간선
int vis[100005];
int ret[100005];
int s, t;

void dfs(int v, int goal) {
  vis[v] = 1;
  if (v == goal) return;
  if (v != s && v != t) ret[v]++;
  for (auto nv : adj[v]) {
      if (vis[nv]) continue;
      dfs(nv, goal);
  }
}

void revdfs(int v, int goal) {
  vis[v] = 1;
  // 역방향 간선에서는 도착점일 때 탐색 종료하는 조건 없어도됨
  if (v != s && v != t) ret[v]++;
  for (auto nv : revadj[v]) {
      if (vis[nv]) continue;
      revdfs(nv, goal);
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  int n, m;
  cin >> n >> m;
  while (m--) {
    int x, y;
    cin >> x >> y;
    adj[x].push_back(y);
    revadj[y].push_back(x);
  }
  cin >> s >> t;
  // s에서 도달할 수 있는 모든 정점
  dfs(s, t);
  fill(vis, vis + n + 1, 0);
  // 해당 정점에서 t로 도달할 수 있는가? == t에서 역방향으로 해당 정점에 도달할 수 있는가?
  fill(vis, vis + n + 1, 0);
  revdfs(t, s);
  // 마찬가지로 t에서 도달할 수 있는 모든 정점 그리고 해당 정점에서 s로 도달할 수 있는가?
  fill(vis, vis + n + 1, 0);
  dfs(t, s);
  fill(vis, vis + n + 1, 0);
  revdfs(s, t);
  int ans = 0;
  for (int i = 1; i <= n; i++) {
    if (ret[i] == 4) {
      ans++;
    }
  }
  cout << ans;
}
/*
역방향 간선 그래프에서 t가 어떤 정점에 도달할 수 있다는 것은 정방향 간선 그래프에서 그 정점이 t에 도달할 수 있음을 의미한다.
출처: https://stritegdc.tistory.com/363
*/