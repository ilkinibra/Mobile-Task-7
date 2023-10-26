// 7. Parametrdə n ədədini qəbul edən və n-ci Fibonaççi sayını qaytaran funksiya yazın. (rekursiya)

function fib (n){
    let a=1;
    let b=1;
    for(let i=3; i<=n;i++){
        let c=a+b;
        a=b;
        b=c;
    }
    return b;
}
console.log(fib(10))

// 1 1 2 3 5 8 13 21 34 55