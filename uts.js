class Perusahaan {
  constructor(status, cuti) {
    this.status = status;
    this.request = cuti;
    this.maxTahunan = 12;
    this.maxSakit = 2;
    this.maxMelahirkan = 90;
  }

  maxKouta() {
    if (this.status === "Tahunan") {
      if (this.request <= this.maxTahunan) return this.request;
      console.log("Kuota anda tidak cukup untuk mengajukan cuti ini");
      return false;
    } else if (this.status === "Sakit") {
      if (this.request <= this.maxSakit) return this.request;
      console.log("Kuota anda tidak cukup untuk mengajukan cuti ini");
      return false;
    } else if (this.status === "Melahirkan") {
      if (this.request <= this.maxMelahirkan) return this.request;
      console.log("Kuota anda tidak cukup untuk mengajukan cuti ini");
      return false;
    } else {
    }
  }
}

class CutiTahunan extends Perusahaan {
  getInfo() {
    const approved = this.maxKouta();
    if (approved === false) return;
    return console.log(
      `Anda berhasil melakukan cuti ${this.status} selama ${approved} hari`
    );
  }
}

class CutiSakit extends Perusahaan {
  getInfo() {
    const approved = this.maxKouta();
    if (approved === false) return;
    return console.log(
      `Anda berhasil melakukan cuti ${this.status} selama ${approved} hari`
    );
  }
}

class CutiMelahirkan extends Perusahaan {
  getInfo() {
    const approved = this.maxKouta();
    if (approved === false) return;
    return console.log(
      `Anda berhasil melakukan cuti ${this.status} selama ${approved} hari`
    );
  }
}

const tahunan = new CutiTahunan("Tahunan", 10);
tahunan.getInfo();
const sakit = new CutiSakit("Sakit", 1);
sakit.getInfo();
const melahirkan = new CutiMelahirkan("Melahirkan", 100);
melahirkan.getInfo();
