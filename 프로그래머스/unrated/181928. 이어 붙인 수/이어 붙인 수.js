function solution(num_list) {
    var answer = 0;
    let valA = "";
    let valB = "";
    num_list.map(num=>{
        if(num%2===0){
            valA+=num;
        }else{
            valB+=num;
        }
    })
    return Number(valA) + Number(valB);
}