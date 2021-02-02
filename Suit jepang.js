// Intro
alert('Selamat Datang di game suit jepang, Selamat bermain di game sederhana ini, Semoga berhasil :)');
var kuis = true;
while (kuis) {

    // player
    var player = prompt('Silakan anda pilih : batu, gunting, kertas');


    // random computer
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'batu';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'kertas';
    } else {
        comp = 'gunting';
    }

    var hasil = '';
    // rules game
    if (player == comp) {
        hasil = 'SERI';
    } else if (player == 'batu') {
        hasil = (comp == 'kertas') ? 'KALAH!' : 'MENANG';
    } else if (player == 'kertas') {
        hasil = (comp == 'batu') ? 'MENANG' : 'KALAH!';
    } else if (player == 'gunting') {
        hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH!';
    } else if (player == 'gunting') {
        hasil = (comp == 'batu') ? 'KALAH!' : 'MENANG';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // hasilnya
    alert('Anda memilih : ' + player + ' dan Komputer memilih  ' + comp + '\ndan hasilnya Kamu ' + hasil);

    kuis = confirm('Mau main lagi?');
}

alert('Terima Kasih sudah mau bermain di game sederhana ini :)');
