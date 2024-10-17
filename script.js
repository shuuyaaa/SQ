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
    const choice = document.querySelector('input[name="choice"]:checked').value;
    
    if (choice === 'Mau') {
        showConfirmation();
        playVideoWithSound();
    } else {
        triggerSpam();  // Panggil fungsi spam jika pilihannya "Tidak"
    }
};

function showConfirmation() {
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';  // Tampilkan pesan konfirmasi
}

function playVideoWithSound() {
    const music = document.getElementById('music');
    const backgroundVideo = document.getElementById('backgroundVideo');

    // Matikan musik dan mainkan video dengan suara
    music.pause();  // Hentikan musik
    backgroundVideo.style.display = 'block';  // Tampilkan video sebagai background
    backgroundVideo.muted = false;  // Aktifkan suara pada video
    backgroundVideo.play();  // Mainkan video
}

function triggerSpam() {
    const spamContainer = document.getElementById('spamContainer');
    spamContainer.style.display = 'flex';  // Tampilkan container spam

    // Membuat teks spam memenuhi layar
    for (let i = 0; i < 100; i++) {  // Sesuaikan jumlah teks sesuai kebutuhan
        let spamText = document.createElement('div');
        spamText.innerText = "HARUS MAU!!!";
        spamText.style.margin = '10px';
        spamContainer.appendChild(spamText);
    }
}
