const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (perasaan) => {
  return new Promise((resolve, reject) => {
    if (perasaan == "") {
      reject("data tidak sesuai!");
    } else if (perasaan == "marah") {
      (async () => {
        const hitungIXX = hitung(await promiseTheaterIXX(), perasaan);
        const hitungVGC = hitung(await promiseTheaterVGC(), perasaan);
        resolve(hitungIXX + hitungVGC);
      })();
    } else if (perasaan == "tidak marah") {
      (async () => {
        const hitungIXX = hitung(await promiseTheaterIXX(), perasaan);
        const hitungVGC = hitung(await promiseTheaterVGC(), perasaan);
        resolve(hitungIXX + hitungVGC);
      })();
    }
  });
};

function hitung(data, emosi) {
  let count = 0;
  if (emosi == "marah") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "marah") {
        count++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasil == "tidak marah") {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  promiseOutput,
};
