#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> elements) {
    int n = elements.size();
    vector<int> v(1);
    for (int i = 0; i < n; i++) {
        v.push_back(elements[i]);
    }
    for (int i = 0; i < n - 1; i++) {
        v.push_back(elements[i]);
    }
    vector<int> s(2 * n, 0);
    for (int i = 1; i < 2 * n; i++) {
        s[i] = s[i - 1] + v[i];
    }
    set<int> st;
    for (int k = 1; k <= n; k++) {
        for (int i = 1; i <= n; i++) {
            int j = i + k - 1;
            st.emplace(s[j] - s[i - 1]);
        }
    }
    return st.size();
}