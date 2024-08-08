// let a = 1;

// function global(){
//     console.log(a);
//     function interno(){
//         console.log(a);
//     }
//     interno();
// }
// console.log(a);
// global();


function local(){
    let a = 2;
    console.log(a);
    function interna(){
        console.log(a);
    }
    console.log(a);
    interna();
}
local();
