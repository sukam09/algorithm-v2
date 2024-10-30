#include <bits/stdc++.h>
using namespace std;
#define X first
#define Y second

int solution(vector<string> want, vector<int> number, vector<string> discount) {
    int n = want.size();
    map<string, int> m;
    for (int i = 0; i < n; i++) {
        m.emplace(want[i], number[i]);
    }
    int ans = 0;
    for (int i = 0; i <= discount.size() - 10; i++) {
        map<string, int> mm;
        mm.clear();
        for (int j = i; j < i + 10; j++) {
            string s = discount[j];
            mm[s]++;
        }
        // for (auto x : mm) {
        //     cout << x.X << ' ' << x.Y << '\n';
        // }
        // cout << "\n\n";
        int chk = 0;
        for (auto x : mm) {
            string food;
            int cnt;
            tie(food, cnt) = x;
            int origin = m[food];
            if (cnt == origin) chk++;
        }
        if (chk == n) ans++;
    }
    return ans;
}