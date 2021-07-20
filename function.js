function star (x){
    for(let i = 0; i<x; i++){
        let d = "";
        for (let index = 0; index < x; index++) {
            if(i === index){
                d = d + "*"
            }else {
                 d= d + " "
            }   
        }
        console.log(d)
    }
}
star(5);