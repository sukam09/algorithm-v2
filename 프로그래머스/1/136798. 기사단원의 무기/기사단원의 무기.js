function solution(number, limit, power) {
    let ans = 0;
    
    const yaksu = (n) => {
        let cnt = 0;
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                if (i * i === n) {
                    cnt += 1;
                } else {
                    cnt += 2;
                }
            }
        }
        return cnt;
    }
    
    for (let i = 1; i <= number; i++) {
        const cnt = yaksu(i);
        // console.log(i, cnt);
        if (cnt > limit) {
            ans += power;
        } else {
            ans += cnt;
        }
    }
    
    return ans;
}