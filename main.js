function reverse(name){
    let arr = "";
    for(var i = 1 ; i <= name.lenght; i++){
      arr = arr + name[name.lenght -i];
    }
    return arr;
}
console.log(reverse("rustam"));