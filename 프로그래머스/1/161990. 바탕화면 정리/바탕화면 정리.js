function solution(wallpaper) {
    const xs = [];
    const ys = [];
    const n = wallpaper.length;
    const m = wallpaper[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (wallpaper[i][j] === '#') {
                xs.push(i);
                ys.push(j);
            }
        }
    }
    const xmin = Math.min(...xs);
    const xmax = Math.max(...xs);
    const ymin = Math.min(...ys);
    const ymax = Math.max(...ys);
    return [xmin, ymin, xmax + 1, ymax + 1];
}