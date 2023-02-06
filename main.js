const {sleep} = require("@wnrnal3012/study-test-jihye");

async function main(){
    console.log("before");
    await sleep(1000);
    console.log("after");
}

console.log(main());