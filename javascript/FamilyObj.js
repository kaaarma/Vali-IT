/*
Write a JavaScript program to extract out the value at the specified index from a specified
array. To do so, create an array containing at least 3 family objects with the key-value pairs
papa, mama, kid1. Console log the extracted value. Console log the kid1 name of the
extracted family object

No frontend involved

Hint�: have a look at Array functions*/

let families = [{"papa": "Raul", "mama": "Rita", "kid1": "Jesper"},
    {"papa": "Matu", "mama": "Heli", "kid1": "Sass"},
    {"papa": "Ivar", "mama": "Sille", "kid1": "Heli"}]

console.log(families[2]);
console.log(families[2].kid1);
