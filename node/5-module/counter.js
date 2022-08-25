let count = 0;

export function increase(){
    count++;
}

export function getCount(){
    return count;
}
// exports에 자체적으로 모듈을 대입해버리면 module.exports랑 달라지게 됨.
// 되도록이면 exports에 함수를 직접 등록하지 말기!
