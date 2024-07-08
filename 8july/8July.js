// function doLoginWithCallback(username, password, callback){
//     let status = false;
//     setTimeout(()=>{
//         if(username == "admin" && password =="admin123")
//             status = true
//         callback(status);
//     },2000)
// }

function showFeed(status){
    if(status == true){
        console.log('Showing feed for the logged in user')
    }
    else{
        console.log('Login not successful')
    }
}

// doLoginWithCallback("admin","admin123", showFeed);


function doLoginWithPromise(username, password){
    let status = false;
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            if(username == "admin" && password =="admin123")
            resolve(true)
        else
        reject(false)
        },0)
    })

}

function showFeed(status){
    return new Promise((resolve,reject)=>{
        if(status==true)
            resolve ("showing feed")
        else 
        return ("not successful")
    })
    if(status == true){
        console.log('Showing feed for the logged in user')
    }
    else{
        console.log('Login not successful')
    }
}

// let status=doLoginWithPromise("admin","admin123", showFeed)
// .then((result)=>{
//     // console.log("value is", result);
//    return showFeed(result)
// })
// .then((innerOne)=>{
//     console.log(showFeed(result));
// })
// .catch((result)=>{
//     console.log("value is", result);
//     showFeed(result)

// })//promise gets rejected
async function logStatus(){
    let status = await doLoginWithPromise('admin', "admin123")
    let message = await showFeed(status);
    console.log(message)
}

logStatus();