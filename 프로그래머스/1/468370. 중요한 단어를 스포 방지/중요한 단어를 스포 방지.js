function solution(message, spoiler_ranges) {
    let ans = 0;
    const arr = message.split(' ');
    const arr2 = Array(message.length).fill(null); // arr2[i]: i번째 인덱스가 어느 단어에 속하는가
    const set1 = new Set(); // 공개된 단어
    const set2 = new Set(); // 중복된 스포 방지 단어
    let idx = 0;
    const sp = Array(message.length).fill(0); // 스포 방지 구간인가?
    for (const [st, en] of spoiler_ranges) {
        for (let i = st; i <= en; i++) {
            sp[i] = 1;
        }
    }
    let opened = true; // 스포 방지 아닌 구간에서 보였는가?
    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            if (opened) {
                set1.add(arr[idx]);
            }
            opened = true;
            idx++;
        } else {
            arr2[i] = arr[idx];
            if (sp[i]) {
                // 스포 방지 구간에 들어갔다면
                opened = false;
            }
        }
    }
    // if (opened) {
    //     set1.add(arr[idx]);
    // }
    
    for (const [st, en] of spoiler_ranges) {
        const temp = new Set();
        for (let i = st; i <= en; i++) {
            if (arr2[i] !== null) {
                temp.add(arr2[i]);   
            }
        }
        for (const x of temp) {
            if (!set1.has(x) && !set2.has(x)) {
                ans++;
                set2.add(x);
            }
        }
    }
    return ans;
}