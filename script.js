
let daftarPengeluaran = [];

function tambahPengeluaran() {
    let nama = document.getElementById("nama").value;
    let uang = Number(document.getElementById("uang").value);

    if (nama === "") {
        alert("Nama harus diisi!");
    } else if (document.getElementById("uang").value === "") {
        alert("Jumlah pengeluaran harus diisi!");
    } else if (uang <= 0) {
        alert("Pengeluaran harus lebih dari nol!");
    } else {
        let kategori;

        if (uang < 10000) {
            kategori = "Sangat Hemat";
        } else if (uang < 25000) {
            kategori = "Hemat";
        } else if (uang < 50000) {
            kategori = "Sedang";
        } else if (uang < 100000) {
            kategori = "Boros";
        } else if (uang < 200000) {
            kategori = "Sangat Boros";
        } else {
            kategori = "Pengeluaran Besar";
        }

        daftarPengeluaran.push({
            nama: nama,
            uang: uang,
            kategori: kategori
        });

        document.getElementById("hasil").innerHTML =
            nama + " termasuk kategori " + kategori;

        tampilkanRiwayat();

        document.getElementById("nama").value = "";
        document.getElementById("uang").value = "";
    }
}

function tampilkanRiwayat() {
    let riwayat = document.getElementById("riwayat");
    riwayat.innerHTML = "";

    let total = 0;

    // Perulangan FOR untuk menampilkan riwayat
    for (let i = 0; i < daftarPengeluaran.length; i++) {
        let data = daftarPengeluaran[i];

        let item = document.createElement("li");
        item.textContent =
            data.nama + " - Rp" + data.uang.toLocaleString("id-ID")
            + " (" + data.kategori + ")";

        riwayat.appendChild(item);
    }

    // Perulangan WHILE untuk menghitung total
    let i = 0;

    while (i < daftarPengeluaran.length) {
        total += daftarPengeluaran[i].uang;
        i++;
    }

    document.getElementById("total").textContent =
        "Rp" + total.toLocaleString("id-ID");
}
