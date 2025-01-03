let count = 0;
const minCount = 0; // Batas minimum
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