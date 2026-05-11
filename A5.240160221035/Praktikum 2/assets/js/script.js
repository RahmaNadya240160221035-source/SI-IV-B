
const title = 'Belajar JavaScript';

alert(title);
console.log('Selamat datang di website portofolio');


const umur = 20;


if (umur < 18) {
  console.log('Masih remaja');
} else {
  console.log('Sudah dewasa');
}


setTimeout(() => {
  console.log('Timer finished');
}, 1000);


if (true) {
  let hobi = 'Mendengarkan Musik';
  console.log(hobi);
}


function sapa() {
  alert('Halo, terima kasih sudah mengunjungi portofolio saya!');
}


function generateRandomColor() {
  const colors = [
    'cornflowerblue',
    '#7BAAF7',
    '#89C2FF',
    '#A7C7FF'
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}


function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}


const skill = [
  'Canva',
  'Microsoft Word',
  'Microsoft Excel'
];

console.log(skill);

for (let i = 0; i < skill.length; i++) {
  console.log(skill[i]);
}

const mahasiswa = {
  nama: 'Rahma Nadya',
  umur: 20,
  jurusan: 'Sistem Informasi'
};

console.log(mahasiswa);


window.onload = function () {
  changeBackgroundColor();
  
};

