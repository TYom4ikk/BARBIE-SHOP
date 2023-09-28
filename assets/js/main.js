//let внутри функции
//var глобально
//нет строгой типизации
let name_param = "";
let arr = ["","", 1, function name(){}];
let obj = { "asd": 12, };

let name = "Vlad";
alert(name);

let heroes = [{
    "name":"Vlad",
    "age":12,
    "height":180
},
{
    "name":"Gena",
    "age":25,
    "height":150
}];

console.log(heroes); /**/
console.log(heroes[0].name);

function Rename(arr){
    if(arr.length>0){
        for(let i = 0; i<arr.length; i++){
            console.log(arr[i].name);
        }
        return "End";
    }
    else{
        return "No Names";
    }
}

let li = document; //Искать все документы 

let navigation = [{
    "image" : "assets/image/dolls/image 15 (1).png",
    "text" : "Home"
}]