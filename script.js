    // Add event listeners and functionality
    addPopupFunctionality();
  });
}

function addPopupFunctionality() {
  document.getElementById('calculateBtn').addEventListener('click', () => {
    const distanceInput = document.getElementById('distanceInput').value;
    const distance = parseFloat(distanceInput);

    if (!isNaN(distance) && distance > 0) {
      let ongkirDasar = calculateOngkir(distance);
      let ongkir = ongkirDasar;
      let biayaTambahanDetails = "";

      // Tambah biaya tambahan
      if (document.getElementById('hujan').checked) {
        ongkir += 3000;
        biayaTambahanDetails += "Hujan: Rp 3.000<br>";
      }
      if (document.getElementById('minimarket').checked) {
        ongkir += 3000;
        biayaTambahanDetails += "TITIP-Belanja (Alfa-Indo): Rp 3.000<br>";
      }
      if (document.getElementById('pasar').checked) {
        ongkir += 5000;
        biayaTambahanDetails += "TITIP-Belanja Pasar: Rp 5.000<br>";
      }
      if (document.getElementById('kfc').checked) {
        ongkir += 2000;
        biayaTambahanDetails += "TITIP-Makanan (KFC): Rp 2.000<br>";
      }
      if (document.getElementById('insentif_multiple').checked) {
        ongkir += 2000;
        biayaTambahanDetails += "Multiple Order: Rp 2.000<br>";
      }
      if (document.getElementById('insentif_rs').checked) {
        ongkir += 2000;
        biayaTambahanDetails += "Insentif RS: Rp 2.000<br>";
      }

      document.getElementById('result').innerHTML = `
        <div class="alert alert-success" role="alert">
          <b>*Total Ongkir: Rp ${ongkir.toLocaleString('id-ID')}*</b><br><br>
          <div class="rincian-ongkir">
            <strong>Rincian Biaya:</strong><br>
            Ongkir Dasar: Rp ${ongkirDasar.toLocaleString('id-ID')}<br>
            ${biayaTambahanDetails || "Tidak ada biaya tambahan"}
          </div>
        </div>`;
      window.ongkirText = `Total Ongkir: Rp ${ongkir.toLocaleString('id-ID')}`;
    } else {
      document.getElementById('result').innerHTML = `<div class="alert alert-danger" role="alert">Silakan masukkan jarak yang valid.</div>`;
    }
  });

  document.getElementById('copyBtn').addEventListener('click', () => {
    const pesan = `Halo kak, Ini ya Ongkirnya:\n\n💰 ${window.ongkirText} \n\n*Balas 'Ya' jika kakak bersedia*, Kemudian kami teruskan ke driver ya pesanannya kak.`;
    copyToClipboard(pesan);
  });
}

// Awal Fungsi Ongkir
function calculateOngkir(jarak) {
  let ongkir = 0;
  if (jarak <= 1.0) {
    ongkir = 5000;
  } else if (jarak <= 2.5) {
    ongkir = 7000;
  } else if (jarak <= 3.5) {
    ongkir = 7000;
  } else if (jarak <= 4.5) {
    ongkir = 8000;
  } else if (jarak <= 5.5) {
    ongkir = 10000;
  } else if (jarak <= 6.5) {
    ongkir = 12000;
  } else if (jarak <= 7.5) {
    ongkir = 13000;
  } else if (jarak <= 8.5) {
    ongkir = 14000;
  } else if (jarak <= 9.5) {
    ongkir = 15000;
  } else if (jarak <= 10.5) {
    ongkir = 16000;
  } else if (jarak <= 11.5) {
    ongkir = 17000;
  } else if (jarak <= 12.5) {
    ongkir = 18000;
  } else if (jarak <= 13.5) {
    ongkir = 19000;
  } else if (jarak <= 14.5) {
    ongkir = 20000;
  } else if (jarak <= 15.5) {
    ongkir = 21000;
  } else if (jarak <= 16.5) {
    ongkir = 22000;
  } else if (jarak <= 17.5) {
    ongkir = 23000;
  } else if (jarak <= 18.5) {
    ongkir = 24000;
  } else if (jarak <= 19.5) {
    ongkir = 25000;
  } else if (jarak <= 20.5) {
    ongkir = 26000;
  } else if (jarak <= 21.5) {
        ongkir = 27000;
    } else if (jarak <= 22.5) {
        ongkir = 28000;
    } else if (jarak <= 23.5) {
        ongkir = 29000;
    } else if (jarak <= 24.5) {
        ongkir = 30000;
    } else if (jarak <= 25.5) {
        ongkir = 31000;
    } else if (jarak <= 26.5) {
        ongkir = 32000;
    } else if (jarak <= 27.5) {
        ongkir = 33000;
    } else if (jarak <= 28.5) {
        ongkir = 34000;
    } else if (jarak <= 29.5) {
        ongkir = 35000;
  }
  return ongkir;
}
// Akhir Fungsi Ongkir

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Teks berhasil dicopy ke clipboard!');
}

