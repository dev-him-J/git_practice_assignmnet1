//check prime code

function checkPrime(num){
if(num<1){
return false;
}
let factor=0;
for(let i=1;i<=num;i++){
if(num%i===0){
factor++; 
}

if(factor===2){
return true;
} 
return false;

}


console.log(checkPrime(13));
console.log(checkPrime(20));
