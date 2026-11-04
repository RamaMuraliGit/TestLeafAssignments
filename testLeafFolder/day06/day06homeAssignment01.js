let name="butterfly";
let result="";
for(let i=0;i<name.length;i++){
    if(i%2!==0){
        result=result+name[i].toUpperCase();
    }
    else{
    result=result+name[i];
    }
   
}
console.log(result);