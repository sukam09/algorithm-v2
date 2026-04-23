function solution(bandage, health, attacks) {
    let t = 0;
    let combo = 0;
    let hp = health;
    const [a, b, c] = bandage;
    while (attacks.length > 0) {
        t++;
        combo++;
        
        if (attacks[0][0] === t) {
            hp -= attacks[0][1];
            if (hp <= 0) {
                return -1;
            }
            combo = 0;
            attacks.shift();
            continue;
        }
        
        hp += b;
        hp = Math.min(hp, health);
        
        if (combo === a) {
            hp += c;
            hp = Math.min(hp, health);
            combo = 0;
        }
        
        // console.log(t, combo, hp);
    }
    
    return hp;
}