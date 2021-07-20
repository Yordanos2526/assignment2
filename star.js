let a=5;
let string = "";
for(let i=1; i <= a; i++){
    for (let j=1;j<=a-i;j++){
        string +=" ";
    }
        for (let k=0;k<2*i-1;k++){
             string +="*";
    }
    string += "\n";
}
console.log(string);
