const timerPromise = (timeInterval) => new Promise((resolve)=>{
setTimeout(()=>{
resolve();
},timeInterval)
})

function asynch(){
timerPromise(1000)
.then(()=> {console.log("A"); return timerPromise(2000);})
.then(()=> {console.log("B"); return timerPromise(3000);})
.then(()=> {console.log("C");})
.catch(()=>{})
.finally(()=>{})

console.log("ended asynch")
}




async function runLogic(){
await timerPromise(1000);
console.log("AA")
await timerPromise(2000);
console.log("BB")
await timerPromise(3000);
console.log("CC");

console.log("Ended sync")
}

runLogic();