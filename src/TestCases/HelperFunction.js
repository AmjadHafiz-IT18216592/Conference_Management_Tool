
export const checkAmount=(amount)=>{
    if(amount >=10 && amount <=1000){
        return amount;
    }
    else
        return -1;
}
