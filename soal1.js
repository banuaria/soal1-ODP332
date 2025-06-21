// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let answerOne = 0;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 == 0 ){
       answerOne  = answerOne + element
    }
   
}
console.log("Answer 1: ", answerOne);
// Number 1


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let answerTwo = 0;

// ANSWER 2
for (let index = 0; index < numbersTwo.length; index++) {
  if (numbersTwo[index] % 2 !== 0) {
    answerTwo += numbersTwo[index];
  }
}

console.log("Answer 2: ", answerTwo);
// Number 2


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let answerThree  = [];
for (let index = 0; index < students.length; index++) {
        let element = students[index];
        answerThree.push(element.toUpperCase())
    }
console.log("Answer 3: ", answerThree);
// Number 3

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
let answerFour = [];
for (let index = 0; index < people.length; index++) {
    const person = people[index];
    if (person.age > 18 && person.name.length > 5) {
        answerFour.push(person.name);
    }
}
console.log("Answer 4: ", answerFour);
// Number 4


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let totalPrice = 0;
for (let index = 0; index < items.length; index++) {
    const item = items[index];
    totalPrice += item.price;
}
console.log("Number 5: ", totalPrice);
// Number 5
  

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [];
for (let index = 0; index < numbersThree.length; index++) {
    const element = numbersThree[index];
    if (!uniqueNumbers.includes(element)) {
        uniqueNumbers.push(element);
    }
}
console.log("Answer 6: ", uniqueNumbers);
// Number 6


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];
let highestPriceProduct = products[0];
for (let index = 1; index < products.length; index++) {
    const product = products[index];
    if (product.price > highestPriceProduct.price) {
        highestPriceProduct = product;
    }
}
console.log("Answer 7: ", highestPriceProduct.name);
// Number 7


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let sentence = '';
for (let index = 0; index < words.length; index++) {
    const word = words[index];
    sentence += word + ' ';
}
console.log("Answer 8: ", sentence.trim() + '.');
// Number 8


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let namesWithA = [];
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    if (name.includes('a') && namesWithA.length < 3) {
        namesWithA.push(name);
    }
}
console.log("Answer 9: ", namesWithA);
// Number 9


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let totalCharacters = 0;
for (let index = 0; index < namesTwo.length; index++) {
    const name = namesTwo[index];
    totalCharacters += name.length;
}
console.log("Answer 10: ", totalCharacters);
// Number 10


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let formattedPeople = [];
for (let index = 0; index < peopleTwo.length; index++) {
    const person = peopleTwo[index];
    if (person.age > 21) {
        formattedPeople.push(`${person.name} (${person.age})`);
    }
}
console.log("Answer 11: ", formattedPeople);
// Number 11


