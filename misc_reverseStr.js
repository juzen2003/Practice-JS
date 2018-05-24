function reverse(str){
    let res = "";
    for(let i = 0; i < str.length; i++) {
        res = str[i] + res;
    }

    return res;
}
console.log(reverse('abcxd'));
