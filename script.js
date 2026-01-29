const scriptURL = 'MASUKKAN_URL_WEB_APP_ANDA_DI_SINI';
const form = document.getElementById('ticketForm');
const btn = document.getElementById('submitBtn');
const msg = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerText = "Mengirim...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            btn.disabled = false;
            btn.innerText = "KIRIM TIKET";
            msg.innerHTML = "✅ Tiket Berhasil Terkirim!";
            form.reset();
        })
        .catch(error => {
            btn.disabled = false;
            btn.innerText = "KIRIM TIKET";
            msg.innerHTML = "❌ Gagal Terkirim!";
            console.error('Error!', error.message);
        });
});
