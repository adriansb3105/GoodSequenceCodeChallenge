/**
 * @author Adrian Serrano
 * @date 04/08/2022
 * @name Good Sequence Code Challenge
 */

function minCost(N, H, M) {
    let result = 0;
    
    for (let i = 1; i <= N; i++) {
        if (H[i-1] === H[i]) {
            let minI = M[i-1] < M[i]? i-1 : i;
            H[minI] += 1;
            result += M[minI];
        }
    }

    return result;
}

// INPUT
let INPUT = `
3           --denotes N.
2   4       --denotes two integers Hi and Mi
2   1       --denotes two integers Hi and Mi
3   5       --denotes two integers Hi and Mi
`;

let temp = INPUT.trim().split(/\n/);
let N = parseInt(temp[0]);

let H = [];
let M = [];

for (let i = 1; i <= N; i++) {
    H.push(parseInt(temp[i]));

    let m = temp[i].split(/\s|\t/).filter(s => s !== '');
    M.push(parseInt(m[1]));
}

// OUTPUT
console.log(minCost(N, H, M));