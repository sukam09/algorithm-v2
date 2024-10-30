#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> order) {
    int ans = 0;
    int ord = 1; // 영재가 들은 박스
    int idx = 0; // 지금 보고 있는 트럭 아저씨의 명령(?)
    stack<int> s;
    int n = order.size();
    while (1) {
        if (idx == n) break;
        
        if (ord > n) {
            // 영재가 이제 박스를 더이상 들 수 없음
            if (!s.empty() && s.top() == order[idx]) {
                ans++;
                idx++;
                s.pop();
            } else {
                // 불가능
                break;
            }
        } else {
            if (ord == order[idx]) {
                ans++;
                idx++;
                ord++;
            } else if (!s.empty() && s.top() == order[idx]) {
                ans++;
                idx++;
                s.pop();
            } else {
                s.push(ord);
                ord++;
            }   
        }
    }
    return ans;
}