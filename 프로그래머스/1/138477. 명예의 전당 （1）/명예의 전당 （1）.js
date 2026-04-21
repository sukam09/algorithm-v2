function solution(k, score) {
    const mj = [];
    const ans = [];
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            mj.push(score[i]);
            mj.sort((a, b) => b - a);
            ans.push(mj[i]);
        } else {
            mj.push(score[i]);
            mj.sort((a, b) => b - a);
            mj.pop();
            ans.push(mj[k - 1]);
        }
        // console.log(mj);
    }
    return ans;
}