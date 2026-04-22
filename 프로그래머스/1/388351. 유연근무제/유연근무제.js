function solution(schedules, timelogs, startday) {
    let ans = 0;
    const arr = [];
    let dayidx = startday - 1;
    for (const s of schedules) {
        const ss = String(s).padStart(4, '0');
        const h = ss.slice(0, 2);
        const m = ss.slice(2, 4);
        const mm = +h * 60 + +m + 10;
        arr.push(mm);
    }
    // console.log(arr);
    for (let i = 0; i < timelogs.length; i++) {
        let fail = false;
        dayidx = startday - 1;
        for (let j = 0; j < timelogs[0].length; j++) {
            // console.log(i, j, weekday);
            if (dayidx >= 5) {
                dayidx = (dayidx + 1) % 7;
                continue;
            }
            const time = timelogs[i][j];
            const tt = String(time).padStart(4, '0');
            const h = tt.slice(0, 2);
            const m = tt.slice(2, 4);
            const mm = +h * 60 + +m;
            if (mm > arr[i]) {
                fail = true;
                break;
            }
            dayidx = (dayidx + 1) % 7;
        }
        if (!fail) {
            ans++;
        }
    }
    return ans;
}