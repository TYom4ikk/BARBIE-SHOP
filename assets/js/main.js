//let внутри функции
//var глобально
//нет строгой типизации
/*let name_param = "";
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
/*console.log(heroes[0].name);

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
*/

alert("Welcome to Barbie site");

let dolls = [
    {
        "image":"assets/image/dolls/doll_1.png",
        "text" : "doll_1"
    },
    {
        "image":"assets/image/dolls/doll_2.png",
        "text" : "doll_2"
    },
    {
        "image":"assets/image/dolls/doll_3.png",
        "text" : "doll_3"
    },
    {
        "image":"assets/image/dolls/doll_4.png",
        "text" : "doll_4"
    },
    {
        "image":"assets/image/dolls/doll_5.png",
        "text" : "doll_5"
    },
    {
        "image":"assets/image/dolls/doll_6.png",
        "text" : "doll_6"
    }
]


let currentIndex = 0;

function showImages() {
    let imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; // Очищаем контейнер перед выводом новых картинок

    for (let i = currentIndex; i < currentIndex + 4; i++) {
        if (i < dolls.length) {
            let doll = dolls[i];
            let img = document.createElement("img");
            img.src = doll.image;
            img.alt = doll.text;
            imageContainer.appendChild(img);
        }
    }
}

function shiftImages() {
    if (currentIndex + 1 < dolls.length) {
        currentIndex++;
        showImages();
    }
}

// Вызываем функцию для первичного вывода картинок
showImages();

let navigation = [{
    "image" : "assets/image/top panel/fi-rr-home.png",
    "text" : "Home"
},
{
    "image" : "assets/image/top panel/fi-rr-makeup-brush.png",
    "text" : "Accessoties"
},
{
    "image" :"assets/image/top panel/fi-rr-gallery.png",
    "text": "Gallery"
},
{
    "image":"assets/image/top panel/fi-rr-shop.png",
    "text":"Shop"
},
{
    "image":"assets/image/top panel/fi-rr-headset.png",
    "text":"Support"
}
];

function ShowNav(navigation){
    if(navigation.length>0){
        for(let i = 0; i<navigation.length; i++){
            console.log(navigation[i].name);
        }
        return "End";
    }
    else{
        return "No Names";
    }
}

ShowNav(navigation);