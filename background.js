// this file should not be in worked on in dist.
//look at moving it using webpack ? or gulp.
console.log("hello from background file")

chrome.extension.onMessage.addListener((request,sender,sendResponse)=>{
    if( request.greeting === "startTimer" ){
        console.log('starting timer')
    }
})