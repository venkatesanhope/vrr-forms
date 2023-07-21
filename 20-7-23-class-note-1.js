
function A(){
    var  A = 'a'
    console.log(A);
    setTimeout(()=>{
        B();
    },2000)
   
}

function B(){
    var B = 'b';
    console.log(B);
    setTimeout(() => {
        C();
    }, 4000);
}

function C(){
    var C ='c';
    setTimeout(() => {
        console.log(C)
    }, 4000);
}
A();


// task with one success and 0 fails -> ex: setTimeout
// task with one success and 1 fail and only one failure -> geo location
// task with one sucess with multiple failure -> xml-http-request
