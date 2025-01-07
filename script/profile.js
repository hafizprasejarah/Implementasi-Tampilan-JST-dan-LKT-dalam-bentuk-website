function goBack() {
  // Navigasi ke halaman sebelumnya
  window.history.back();
}

const menu1 = document.querySelector(".tampilan-profile");
let btnBiodata = null;
let btnPembayaran = null;
let btnRekening = null;
let btnPengaturan = null;
let btnKeamanan = null;

if (menu1) {


  const biodata = document.querySelector('.container.pertama');
  document.querySelector(".list.i").onclick = () => {
    // console.log(document.querySelector(".tampilan-profile"));
    keamanan.classList.remove('active');
    pengaturan.classList.remove('active');
    rekening.classList.remove('active');
    pembayaran.classList.remove('active');
    biodata.classList.add('active');

    list1.classList.add('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');

  }

  const pembayaran = document.querySelector('.container.kedua');
  document.querySelector(".list.ii").onclick = () => {
    keamanan.classList.remove('active');
    pengaturan.classList.remove('active');
    rekening.classList.remove('active');
    pembayaran.classList.add('active');
    biodata.classList.remove('active');

    list1.classList.remove('active');
    list2.classList.add('active');
    list3.classList.remove('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
  }

  const rekening = document.querySelector('.container.ketiga');
  document.querySelector(".list.iii").onclick = () => {
    keamanan.classList.remove('active');
    pengaturan.classList.remove('active');
    rekening.classList.add('active');
    pembayaran.classList.remove('active');
    biodata.classList.remove('active');

    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.add('active');
    list4.classList.remove('active');
    list5.classList.remove('active');
  }

  const pengaturan = document.querySelector('.container.keempat');
  document.querySelector(".list.iv").onclick = () => {
    keamanan.classList.remove('active');
    pengaturan.classList.add('active');
    rekening.classList.remove('active');
    pembayaran.classList.remove('active');
    biodata.classList.remove('active');

    list1.classList.remove('active');
    list2.classList.remove('active');
    list3.classList.remove('active');
    list4.classList.add('active');
    list5.classList.remove('active');
  }
  const keamanan = document.querySelector('.container.kelima');
  document.querySelector(".list.v").onclick = () => {
    keamanan.classList.add('active');
    pengaturan.classList.remove('active');
    rekening.classList.remove('active');
    pembayaran.classList.remove('active');
    biodata.classList.remove('active');

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


  let btnBiodata = biodata;
  let btnPembayaran = pembayaran;
  let btnRekening = rekening;
  let btnPengaturan = pengaturan;
  let btnKeamanan = keamanan;
}

function logout() {
  window.location.href = "index.html";
}
function error(){
  window.location.href = "error.html";
}