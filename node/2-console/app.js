console.log('logging......');

console.log('log');
console.info('info');
console.warn('warn'); // 경보
console.error('error'); // 시스템 에러

// assert
console.assert(2=== 3, 'not same'); // 특정한 조건일 때 출력하고 싶다면
console.assert(2 === 2, 'same');

// print object 
const student = { name : 'jiyoung', age : '25', company: {name: 'AC'}};
console.log(student);
console.table(student);
console.dir(student, {showHidden :true, colors: false, depth:2});