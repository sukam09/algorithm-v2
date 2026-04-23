function solution(n, w, num) {
    const h = Math.ceil(n / w);
    let tg = -1;
    let x = h - 1;
    let y = 0;
    let dir = 1;
    let cur = 1;
    let ans = 0;
    let dirChanged = false; 
    
    if (w === 1) {
        return h - (num - 1);
    }
    
    while (cur <= n) {
        if (cur === num) {
            tg = y;
        }
        if (y === tg) {
            // console.log(cur, y);
            ans++;
        }
        
        if (cur > 1 && (y === 0 || y === w - 1) && !dirChanged) {
            x--;
            dir = 1 - dir;
            dirChanged = true;
        } else {
            y += dir === 1 ? 1 : -1;
            dirChanged = false;
        }
        cur++;
    }
    return ans;
}