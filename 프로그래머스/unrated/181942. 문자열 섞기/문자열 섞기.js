function solution(str1, str2) {
    let answer = "";
    str1.split("").map((s,i)=>{answer+=s+str2.split("")[i]})
    return answer;
}