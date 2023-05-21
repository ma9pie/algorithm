function solution(ineq, eq, n, m) {
    switch(ineq+eq){
            case ">=":
                return Number(n>=m)
                break;
            case "<=":
                return Number(n<=m)
                break;
            case ">!":
                return Number(n>m)
                break;
            case "<!":
                return Number(n<m)
                break;
    }
    return answer;
}