const formKontak = document.querySelector('#kontak form');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const formError = document.getElementById('formError');

formKontak.addEventListener('submit', function (event) {

  event.preventDefault();

  const namaKosong = namaInput.value.trim() === '';
  const emailKosong = emailInput.value.trim() === '';

  if (namaKosong || emailKosong) {
    formError.textContent = 'Nama dan email wajib diisi sebelum mengirim pesan.';
    formError.style.color = '#c0392b';
    formError.style.display = 'block';
    return;
  }

  formError.textContent = 'Pesan berhasil dikirim. Terima kasih, ' + namaInput.value.trim() + '!';
  formError.style.color = '#1abc9c';
  formError.style.display = 'block';
  formKontak.reset();
});

$(document).ready(function () {
  $('#toggleJadwal').on('click', function () {

    $('#tabelJadwal').slideToggle(300);

    const tombol = $(this);
    if (tombol.text() === 'Sembunyikan Jadwal') {
      tombol.text('Tampilkan Jadwal');
    } else {
      tombol.text('Sembunyikan Jadwal');
    }
  });
});