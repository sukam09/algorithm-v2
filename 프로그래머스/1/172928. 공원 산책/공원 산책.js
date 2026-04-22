function solution(park, routes) {
    const n = park.length;
    const m = park[0].length;
    let sx;
    let sy;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (park[i][j] === 'S') {
                sx = i;
                sy = j;
            }
        }
    }
    let x = sx;
    let y = sy;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const dir = {'N': 0, 'S': 1, 'W': 2, 'E': 3};
    const OOB = (x, y) => x < 0 || x >= n || y < 0 || y >= m;
    for (const r of routes) {
        const [op, n] = r.split(' ');
        const nn = +n;
        let nx = x;
        let ny = y;
        let fail = false;
        for (let i = 0; i < nn; i++) {
            const di = dir[op];
            nx += dx[di];
            ny += dy[di];
            if (OOB(nx, ny) || park[nx][ny] === 'X') {
                fail = true;
                break;
            }
        }
        if (!fail) {
            x = nx;
            y = ny;
        }
    }
    return [x, y];
}