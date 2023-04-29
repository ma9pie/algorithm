function solution(arr, k) {
    const result = arr.map(n=>{
        return k % 2 === 0 ? n + k : n * k
    })
    return result;
}