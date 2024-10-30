#include <bits/stdc++.h>
using namespace std;

int arr[55][55];
int jisu[55];
int g[55];

int solution(vector<string> friends, vector<string> gifts) {
    map<string, int> m;
    int n = friends.size();
    int id = 0;
    for (auto &s : friends) {
        m[s] = id++;
    }
    for (auto &s : gifts) {
        stringstream ss(s);
        string a, b;
        ss >> a >> b;
        int ai = m[a];
        int bi = m[b];
        arr[ai][bi]++;
        jisu[ai]++;
        jisu[bi]--;
    }
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i][j] > arr[j][i]) g[i]++;
            else if (arr[i][j] < arr[j][i]) g[j]++;
            else if (jisu[i] > jisu[j]) g[i]++;
            else if (jisu[i] < jisu[j]) g[j]++;
        }
    }
    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (g[i] > ans) {
            ans = g[i];
        }
    }
    return ans;
}