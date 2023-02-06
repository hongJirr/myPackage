const {sleep} = require("@wnrnal3012/study-test-jihye");

// 만든 패키지 테스트
async function main(){
    console.log("before");
    await sleep(1000);
    console.log("after");
}

console.log(main());