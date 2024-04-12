let a = [9, 8, 5, 1, 3, 4, 2];

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < a.length - i - 1; j++){
        if(a[j] > a[j+1]){
            [a[j], a[j+1]] = [a[j+1], a[j]];
        }
    }
}
console.log(a);