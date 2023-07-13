const pijarFood = (harga, voucher, jarak, pajak) => {
  let potongan;
  switch (voucher) {
    case "PIJARFOOD5":
      if (harga >= 50_000) potongan = harga * 0.5;
      if (potongan > 50_000) potongan = 50_000;
      break;
    case "DITRAKTIRPIJAR":
      if (harga >= 25_000) potongan = harga * 0.6;
      if (potongan > 30_000) potongan = 30_000;
      break;
    default:
      potongan = 0;
      break;
  }

  let biayaAntar;
  if (jarak <= 2) {
    biayaAntar = 5000;
  } else {
    biayaAntar = 5000 + (jarak - 2) * 3000;
  }

  const bayarPajak = pajak ? harga * 0.05 : 0;
  const subTotal = harga - potongan + biayaAntar + bayarPajak;

  console.log(`Harga = ${harga}`);
  console.log(`Potongan = ${potongan}`);
  console.log(`Biaya Antar = ${biayaAntar}`);
  console.log(`Pajak = ${bayarPajak}`);
  console.log(`SubToTal = ${subTotal}`);
};

pijarFood(75_000, "PIJARFOOD5", 5, true);
