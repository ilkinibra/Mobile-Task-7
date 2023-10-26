const num = 78;

const second = num%10
const first = num - second;
let result ='';

if(first===10){
    result='on'
}else if(first===20){
    result='iyirmi'
}else if(first===30){
    result='otuz'
}else if(first===40){
    result='qirx'
}else if(first===50){
    result='elli'
}else if(first===60){
    result='altmis'
}else if(first===70){
    result='yetmis'
}else if(first===80){
    result='seksen'
}else if(first===90){
    result='doqsan'
}

if(second===1){
    result=result + ' bir'
}else if(second===2){
    result= result + ' iki'
}else if(second===3){
    result= result + ' uc'
}else if(second===4){
    result= result + ' dord'
}else if(second===5){
    result= result + ' bes'
}else if(second===6){
    result= result + ' alti'
}else if(second===7){
    result= result + ' yeddi'
}else if(second===8){
    result= result + ' sekkiz'
}else if(second===9){
    result= result + ' doqquz'
}
console.log(result);