// console.log('1');

// const handler=function(){

//     console.log('2');
// }
// setTimeout(handler,0)
// const handler2=function(){

//     console.log('4');
// }
// setTimeout(handler2,10)
// console.log('3');

doLogin(printResult);

function printResult(result){
    console.log(result);
}

function showFeed(result){
    console.log("showing feed for", result.username);
}
function editProfile(result){
    console.log("showing feed for", result.username);
}
function doLogin(callback){
    setTimeout(()=>{
        let result = {user:"admin"}
        callback(result);
    },2000)
}