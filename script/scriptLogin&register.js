function togglePassword() {
    const passwordInput = document.getElementById('login_password');
    const eyePassword = document.getElementById('see');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    eyePassword.classList.toggle('active');
}

function togglePasswordRegister1() {
    const passwordInputRegister = document.getElementById('register_password');
    const eyePassword = document.getElementById('seeRegister');
    const type = passwordInputRegister.type === 'password' ? 'text' : 'password';
    passwordInputRegister.type = type;
    eyePassword.classList.toggle('active');
}

function togglePasswordRegister2() {
    const passwordInputRegister = document.getElementById('verify_password');
    const eyePassword = document.getElementById('seeverify');
    const type = passwordInputRegister.type === 'password' ? 'text' : 'password';
    passwordInputRegister.type = type;
    eyePassword.classList.toggle('active');
}


function goBack() {
    // Navigasi ke halaman sebelumnya
    window.history.back();
}


// Data login yang valid
const validUsername = "user123@gmail.com";
const validPassword = "password123";

function checkLogin(event) {
    // Ambil nilai input
    event.preventDefault();
    const username = document.getElementById("login-email").value;
    const password = document.getElementById("login_password").value;

    // Validasi

    if (username === validUsername && password === validPassword) {
        // Jika sesuai, arahkan ke halaman selanjutnya
        window.location.href = "HalamanUtama.html"; // Ganti dengan URL halaman tujuan
    } else {
        // Jika tidak sesuai, tampilkan pesan error
        alert("Invalid username or password!");
    }
}


function checkregister(event) {
    event.preventDefault();

    window.location.href = "login.html"; // Ganti dengan URL halaman tujuan

}
