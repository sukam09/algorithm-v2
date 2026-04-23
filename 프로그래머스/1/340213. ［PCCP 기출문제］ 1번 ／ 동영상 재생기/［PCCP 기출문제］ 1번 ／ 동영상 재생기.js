function solution(video_len, pos, op_start, op_end, commands) {
    const conv = (m, s) => {
        return 60 * +m + +s;
    }
    
    const pm = pos.split(':')[0];
    const ps = pos.split(':')[1];
    let p = conv(pm, ps);
    
    const lm = video_len.split(':')[0];
    const ls = video_len.split(':')[1];
    const l = conv(lm, ls);
    
    const osm = op_start.split(':')[0];
    const oss = op_start.split(':')[1];
    const oem = op_end.split(':')[0];
    const oes = op_end.split(':')[1];
    
    const os = conv(osm, oss);
    const oe = conv(oem, oes);
    
    for (const c of commands) {
        if (p >= os && p <= oe) {
            p = oe;
        }
        
        if (c === 'next') {
            p = Math.min(p + 10, l);
        } else {
            p = Math.max(p - 10, 0);
        }
    }
    
    if (p >= os && p <= oe) {
        p = oe;
    }
    
    const ansm = String(Math.floor(p / 60)).padStart(2, '0');
    const anss = String(p % 60).padStart(2, '0');
    return `${ansm}:${anss}`;
}