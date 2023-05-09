function solution(my_string, k) {
    let answer = '';
    return Array(k).fill().reduce((acc,cur)=>acc+my_string,answer);
}