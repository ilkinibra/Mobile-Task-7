function sademurekkeb(eded){
    if(eded <=1){
        return 'ne sade eded nede murekkeb deyil';
    }
    for(let i= 2; i<= Math.sqrt(eded);i++){
        if(eded%i===0){
            return 'murekkeb eded'
        }
    
    }
    return 'sade eded'
    }
    const eded=31;
    const statuss =sademurekkeb(eded);
    console.log(statuss);