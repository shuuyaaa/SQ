function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const submitForm = document.getElementById('submitForm');
    
    try {
        if (display.value === '1+1') {
            display.value = "mau nonton bioskop gak?";
            submitForm.style.display = 'block';  // Tampilkan form pilihan
        } else {
            display.value = eval(display.value);
            submitForm.style.display = 'none';  // Sembunyikan form jika bukan 1+1
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function enableSubmit() {
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = false;  // Aktifkan tombol submit setelah memilih opsi
}

document.getElementById('submitForm').onsubmit = function(event) {
    event.preventDefault();  // Mencegah form submit default
    showConfirmation();
    playMusicAndBackgroundVideo();
};

function showConfirmation() {
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';  // Tampilkan pesan konfirmasi
}

function playMusicAndBackgroundVideo() {
    const music = document.getElementById('music');
    const backgroundVideo = document.getElementById('backgroundVideo');

    music.play();  // Mainkan musik
    backgroundVideo.style.display = 'block';  // Tampilkan video sebagai background
}
