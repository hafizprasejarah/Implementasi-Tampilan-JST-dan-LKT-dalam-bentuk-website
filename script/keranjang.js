let count = 1;
const minCount = 1; // Batas minimum
const maxCount = 10; // Batas maksimum

const countDisplay = document.getElementById("countDisplay");
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");

function updateDisplay() {
  countDisplay.textContent = count;
  decrementBtn.disabled = count <= minCount; // Disable jika mencapai batas minimum
  incrementBtn.disabled = count >= maxCount; // Disable jika mencapai batas maksimum
}

function decrement() {
  if (count > minCount) {
    count--;
    updateDisplay();
  }
}

function increment() {
  if (count < maxCount) {
    count++;
    updateDisplay();
  }
}

// Update display saat halaman dimuat
updateDisplay();



function goBack() {
  // Navigasi ke halaman sebelumnya
  window.history.back();
}


function detail(){
  window.location.href = "detailproduk.html";
}

function pembayaran(){
  window.location.href = "pembelian.html";
}

function detailpembayaran(){
  window.location.href = "detailpembayaran.html";

}


const menu1 = document.querySelector(".container-keranjang");
let btnDipesan = null;
let btnMenunggu = null;
let btnDiproses = null;
let btnDikirim = null;
let btnSelesai = null;

if (menu1) {


  const Dipesan = document.querySelector('.daftar-keranjang.pertama');
  document.querySelector(".list.i").onclick = () => {
    // console.log(document.querySelector(".tampilan-profile"));
    Selesai.classList.remove('active');
    Dikirim.classList.remove('active');
    Diproses.classList.remove('active');
    Menunggu.classList.remove('active');
    Dipesan.classList.add('active');

    list1.classList.add('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');


  }

  const Menunggu = document.querySelector('.daftar-keranjang.kedua');
  document.querySelector(".list.ii").onclick = () => {
    Selesai.classList.remove('active');
    Dikirim.classList.remove('active');
    Diproses.classList.remove('active');
    Menunggu.classList.add('active');
    Dipesan.classList.remove('active');

    list1.classList.remove('active');
    list2.classList.add('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');

  }

  const Diproses = document.querySelector('.daftar-keranjang.ketiga');
  document.querySelector(".list.iii").onclick = () => {
    Selesai.classList.remove('active');
    Dikirim.classList.remove('active');
    Diproses.classList.add('active');
    Menunggu.classList.remove('active');
    Dipesan.classList.remove('active');

    
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.add('active');
    list4.classList.remove('active');
    list5.classList.remove('active');

  }

  const Dikirim = document.querySelector('.daftar-keranjang.keempat');
  document.querySelector(".list.iv").onclick = () => {
    Selesai.classList.remove('active');
    Dikirim.classList.add('active');
    Diproses.classList.remove('active');
    Menunggu.classList.remove('active');
    Dipesan.classList.remove('active');

    
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.add('active');
    list5.classList.remove('active');

  }
  const Selesai = document.querySelector('.daftar-keranjang.kelima');
  document.querySelector(".list.v").onclick = () => {
    Selesai.classList.add('active');
    Dikirim.classList.remove('active');
    Diproses.classList.remove('active');
    Menunggu.classList.remove('active');
    Dipesan.classList.remove('active');

    
    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.add('active');
  }

  const list1 = document.querySelector(".list.i");
  const list2 = document.querySelector(".list.ii");
  const list3 = document.querySelector(".list.iii");
  const list4 = document.querySelector(".list.iv");
  const list5 = document.querySelector(".list.v");


  let btnDipesan = Dipesan;
  let btnMenunggu = Menunggu;
  let btnDiproses = Diproses;
  let btnDikirim = Dikirim;
  let btnSelesai = Selesai;
}
