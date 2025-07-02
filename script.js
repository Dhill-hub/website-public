// Menampilkan pesan di console saat website terbuka
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website PT. Tuah Nagari Trans sudah siap!");
});

// Fungsi untuk mengirim pemesanan tiket ke WhatsApp (digunakan di pesan.html)
function kirimWA() {
  const nama = document.getElementById("nama").value;
  const tujuan = document.getElementById("tujuan").value;
  const tanggal = document.getElementById("tanggal").value;
  const jumlah = document.getElementById("jumlah").value;

  // Buat pesan WA
  const pesan = `Halo, saya *${nama}* ingin memesan tiket:\nTujuan: *${tujuan}*\nTanggal: *${tanggal}*\nJumlah Penumpang: *${jumlah}*`;
  
  // Link ke WhatsApp admin
  const waLink = `https://wa.me/6281350862577?text=${encodeURIComponent(pesan)}`;
  
  // Buka link di tab baru
  window.open(waLink, '_blank');
  return false; // Mencegah form reload
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formKritik");
  const nama = document.getElementById("namaKritik");
  const pesan = document.getElementById("pesanKritik");
  const daftar = document.getElementById("daftarKritik");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (nama.value.trim() && pesan.value.trim()) {
      const item = document.createElement("li");
      item.style.marginBottom = "15px";
      item.style.borderBottom = "1px solid #ccc";
      item.style.paddingBottom = "10px";
      item.innerHTML = `<strong>${nama.value}</strong><br>${pesan.value}`;
      daftar.prepend(item);

      nama.value = "";
      pesan.value = "";
    }
  });
});
