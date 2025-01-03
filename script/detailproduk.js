function keranjang() {
    window.location.href = "keranjang.html";
    alert("berhasil menambahkan");
}
function beli() {
    window.location.href = "pembelian.html";
}

const menu = document.querySelector(".search-menu");



if (menu) {

    // btn login
    const menuproduk = document.querySelector(".search-menu");
    document.querySelector("#search-input").onclick = () => {
        menuproduk.classList.toggle('active');

    }


}