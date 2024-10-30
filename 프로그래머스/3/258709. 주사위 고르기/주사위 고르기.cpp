#include <bits/stdc++.h>
using namespace std;
#define X first
#define Y second

int n, half;
vector<int> a;
vector<int> b;
vector<int> sa, sb; // sum
vector<vector<int>> cands;
vector<int> cand2(6, -1);
int mx;
vector<int> ans;
vector<vector<int>> dice_;

void dfs(int k) {
    if (k == half) {
        cands.push_back(cand2);
        return;
    }
    for (int i = 0; i < 6; i++) {
        cand2[k] = i;
        dfs(k + 1);
    }
}

void solve() {
    sa.clear();
    sb.clear();
    // get sum of A
    for (int i = 0; i < cands.size(); i++) {
        // i: 지금 보고 있는 주사위 조합 순서
        // 각각의 cands[i]마다 합이 존재
        int sum = 0;
        for (int j = 0; j < half; j++) {
            // j: 지금 보고 있는 주사위가 주사위 셋에서 몇 번째인가?
            sum += dice_[a[j]][cands[i][j]];
        }
        sa.push_back(sum);
    }
    // get sum of B
    for (int i = 0; i < cands.size(); i++) {
        // i: 지금 보고 있는 주사위 조합 순서
        // 각각의 cands[i]마다 합이 존재
        int sum = 0;
        for (int j = 0; j < half; j++) {
            // j: 지금 보고 있는 주사위가 주사위 셋에서 몇 번째인가?
            sum += dice_[b[j]][cands[i][j]];
        }
        sb.push_back(sum);
    }
    int cnt = 0;
    sort(sb.begin(), sb.end());
    for (auto x : sa) {
        cnt += lower_bound(sb.begin(), sb.end(), x) - sb.begin();
    }
    if (cnt > mx) {
        mx = cnt;
        ans.clear();
        for (int i = 0; i < a.size(); i++) {
            ans.push_back(a[i] + 1);
        }
    }
}

vector<int> solution(vector<vector<int>> dice) {
    n = dice.size();
    half = n / 2;
    vector<int> cand(n, 1);
    fill(cand.begin(), cand.begin() + half, 0);
    dice_ = dice;
    
    // 0~5 인덱스 중복으로 뽑기
    dfs(0);
    
    do {
        a.clear();
        b.clear();
        for (int i = 0; i < n; i++) {
            if (cand[i] == 0) {
                a.push_back(i);
            } else {
                b.push_back(i);
            }
        }
        solve();
    } while (next_permutation(cand.begin(), cand.end()));
    return ans;
}