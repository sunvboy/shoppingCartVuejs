const toCurrency = function(value,unit = 'USD',dir = 'right'){
    if(dir === 'right'){
        return value+ ' '+ unit;

    }else{
        return unit+ ' '+ value;

    }
}
const validateQuantity = function(quantity){
    let num  = parseInt(quantity);
    if(num == quantity && !isNaN(num)){
        return num >= 1;
    }else{
        return  false
    }
    
}
export {
    toCurrency,validateQuantity
}