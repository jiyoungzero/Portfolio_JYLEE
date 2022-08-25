function hello(){
    console.log(this);
    console.log(this === global);

}
//  함수 안에서 this를 호출하면 global이다. 
hello(); 

class A {
    constructor(num) {
        this.num = num;

    }
    memberFuction(){
        console.log('------class-------');
        console.log(this);
        console.log(this === global);
    }


}
// class 에서 this란 class자체를 가리킴 
const a = new A(1);
a.memberFuction();

console.log('----global scope-----');
console.log(this);
console.log(this === module.exports);