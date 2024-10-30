#include <bits/stdc++.h>
using namespace std;

int d[1000005];

int solution(int x, int y, int n) {
    fill(d, d + 1000005, 0x7f7f7f);
    d[x] = 0;
    queue<int> q;
    q.push(x);
    while (!q.empty()) {
        int cur = q.front(); q.pop();
        if (cur == y) return d[cur];
        vector<int> v = {cur + n, cur * 2, cur * 3};
        for (auto nxt : v) {
            if (nxt > y || d[cur] + 1 >= d[nxt]) continue;
            d[nxt] = d[cur] + 1;
            q.push(nxt);
        }
    }
    return -1;
}