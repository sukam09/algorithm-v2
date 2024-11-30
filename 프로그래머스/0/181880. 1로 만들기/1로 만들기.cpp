#include <bits/stdc++.h>
using namespace std;

int solve(int n) {
    int ret = 0;
    while (n > 1) {
        if (n % 2 == 0) n = n / 2;
        else n = (n - 1) / 2;
        ret++;
    }
    return ret;
}

int solution(vector<int> num_list) {
    int ans = 0;
    for (auto x : num_list) {
        ans += solve(x);
    }
    return ans;
}