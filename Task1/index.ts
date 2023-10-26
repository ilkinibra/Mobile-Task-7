// 6. Parametrlərdən gələn intervalda yerləşən ədədləri funksiya ilə console çıxardın. (rekursiya)

function loop(a,b){
    if(a<b-1){
        console.log(a+1);
        a++;
        loop(a,b);
    }
}
loop(4,8);