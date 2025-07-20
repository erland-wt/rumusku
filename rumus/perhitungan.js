// Fungsi untuk menghitung kecepatan
function hitungKecepatan() {
        const s = parseFloat(document.getElementById('s').value);
        const t = parseFloat(document.getElementById('t').value);
        
        // Validasi input
        if (isNaN(s) || isNaN(t) || t === 0 || s === 0) {
            alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
            return;
        }

        const v = s / t;

        // Buat elemen hasil
        const hasilDiv = document.createElement('div');
        hasilDiv.classList.add('hasil');

        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan:</h3>
            <p><strong>Diketahui:</strong></p>
            <p>s = ${s} meter</p>
            <p>t = ${t} detik</p>
            <p><strong>Ditanya:</strong> v = ?</p>
            <p><strong>Jawab:</strong></p>
            <p>v = s / t</p>
            <p>v = ${s} / ${t}</p>
            <p>v = ${v.toFixed(2)} m/s</p>
        `;

        // Hapus hasil sebelumnya jika ada
        const existing = document.querySelector('.hasil');
        if (existing) existing.remove();

        // Tambahkan hasil ke dalam div hitung
        document.querySelector('.hitung').appendChild(hasilDiv);
    }

// Fungsi untuk menghitung gaya
function hitungGaya() {
    const m = parseFloat(document.getElementById('m').value);
    const a = parseFloat(document.getElementById('a').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(a) || m === 0 || a === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const F = m * a;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>a = ${a} m/s²</p>
        <p><strong>Ditanya:</strong> F = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>F = m * a</p>
        <p>F = ${m} * ${a}</p>
        <p>F = ${F.toFixed(2)} N</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung berat W = m * g
function hitungBerat() {
    const m = parseFloat(document.getElementById('m').value);
    const g = parseFloat(document.getElementById('g').value);;
    
    // Validasi input
    if (isNaN(m) || isNaN(g) || m === 0 || g === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const W = m * g;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>g = ${g} m/s²</p>
        <p><strong>Ditanya:</strong> W = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>W = m * g</p>
        <p>W = ${m} * ${g}</p>
        <p>W = ${W.toFixed(2)} N</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung usaha W = F * s
function hitungUsaha() {
    const F = parseFloat(document.getElementById('F').value);
    const s = parseFloat(document.getElementById('s').value);
    
    // Validasi input
    if (isNaN(F) || isNaN(s) || F === 0 || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const W = F * s;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>F = ${F} N</p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> W = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>W = F * s</p>
        <p>W = ${F} * ${s}</p>
        <p>W = ${W.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Tekanan P = F / A
function hitungTekanan() {
    const F = parseFloat(document.getElementById('F').value);
    const A = parseFloat(document.getElementById('A').value);
    
    // Validasi input
    if (isNaN(F) || isNaN(A) || F === 0 || A === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const P = F / A;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>F = ${F} N</p>
        <p>A = ${A} m²</p>
        <p><strong>Ditanya:</strong> P = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>P = F / A</p>
        <p>P = ${F} / ${A}</p>
        <p>P = ${P.toFixed(2)} Pa</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung daya P = W / t
function hitungDaya() {
    const W = parseFloat(document.getElementById('W').value);
    const t = parseFloat(document.getElementById('t').value);
    
    // Validasi input
    if (isNaN(W) || isNaN(t) || W === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const P = W / t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>W = ${W} J</p>
        <p>t = ${t} s</p>
        <p><strong>Ditanya:</strong> P = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>P = W / t</p>
        <p>P = ${W} / ${t}</p>
        <p>P = ${P.toFixed(2)} W</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung energi kinetik Eₖ = 1/2 * m * v²
function hitungEnergiKinetik() {
    const m = parseFloat(document.getElementById('m').value);
    const v = parseFloat(document.getElementById('v').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(v) || m === 0 || v === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Eₖ = 0.5 * m * Math.pow(v, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>v = ${v} m/s</p>
        <p><strong>Ditanya:</strong> Eₖ = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Eₖ = 1/2 * m * v²</p>
        <p>Eₖ = 1/2 * ${m} * ${v}²</p>
        <p>Eₖ = ${Eₖ.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung energi potensial Eₚ = m * g * h
function hitungEnergiPotensial() {
    const m = parseFloat(document.getElementById('m').value);
    const g = parseFloat(document.getElementById('g').value);
    const h = parseFloat(document.getElementById('h').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(g) || isNaN(h) || m === 0 || g === 0 || h === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Eₚ = m * g * h;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>g = ${g} m/s²</p>
        <p>h = ${h} m</p>
        <p><strong>Ditanya:</strong> Eₚ = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Eₚ = m * g * h</p>
        <p>Eₚ = ${m} * ${g} * ${h}</p>
        <p>Eₚ = ${Eₚ.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Hukum Ohm
// V = I * R
function hitungHukumOhmTegangan() {
    const I = parseFloat(document.getElementById('I').value);
    const R = parseFloat(document.getElementById('R').value);
    
    // Validasi input
    if (isNaN(I) || isNaN(R) || I === 0 || R === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const V = I * R;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>I = ${I} A</p>
        <p>R = ${R} Ω</p>
        <p><strong>Ditanya:</strong> V = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>V = I * R</p>
        <p>V = ${I} * ${R}</p>
        <p>V = ${V.toFixed(2)} V</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// R = V/I
function hitungHukumOhmHambatan() {
    const Vr = parseFloat(document.getElementById('Vr').value);
    const Ir = parseFloat(document.getElementById('Ir').value);
    
    // Validasi input
    if (isNaN(Vr) || isNaN(Ir) || Vr === 0 || Ir === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Rr = Vr / Ir;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilHambatan');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>V = ${Vr} V</p>
        <p>I = ${Ir} A</p>
        <p><strong>Ditanya:</strong> R = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>R = V / I</p>
        <p>R = ${Vr} / ${Ir}</p>
        <p>R = ${Rr.toFixed(2)} Ω</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilHambatan');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungHambatan').appendChild(hasilDiv);
}

// I = V/R
function hitungHukumOhmArus() {
    const Va = parseFloat(document.getElementById('Va').value);
    const Ra = parseFloat(document.getElementById('Ra').value);
    
    // Validasi input
    if (isNaN(Va) || isNaN(Ra) || Va === 0 || Ra === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Ia = Va / Ra;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilArus');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>V = ${Va} V</p>
        <p>R = ${Ra} Ω</p>
        <p><strong>Ditanya:</strong> I = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>I = V / R</p>
        <p>I = ${Va} / ${Ra}</p>
        <p>I = ${Ia.toFixed(2)} A</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilArus');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungArus').appendChild(hasilDiv);
}

// Fungsi untuk menghitung kalor Q = m * c * ΔT (satuan m = kg, c = J/kg°C, ΔT = °C)
function hitungKalor() {
    const m = parseFloat(document.getElementById('m').value);
    const c = parseFloat(document.getElementById('c').value);
    const deltaT = parseFloat(document.getElementById('deltaT').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(c) || isNaN(deltaT) || m === 0 || c === 0 || deltaT === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Q = m * c * deltaT;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>c = ${c} J/kg°C</p>
        <p>ΔT = ${deltaT} °C</p>
        <p><strong>Ditanya:</strong> Q = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Q = m * c * ΔT</p>
        <p>Q = ${m} * ${c} * ${deltaT}</p>
        <p>Q = ${Q.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung massa jenis ρ = m / V
function hitungMassaJenis() {
    const m = parseFloat(document.getElementById('m').value);
    const V = parseFloat(document.getElementById('V').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(V) || m === 0 || V === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const rho = m / V;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>V = ${V} m³</p>
        <p><strong>Ditanya:</strong> ρ = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>ρ = m / V</p>
        <p>ρ = ${m} / ${V}</p>
        <p>ρ = ${rho.toFixed(2)} kg/m³</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung hukum newton II F = m * a
function hitungHukumNewtonII() {
    const m = parseFloat(document.getElementById('m').value);
    const a = parseFloat(document.getElementById('a').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(a) || m === 0 || a === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const F = m * a;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>a = ${a} m/s²</p>
        <p><strong>Ditanya:</strong> F = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>F = m * a</p>
        <p>F = ${m} * ${a}</p>
        <p>F = ${F.toFixed(2)} N</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung usaha W = F ⋅ s ⋅ cosθ
function hitungUsahaTheta() {
    const F = parseFloat(document.getElementById('F').value);
    const s = parseFloat(document.getElementById('s').value);
    const theta = parseFloat(document.getElementById('theta').value);
    
    // Validasi input
    if (isNaN(F) || isNaN(s) || isNaN(theta) || F === 0 || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const W = F * s * Math.cos(theta * Math.PI / 180);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>F = ${F} N</p>
        <p>s = ${s} m</p>
        <p>θ = ${theta}°</p>
        <p><strong>Ditanya:</strong> W = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>W = F ⋅ s ⋅ cosθ</p>
        <p>W = ${F} ⋅ ${s} ⋅ cos(${theta})</p>
        <p>W = ${F} ⋅ ${s} ⋅ cos(${theta * Math.PI / 180})</p>
        <p>W = ${W.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung energi potensial gravitasi Eₚ = m * g * h
function hitungEnergiPotensial2() {
    const m = parseFloat(document.getElementById('m').value);
    const g = parseFloat(document.getElementById('g').value);
    const h = parseFloat(document.getElementById('h').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(g) || isNaN(h) || m === 0 || g === 0 || h === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Eₚ = m * g * h;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>g = ${g} m/s²</p>
        <p>h = ${h} m</p>
        <p><strong>Ditanya:</strong> Eₚ = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Eₚ = m * g * h</p>
        <p>Eₚ = ${m} * ${g} * ${h}</p>
        <p>Eₚ = ${Eₚ.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilEp2');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungEp2').appendChild(hasilDiv);
}

// Fungsi unruk mwnghitung energi kinetik Eₖ = 1/2 * m * v²
function hitungEnergiKinetik2() {
    const m = parseFloat(document.getElementById('mk').value);
    const v = parseFloat(document.getElementById('v').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(v) || m === 0 || v === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Eₖ = 0.5 * m * Math.pow(v, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilEk2');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>v = ${v} m/s</p>
        <p><strong>Ditanya:</strong> Eₖ = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Eₖ = 1/2 * m * v²</p>
        <p>Eₖ = 1/2 * ${m} * ${v}²</p>
        <p>Eₖ = ${Eₖ.toFixed(2)} J</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilEk2');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungEk2').appendChild(hasilDiv);
}

// Fungsi untuk menghitung momentum p = m * v
function hitungMomentum() {
    const m = parseFloat(document.getElementById('m').value);
    const v = parseFloat(document.getElementById('v').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(v) || m === 0 || v === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const p = m * v;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>v = ${v} m/s</p>
        <p><strong>Ditanya:</strong> p = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>p = m * v</p>
        <p>p = ${m} * ${v}</p>
        <p>p = ${p.toFixed(2)} kg·m/s</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung gaya sentripetal F = (m * v²) / r
function hitungSentripetal() {
    const m = parseFloat(document.getElementById('m').value);
    const v = parseFloat(document.getElementById('v').value);
    const r = parseFloat(document.getElementById('r').value);
    
    // Validasi input
    if (isNaN(m) || isNaN(v) || isNaN(r) || m === 0 || v === 0 || r === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const F = (m * Math.pow(v, 2)) / r;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>m = ${m} kg</p>
        <p>v = ${v} m/s</p>
        <p>r = ${r} m</p>
        <p><strong>Ditanya:</strong> Fs = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Fs = (m * v²) / r</p>
        <p>Fs = (${m} * ${v}²) / ${r}</p>
        <p>Fs = ${F.toFixed(2)} N</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung cepat rambat gelombang v = λ * f
function hitungCepatRambat() {
    const lambda = parseFloat(document.getElementById('lambda').value);
    const f = parseFloat(document.getElementById('f').value);
    
    // Validasi input
    if (isNaN(lambda) || isNaN(f) || lambda === 0 || f === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const v = lambda * f;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>λ = ${lambda} m</p>
        <p>f = ${f} Hz</p>
        <p><strong>Ditanya:</strong> v = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>v = λ * f</p>
        <p>v = ${lambda} * ${f}</p>
        <p>v = ${v.toFixed(2)} m/s</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung frekuensi f = 1 / T
function hitungFrekuensi() {
    const T = parseFloat(document.getElementById('T').value);
    
    // Validasi input
    if (isNaN(T) || T === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const f = 1 / T;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilFrekuensi');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>T = ${T} s</p>
        <p><strong>Ditanya:</strong> f = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>f = 1 / T</p>
        <p>f = 1 / ${T}</p>
        <p>f = ${f.toFixed(5)} Hz</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilFrekuensi');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungFrekuensi').appendChild(hasilDiv);
}

// Fungsi untuk menghitung periode T = 1 / f
function hitungPeriode() {
    const f = parseFloat(document.getElementById('fperiode').value);
    
    // Validasi input
    if (isNaN(f) || f === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const T = 1 / f;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilPeriode');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>f = ${f} Hz</p>
        <p><strong>Ditanya:</strong> T = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>T = 1 / f</p>
        <p>T = 1 / ${f}</p>
        <p>T = ${T.toFixed(5)} s</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilPeriode');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungPeriode').appendChild(hasilDiv);
}

// Fungsi untuk menghitung cepat rambat bunyi v = s/t
function hitungCepatRambatBunyi() {
    const s = parseFloat(document.getElementById('s').value);
    const t = parseFloat(document.getElementById('t').value);
    
    // Validasi input
    if (isNaN(s) || isNaN(t) || s === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const v = s / t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasil');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p>t = ${t} s</p>
        <p><strong>Ditanya:</strong> v = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>v = s / t</p>
        <p>v = ${s} / ${t}</p>
        <p>v = ${v.toFixed(5)} m/s</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasil');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung hukum pemantulan bunyi (Gema) s = (v * t) / 2
function hitungGema() {
    const v = parseFloat(document.getElementById('vGema').value);
    const t = parseFloat(document.getElementById('tGema').value);
    
    // Validasi input
    if (isNaN(v) || isNaN(t) || v === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const s = (v * t) / 2;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGema');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>v = ${v} m/s</p>
        <p>t = ${t} s</p>
        <p><strong>Ditanya:</strong> s = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>s = (v * t) / 2</p>
        <p>s = (${v} * ${t}) / 2</p>
        <p>s = ${s.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilGema');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungGema').appendChild(hasilDiv);
}

// Fungsi untuk menghitung frekuensi nada (dawai atau pipa) f = (n * v) / (2 * L)
function hitungDawai() {
    const n = parseFloat(document.getElementById('nDawai').value);
    const v = parseFloat(document.getElementById('vDawai').value);
    const L = parseFloat(document.getElementById('LDawai').value);
    
    // Validasi input
    if (isNaN(n) || isNaN(v) || isNaN(L) || n === 0 || v === 0 || L === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const f = (n * v) / (2 * L);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilDawai');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>n = ${n}</p>
        <p>v = ${v} m/s</p>
        <p>L = ${L} m</p>
        <p><strong>Ditanya:</strong> f = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>f = (n * v) / (2 * L)</p>
        <p>f = (${n} * ${v}) / (2 * ${L})</p>
        <p>f = ${f.toFixed(2)} Hz</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilDawai');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungDawai').appendChild(hasilDiv);
}

// Fungsi untuk menghitung cepat rambat gelombang cahaya v = f * λ
function hitungGCahaya() {
    const f = parseFloat(document.getElementById('fGCahaya').value);
    const λ = parseFloat(document.getElementById('lambdaGCahaya').value);
    
    // Validasi input
    if (isNaN(f) || isNaN(λ) || f === 0 || λ === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const v = f * λ;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGCahaya');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>f = ${f} Hz</p>
        <p>λ = ${λ} m</p>
        <p><strong>Ditanya:</strong> v = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>v = f * λ</p>
        <p>v = ${f} * ${λ}</p>
        <p>v = ${v.toFixed(2)} m/s</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilGCahaya');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungGCahaya').appendChild(hasilDiv);
}

// Fungsi untuk menghitung GGL induksi ε = -N * (ΔΦ / Δt)
function hitungGGLInduksi() {
    const N = parseFloat(document.getElementById('Nggl').value);
    const ΔΦ = parseFloat(document.getElementById('deltaPhiggl').value);
    const Δt = parseFloat(document.getElementById('deltaTggl').value);
    
    // Validasi input
    if (isNaN(N) || isNaN(ΔΦ) || isNaN(Δt) || N === 0 || ΔΦ === 0 || Δt === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const epsilon = -N * (ΔΦ / Δt);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGGLInduksi');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>N = ${N}</p>
        <p>ΔΦ = ${ΔΦ} Wb</p>
        <p>Δt = ${Δt} s</p>
        <p><strong>Ditanya:</strong> ε = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>ε = -N * (ΔΦ / Δt)</p>
        <p>ε = -${N} * (${ΔΦ} / ${Δt})</p>
        <p>ε = ${epsilon.toFixed(3)} V</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilGGLInduksi');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungGGLInduksi').appendChild(hasilDiv);
}

// Fungsi untuk menghitung fluks magnetik Φ = B * A * cosθ
function hitungFluksMagnetik() {
    const B = parseFloat(document.getElementById('Bfluks').value);
    const A = parseFloat(document.getElementById('Afluks').value);
    const theta = parseFloat(document.getElementById('thetafluks').value);
    
    // Validasi input
    if (isNaN(B) || isNaN(A) || isNaN(theta) || B === 0 || A === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const Φ = B * A * Math.cos(theta * Math.PI / 180);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilFluksMagnetik');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>B = ${B} T</p>
        <p>A = ${A} m²</p>
        <p>θ = ${theta}°</p>
        <p><strong>Ditanya:</strong> Φ = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>Φ = B * A * cosθ</p>
        <p>Φ = ${B} * ${A} * cos(${theta})</p>
        <p>Φ = ${Φ.toFixed(4)} Wb</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilFluksMagnetik');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungFluksMagnetik').appendChild(hasilDiv);
}

// Fungsi untuk menghitung GLBB kecepatan akhir v = v₀ + a * t
function hitungGLBBKecepatanAkhir() {
    const v0 = parseFloat(document.getElementById('v0').value);
    const a = parseFloat(document.getElementById('aGLBB').value);
    const t = parseFloat(document.getElementById('tGLBB').value);
    
    // Validasi input
    if (isNaN(v0) || isNaN(a) || isNaN(t) || v0 === 0 || a === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const v = v0 + a * t;

    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGLBBKecepatanAkhir');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>v₀ = ${v0} m/s</p>
        <p>a = ${a} m/s²</p>
        <p>t = ${t} s</p>
        <p><strong>Ditanya:</strong> v = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>v = v₀ + a * t</p>
        <p>v = ${v0} + ${a} * ${t}</p>
        <p>v = ${v.toFixed(2)} m/s</p>
    `;

    const existing = document.querySelector('.hasilGLBBKecepatanAkhir');
    if (existing) existing.remove();

    document.querySelector('.hitungGLBBKecepatanAkhir').appendChild(hasilDiv);
}

// Fungsi untuk menghitung GLBB jarak tempuh s = v₀ * t + 1/2 * a * t²
function hitungGLBBJarakTempuh() {
    const v0 = parseFloat(document.getElementById('v0JT').value);
    const a = parseFloat(document.getElementById('aGLBBJT').value);
    const t = parseFloat(document.getElementById('tGLBBJT').value);
    
    // Validasi input
    if (isNaN(v0) || isNaN(a) || isNaN(t) || v0 === 0 || a === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const s = v0 * t + 0.5 * a * Math.pow(t, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGLBBJarakTempuh');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>v₀ = ${v0} m/s</p>
        <p>a = ${a} m/s²</p>
        <p>t = ${t} s</p>
        <p><strong>Ditanya:</strong> s = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>s = v₀ * t + 1/2 * a * t²</p>
        <p>s = ${v0} * ${t} + 1/2 * ${a} * ${t}²</p>
        <p>s = ${s.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilGLBBJarakTempuh');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungGLBBJarakTempuh').appendChild(hasilDiv);
}

//  Fungsi untuk menghitung GLBB hubungan jarak dan kecepatan  v² = v₀² + 2*a*s
function hitungGLBBJarakKecepatan() {
    const v0 = parseFloat(document.getElementById('v0JK').value);
    const a = parseFloat(document.getElementById('aGLBBJK').value);
    const s = parseFloat(document.getElementById('sGLBBJK').value);
    
    // Validasi input
    if (isNaN(v0) || isNaN(a) || isNaN(s) || v0 === 0 || a === 0 || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const v = Math.sqrt(Math.pow(v0, 2) + 2 * a * s);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGLBBJarakKecepatan');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>v₀ = ${v0} m/s</p>
        <p>a = ${a} m/s²</p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> v = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>v² = v₀² + 2*a*s</p>
        <p>v = √(${v0}² + 2*${a}*${s})</p>
        <p>v = ${v.toFixed(2)} m/s</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilGLBBJarakKecepatan');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungGLBBJarakKecepatan').appendChild(hasilDiv);
}

// Fungsi untuk menghitung GLBB Jarak saat benda mula-mula diam s = 1/2 * a * t²
function hitungGLBBBendaDiam() {
    const a = parseFloat(document.getElementById('aBendaDiam').value);
    const t = parseFloat(document.getElementById('tBendaDiam').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(t) || a === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const s = 0.5 * a * Math.pow(t, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilGLBBBendaDiam');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m/s²</p>
        <p>t = ${t} s</p>
        <p><strong>Ditanya:</strong> s = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>s = 1/2 * a * t²</p>
        <p>s = 1/2 * ${a} * ${t}²</p>
        <p>s = ${s.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilGLBBBendaDiam');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungGLBBBendaDiam').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Segitiga L = 1/2 * a * t
function hitungLSegitiga() {
    const a = parseFloat(document.getElementById('aSegitiga').value);
    const t = parseFloat(document.getElementById('tSegitiga').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(t) || a === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 0.5 * a * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLSegitiga');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 1/2 * a * t</p>
        <p>L = 1/2 * ${a} * ${t}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLSegitiga');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLSegitiga').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Persegi L = s * s
function hitungLPersegi() {
    const s = parseFloat(document.getElementById('sPersegi').value);
    
    // Validasi input
    if (isNaN(s) || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = Math.pow(s, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLPersegi');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = s * s</p>
        <p>L = ${s} * ${s}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLPersegi');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLPersegi').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Persegi Panjang L = p * l
function hitungLPersegiPanjang() {
    const p = parseFloat(document.getElementById('pPersegiPanjang').value);
    const l = parseFloat(document.getElementById('lPersegiPanjang').value);
    
    // Validasi input
    if (isNaN(p) || isNaN(l) || p === 0 || l === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = p * l;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLPersegiPanjang');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>p = ${p} m</p>
        <p>l = ${l} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = p * l</p>
        <p>L = ${p} * ${l}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLPersegiPanjang');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLPersegiPanjang').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Lingkaran L = π * r²
function hitungLLingkaran() {
    const r = parseFloat(document.getElementById('rLingkaran').value);
    
    // Validasi input
    if (isNaN(r) || r === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = Math.PI * Math.pow(r, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLLingkaran');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p>π = 3.14</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 3.14 * r²</p>
        <p>L = 3.14 * ${r}²</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLLingkaran');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLLingkaran').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Jajar Genjang L = a * t
function hitungLJajarGenjang() {
    const a = parseFloat(document.getElementById('aJajarGenjang').value);
    const t = parseFloat(document.getElementById('tJajarGenjang').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(t) || a === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = a * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLJajarGenjang');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = a * t</p>
        <p>L = ${a} * ${t}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLJajarGenjang');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLJajarGenjang').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Trapesium L = 1/2 * (a + b) * t
function hitungLTrapesium() {
    const a = parseFloat(document.getElementById('aTrapesium').value);
    const b = parseFloat(document.getElementById('bTrapesium').value);
    const t = parseFloat(document.getElementById('tTrapesium').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(b) || isNaN(t) || a === 0 || b === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 0.5 * (a + b) * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLTrapesium');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m</p>
        <p>b = ${b} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 1/2 * (a + b) * t</p>
        <p>L = 1/2 * (${a} + ${b}) * ${t}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLTrapesium');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLTrapesium').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Belah Ketupat L = 1/2 * d₁ * d₂
function hitungLBelahKetupat() {
    const d1 = parseFloat(document.getElementById('d1BelahKetupat').value);
    const d2 = parseFloat(document.getElementById('d2BelahKetupat').value);
    
    // Validasi input
    if (isNaN(d1) || isNaN(d2) || d1 === 0 || d2 === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 0.5 * d1 * d2;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLBelahKetupat');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>d₁ = ${d1} m</p>
        <p>d₂ = ${d2} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 1/2 * d₁ * d₂</p>
        <p>L = 1/2 * ${d1} * ${d2}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLBelahKetupat');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLBelahKetupat').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Layang-Layang L = 1/2 * d₁ * d₂
function hitungLLayang() {
    const d1 = parseFloat(document.getElementById('d1Layang').value);
    const d2 = parseFloat(document.getElementById('d2Layang').value);
    
    // Validasi input
    if (isNaN(d1) || isNaN(d2) || d1 === 0 || d2 === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 0.5 * d1 * d2;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLLayang');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>d₁ = ${d1} m</p>
        <p>d₂ = ${d2} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 1/2 * d₁ * d₂</p>
        <p>L = 1/2 * ${d1} * ${d2}</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLLayang');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLLayang').appendChild(hasilDiv);
}

// Fungsi untuk menghitung luas Kubus L = 6 * s²
function hitungLKubus() {
    const s = parseFloat(document.getElementById('sKubus').value);
    
    // Validasi input
    if (isNaN(s) || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 6 * Math.pow(s, 2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLKubus');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 6 * s²</p>
        <p>L = 6 * ${s}²</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLKubus');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLKubus').appendChild(hasilDiv);
}

// Fungsi untuk menghitung luas Balok L = 2 * (p * l + p * t + l * t)
function hitungLBalok() {
    const p = parseFloat(document.getElementById('pBalok').value);
    const l = parseFloat(document.getElementById('lBalok').value);
    const t = parseFloat(document.getElementById('tBalok').value);
    
    // Validasi input
    if (isNaN(p) || isNaN(l) || isNaN(t) || p === 0 || l === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 2 * (p * l + p * t + l * t);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLBalok');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>p = ${p} m</p>
        <p>l = ${l} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 2 * (p * l + p * t + l * t)</p>
        <p>L = 2 * (${p} * ${l} + ${p} * ${t} + ${l} * ${t})</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLBalok');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLBalok').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Tabung = 2πr² + 2πrt
function hitungLTabung() {
    const r = parseFloat(document.getElementById('rTabung').value);
    const t = parseFloat(document.getElementById('tTabung').value);
    
    // Validasi input
    if (isNaN(r) || isNaN(t) || r === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLTabung');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = 2πr² + 2πrt</p>
        <p>L = 2 * 3.14 * ${r}² + 2 * 3.14 * ${r} * ${t}</p>
        <p>L = ${L.toFixed(3)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLTabung');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLTabung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Luas Kerucut L = πr(r + s)
function hitungLKerucut() {
    const r = parseFloat(document.getElementById('rKerucut').value);
    const s = parseFloat(document.getElementById('sKerucut').value);
    
    // Validasi input
    if (isNaN(r) || isNaN(s) || r === 0 || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const L = Math.PI * r * (r + s);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilLKerucut');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> L = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>L = πr(r + s)</p>
        <p>L = 3.14 * ${r} * (${r} + ${s})</p>
        <p>L = ${L.toFixed(2)} m²</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilLKerucut');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungLKerucut').appendChild(hasilDiv);
}

//  Fungsi untuk menghitung Keliling Segitiga K = a + b + c
function hitungKSegitiga() {
    const a = parseFloat(document.getElementById('aKSegitiga').value);
    const b = parseFloat(document.getElementById('bKSegitiga').value);
    const c = parseFloat(document.getElementById('cKSegitiga').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = a + b + c;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKSegitiga');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m</p>
        <p>b = ${b} m</p>
        <p>c = ${c} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = a + b + c</p>
        <p>K = ${a} + ${b} + ${c}</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKSegitiga');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKSegitiga').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Persegi K = 4 * s
function hitungKPersegi() {
    const s = parseFloat(document.getElementById('sKPersegi').value);
    
    // Validasi input
    if (isNaN(s) || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 4 * s;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKPersegi');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 4 * s</p>
        <p>K = 4 * ${s}</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKPersegi');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKPersegi').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Persegi Panjang K = 2 * (p + l)
function hitungKPersegiPanjang() {
    const p = parseFloat(document.getElementById('pKPersegiPanjang').value);
    const l = parseFloat(document.getElementById('lKPersegiPanjang').value);

    // Validasi input
    if (isNaN(p) || isNaN(l) || p === 0 || l === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 2 * (p + l);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKPersegiPanjang');
    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>p = ${p} m</p>
        <p>l = ${l} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 2 * (p + l)</p>
        <p>K = 2 * (${p} + ${l})</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKPersegiPanjang');
    if (existing) existing.remove();
    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKPersegiPanjang').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Lingkaran K = 2πr
function hitungKLingkaran() {
    const r = parseFloat(document.getElementById('rKLingkaran').value);
    
    // Validasi input
    if (isNaN(r) || r === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 2 * Math.PI * r;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKLingkaran');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p>π = 3.14</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 2πr</p>
        <p>K = 2 * 3.14 * ${r}</p>
        <p>K = ${K.toFixed(4)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKLingkaran');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKLingkaran').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Jajar Genjang K = 2 * (a + b)
function hitungKJajarGenjang() {
    const a = parseFloat(document.getElementById('aKJajarGenjang').value);
    const b = parseFloat(document.getElementById('bKJajarGenjang').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(b) || a === 0 || b === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 2 * (a + b);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKJajarGenjang');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m</p>
        <p>b = ${b} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 2 * (a + b)</p>
        <p>K = 2 * (${a} + ${b})</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKJajarGenjang');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKJajarGenjang').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Trapesium K = a + b + c + d
function hitungKTrapesium() {
    const a = parseFloat(document.getElementById('aKTrapesium').value);
    const b = parseFloat(document.getElementById('bKTrapesium').value);
    const c = parseFloat(document.getElementById('cKTrapesium').value);
    const d = parseFloat(document.getElementById('dKTrapesium').value);
    
    // Validasi input
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a === 0 || b === 0 || c === 0 || d === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = a + b + c + d;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKTrapesium');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>a = ${a} m</p>
        <p>b = ${b} m</p>
        <p>c = ${c} m</p>
        <p>d = ${d} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = a + b + c + d</p>
        <p>K = ${a} + ${b} + ${c} + ${d}</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKTrapesium');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKTrapesium').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Belah Ketupat K = 4 * s
function hitungKBelahKetupat() {
    const s = parseFloat(document.getElementById('sKBelahKetupat').value);
    
    // Validasi input
    if (isNaN(s) || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 4 * s;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKBelahKetupat');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 4 * s</p>
        <p>K = 4 * ${s}</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKBelahKetupat');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKBelahKetupat').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Layang-Layang K = 2 * (s1 + s2)
function hitungKLayangLayang() {
    const s1 = parseFloat(document.getElementById('s1KLayangLayang').value);
    const s2 = parseFloat(document.getElementById('s2KLayangLayang').value);
    
    // Validasi input
    if (isNaN(s1) || isNaN(s2) || s1 === 0 || s2 === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 2 * (s1 + s2);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKLayangLayang');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s₁ = ${s1} m</p>
        <p>s₂ = ${s2} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 2 * (s₁ + s₂)</p>
        <p>K = 2 * (${s1} + ${s2})</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKLayangLayang');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKLayangLayang').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Kubus K = 12 * s
function hitungKKubus() {
    const s = parseFloat(document.getElementById('sKKubus').value);
    
    // Validasi input
    if (isNaN(s) || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 12 * s;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKKubus');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 12 * s</p>
        <p>K = 12 * ${s}</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKKubus');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKKubus').appendChild(hasilDiv);
}

// Fungsi untuk menghitung Keliling Balok K = 4 * (p + l + t)
function hitungKBalok() {
    const p = parseFloat(document.getElementById('pKBalok').value);
    const l = parseFloat(document.getElementById('lKBalok').value);
    const t = parseFloat(document.getElementById('tKBalok').value);
    
    // Validasi input
    if (isNaN(p) || isNaN(l) || isNaN(t) || p === 0 || l === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const K = 4 * (p + l + t);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilKBalok');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>p = ${p} m</p>
        <p>l = ${l} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> K = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>K = 4 * (p + l + t)</p>
        <p>K = 4 * (${p} + ${l} + ${t})</p>
        <p>K = ${K.toFixed(2)} m</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilKBalok');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungKBalok').appendChild(hasilDiv);
}

// Fungsi untuk menghitung volume Kubus V = s³
function hitungVKubus() {
    const s = parseFloat(document.getElementById('sVKubus').value);
    
    // Validasi input
    if (isNaN(s) || s === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const V = Math.pow(s, 3);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilVKubus');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>s = ${s} m</p>
        <p><strong>Ditanya:</strong> V = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>V = s³</p>
        <p>V = ${s}³</p>
        <p>V = ${V.toFixed(2)} m³</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilVKubus');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungVKubus').appendChild(hasilDiv);
}

// Fungsi untuk menghitung volume balok V = p * l * t
function hitungVBalok(){
    const p = parseFloat(document.getElementById('pVBalok').value);
    const l = parseFloat(document.getElementById('lVBalok').value);
    const t = parseFloat(document.getElementById('tVBalok').value);
    
    // Validasi input
    if (isNaN(p) || isNaN(l) || isNaN(t) || p === 0 || l === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const V = p * l * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilVBalok');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>p = ${p} m</p>
        <p>l = ${l} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> V = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>V = p * l * t</p>
        <p>V = ${p} * ${l} * ${t}</p>
        <p>V = ${V.toFixed(2)} m³</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilVBalok');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungVBalok').appendChild(hasilDiv);
}

// Fungsi untuk menghitung volume tabung V = πr²t
function hitungVTabung() {
    const r = parseFloat(document.getElementById('rVTabung').value);
    const t = parseFloat(document.getElementById('tVTabung').value);
    
    // Validasi input
    if (isNaN(r) || isNaN(t) || r === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const V = Math.PI * Math.pow(r, 2) * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilVTabung');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> V = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>V = πr²t</p>
        <p>V = 3.14 * ${r}² * ${t}</p>
        <p>V = ${V.toFixed(3)} m³</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilVTabung');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungVTabung').appendChild(hasilDiv);
}

// Fungsi untuk menghitung volume kerucut V = 1/3 * πr²t
function hitungVKerucut() {
    const r = parseFloat(document.getElementById('rVKerucut').value);
    const t = parseFloat(document.getElementById('tVKerucut').value);
    
    // Validasi input
    if (isNaN(r) || isNaN(t) || r === 0 || t === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const V = (1/3) * Math.PI * Math.pow(r, 2) * t;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilVKerucut');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p>t = ${t} m</p>
        <p><strong>Ditanya:</strong> V = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>V = 1/3 * πr²t</p>
        <p>V = 1/3 * 3.14 * ${r}² * ${t}</p>
        <p>V = ${V.toFixed(3)} m³</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilVKerucut');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungVKerucut').appendChild(hasilDiv);
}

// Fungsi untuk menghitung volume bola V = 4/3 * πr³
function hitungVBola() {
    const r = parseFloat(document.getElementById('rVBola').value);
    
    // Validasi input
    if (isNaN(r) || r === 0) {
        alert("Mohon masukkan nilai yang valid (tidak boleh 0)");
        return;
    }

    const V = (4/3) * Math.PI * Math.pow(r, 3);

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilVBola');

    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan:</h3>
        <p><strong>Diketahui:</strong></p>
        <p>r = ${r} m</p>
        <p><strong>Ditanya:</strong> V = ?</p>
        <p><strong>Jawab:</strong></p>
        <p>V = 4/3 * πr³</p>
        <p>V = 4/3 * 3.14 * ${r}³</p>
        <p>V = ${V.toFixed(3)} m³</p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilVBola');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungVBola').appendChild(hasilDiv);
}

//  Fungsi untuk menghitung mean tuggal 
function hitungMeanTunggal() {
    // Ambil semua input data
    const inputs = document.querySelectorAll('.mean-tunggal-input');
    const dataArr = Array.from(inputs).map(i => Number(i.value)).filter(n => !isNaN(n));

    if (dataArr.length === 0) {
        alert("Mohon masukkan minimal satu data.");
        return;
    }

    const total = dataArr.reduce((sum, val) => sum + val, 0);
    const mean = total / dataArr.length;

    // Buat elemen hasil
    const hasilDiv = document.createElement('div');
    hasilDiv.classList.add('hasilMeanTunggal');
    hasilDiv.innerHTML = `
        <h3>Hasil Perhitungan Mean Tunggal:</h3>
        <p><strong>Data:</strong> ${dataArr.join(', ')}</p>
        <p><strong>Banyak Data (n):</strong> ${dataArr.length}</p>
        <p><strong>Jumlah Data (Σx):</strong> ${total}</p>
        <p><strong>Mean:</strong> Σx / n = ${total} / ${dataArr.length} = <b>${mean.toFixed(2)}</b></p>
    `;

    // Hapus hasil sebelumnya jika ada
    const existing = document.querySelector('.hasilMeanTunggal');
    if (existing) existing.remove();

    // Tambahkan hasil ke dalam div hitung
    document.querySelector('.hitungMeanTunggal').appendChild(hasilDiv);
}

// Agar tombol tambah data berfungsi
document.addEventListener('DOMContentLoaded', function () {
    const btnTambah = document.getElementById('btnTambahData');
    if (btnTambah) {
        btnTambah.addEventListener('click', function () {
            const listDiv = document.getElementById('inputMeanTunggalList');
            const inputCount = listDiv.querySelectorAll('input').length + 1;
            const input = document.createElement('input');
            input.type = 'number';
            input.placeholder = `Data ke-${inputCount}`;
            input.className = 'mean-tunggal-input';
            input.style.marginBottom = '15px';
            listDiv.appendChild(input);
            input.focus();
        });
    }
});


// Fungsi untuk menghitung Pythagoras
let rumusAktif = null;

// Event listener untuk tombol rumus
document.addEventListener('DOMContentLoaded', function () {
    const inputDiv = document.getElementById('inputPythagorasList');
    const btnC = document.getElementById('btnTambahRumusc');
    const btnA = document.getElementById('btnTambahRumusa');
    const btnB = document.getElementById('btnTambahRumusb');

    function clearInputs() {
        // Hapus input sebelumnya
        const oldInputs = inputDiv.querySelectorAll('.pythagoras-input-area');
        oldInputs.forEach(el => el.remove());
        // Hapus hasil sebelumnya
        const oldHasil = document.querySelector('.hasilPythagoras');
        if (oldHasil) oldHasil.remove();
    }

    function setActiveButton(activeBtn) {
        [btnC, btnA, btnB].forEach(btn => {
            btn.classList.remove('active-pythagoras-btn');
        });
        if (activeBtn) activeBtn.classList.add('active-pythagoras-btn');
    }

    btnC.addEventListener('click', function () {
        clearInputs();
        rumusAktif = 'c';
        setActiveButton(btnC);
        const area = document.createElement('div');
        area.className = 'pythagoras-input-area';
        area.innerHTML = `
            <input type="number" id="aPythagoras" placeholder="Masukkan nilai a" style="margin-bottom:10px;">
            <input type="number" id="bPythagoras" placeholder="Masukkan nilai b">
        `;
        inputDiv.appendChild(area);
    });

    btnA.addEventListener('click', function () {
        clearInputs();
        rumusAktif = 'a';
        setActiveButton(btnA);
        const area = document.createElement('div');
        area.className = 'pythagoras-input-area';
        area.innerHTML = `
            <input type="number" id="cPythagoras" placeholder="Masukkan nilai c (sisi miring)" style="margin-bottom:10px;">
            <input type="number" id="bPythagoras" placeholder="Masukkan nilai b">
        `;
        inputDiv.appendChild(area);
    });

    btnB.addEventListener('click', function () {
        clearInputs();
        rumusAktif = 'b';
        setActiveButton(btnB);
        const area = document.createElement('div');
        area.className = 'pythagoras-input-area';
        area.innerHTML = `
            <input type="number" id="cPythagoras" placeholder="Masukkan nilai c (sisi miring)" style="margin-bottom:10px;">
            <input type="number" id="aPythagoras" placeholder="Masukkan nilai a">
        `;
        inputDiv.appendChild(area);
    });
});

// Fungsi utama hitung
function hitungPythagoras() {
    // Hapus hasil sebelumnya
    const oldHasil = document.querySelector('.hasilPythagoras');
    if (oldHasil) oldHasil.remove();

    let hasilDiv = document.createElement('div');
    hasilDiv.className = 'hasilPythagoras';

    if (rumusAktif === 'c') {
        const a = parseFloat(document.getElementById('aPythagoras')?.value);
        const b = parseFloat(document.getElementById('bPythagoras')?.value);
        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            alert('Masukkan nilai a dan b yang valid (> 0)');
            return;
        }
        const c = Math.sqrt(a * a + b * b);
        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan:</h3>
            <p>c² = a² + b²</p>
            <p>c² = ${a}² + ${b}²</p>
            <p>c² = ${a * a} + ${b * b}</p>
            <p>c² = ${(a * a + b * b).toFixed(2)}</p>
            <p>c = √${(a * a + b * b).toFixed(2)}</p>
            <p><b>c = ${c.toFixed(2)}</b></p>
        `;
    } else if (rumusAktif === 'a') {
        const c = parseFloat(document.getElementById('cPythagoras')?.value);
        const b = parseFloat(document.getElementById('bPythagoras')?.value);
        if (isNaN(c) || isNaN(b) || c <= 0 || b <= 0 || c <= b) {
            alert('Masukkan nilai c dan b yang valid (c > b > 0)');
            return;
        }
        const a = Math.sqrt(c * c - b * b);
        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan:</h3>
            <p>a² = c² - b²</p>
            <p>a² = ${c}² - ${b}²</p>
            <p>a² = ${c * c} - ${b * b}</p>
            <p>a² = ${(c * c - b * b).toFixed(2)}</p>
            <p>a = √${(c * c - b * b).toFixed(2)}</p>
            <p><b>a = ${a.toFixed(2)}</b></p>
        `;
    } else if (rumusAktif === 'b') {
        const c = parseFloat(document.getElementById('cPythagoras')?.value);
        const a = parseFloat(document.getElementById('aPythagoras')?.value);
        if (isNaN(c) || isNaN(a) || c <= 0 || a <= 0 || c <= a) {
            alert('Masukkan nilai c dan a yang valid (c > a > 0)');
            return;
        }
        const b = Math.sqrt(c * c - a * a);
        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan:</h3>
            <p>b² = c² - a²</p>
            <p>b² = ${c}² - ${a}²</p>
            <p>b² = ${c * c} - ${a * a}</p>
            <p>b² = ${(c * c - a * a).toFixed(2)}</p>
            <p>b = √${(c * c - a * a).toFixed(2)}</p>
            <p><b>b = ${b.toFixed(2)}</b></p>
        `;
    } else {
        alert('Silakan pilih rumus terlebih dahulu.');
        return;
    }

    // Tambahkan hasil ke dalam div hitungPythagoras
    document.querySelector('.hitungPythagoras').appendChild(hasilDiv);
}


// Fungsi untuk menghitung skala 
// Skala calculator logic mirip Pythagoras
let rumusSkalaAktif = null;

document.addEventListener('DOMContentLoaded', function () {
    const inputDiv = document.getElementById('inputSkalaList');
    const btnSkala = document.getElementById('btnTambahRumusSkala');
    const btnJarakPeta = document.getElementById('btnTambahRumusJarakPeta');
    const btnJarakSebenarnya = document.getElementById('btnTambahRumusJarakSebenarnya');

    function clearInputsSkala() {
        const oldInputs = inputDiv.querySelectorAll('.skala-input-area');
        oldInputs.forEach(el => el.remove());
        const oldHasil = document.querySelector('.hasilSkala');
        if (oldHasil) oldHasil.remove();
    }

    function setActiveButtonSkala(activeBtn) {
        [btnSkala, btnJarakPeta, btnJarakSebenarnya].forEach(btn => {
            btn.classList.remove('active-skala-btn');
        });
        if (activeBtn) activeBtn.classList.add('active-skala-btn');
    }

    btnSkala.addEventListener('click', function () {
        clearInputsSkala();
        rumusSkalaAktif = 'skala';
        setActiveButtonSkala(btnSkala);
        const area = document.createElement('div');
        area.className = 'skala-input-area';
        area.innerHTML = `
            <input type="number" id="jarakPeta" placeholder="Jarak pada peta (cm)" style="margin-bottom:10px;">
            <input type="number" id="jarakSebenarnya" placeholder="Jarak sebenarnya (cm)">
        `;
        inputDiv.appendChild(area);
    });

    btnJarakPeta.addEventListener('click', function () {
        clearInputsSkala();
        rumusSkalaAktif = 'jarakPeta';
        setActiveButtonSkala(btnJarakPeta);
        const area = document.createElement('div');
        area.className = 'skala-input-area';
        area.innerHTML = `
            <input type="number" id="skala" placeholder="Skala (misal 20000)" style="margin-bottom:10px;">
            <input type="number" id="jarakSebenarnya" placeholder="Jarak sebenarnya (cm)">
        `;
        inputDiv.appendChild(area);
    });

    btnJarakSebenarnya.addEventListener('click', function () {
        clearInputsSkala();
        rumusSkalaAktif = 'jarakSebenarnya';
        setActiveButtonSkala(btnJarakSebenarnya);
        const area = document.createElement('div');
        area.className = 'skala-input-area';
        area.innerHTML = `
            <input type="number" id="jarakPeta" placeholder="Jarak pada peta (cm)" style="margin-bottom:10px;">
            <input type="number" id="skala" placeholder="Skala (misal 20000)">
        `;
        inputDiv.appendChild(area);
    });
});

function hitungSkala() {
    const oldHasil = document.querySelector('.hasilSkala');
    if (oldHasil) oldHasil.remove();

    let hasilDiv = document.createElement('div');
    hasilDiv.className = 'hasilSkala';

    if (rumusSkalaAktif === 'skala') {
        const jarakPeta = parseFloat(document.getElementById('jarakPeta')?.value);
        const jarakSebenarnya = parseFloat(document.getElementById('jarakSebenarnya')?.value);
        if (isNaN(jarakPeta) || isNaN(jarakSebenarnya) || jarakPeta <= 0 || jarakSebenarnya <= 0) {
            alert('Masukkan nilai jarak pada peta dan jarak sebenarnya yang valid (> 0)');
            return;
        }
        const skala = jarakPeta / jarakSebenarnya;
        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan Skala:</h3>
            <p>Skala = Jarak pada peta / Jarak sebenarnya</p>
            <p>Skala = ${jarakPeta} cm / ${jarakSebenarnya} cm</p>
            <p>Skala = ${skala}</p>
            <p>Skala = 1 : ${(jarakSebenarnya / jarakPeta).toFixed(0)}</p>
        `;
    } else if (rumusSkalaAktif === 'jarakPeta') {
        const skala = parseFloat(document.getElementById('skala')?.value);
        const jarakSebenarnya = parseFloat(document.getElementById('jarakSebenarnya')?.value);
        if (isNaN(skala) || isNaN(jarakSebenarnya) || skala <= 0 || jarakSebenarnya <= 0) {
            alert('Masukkan nilai skala dan jarak sebenarnya yang valid (> 0)');
            return;
        }
        const jarakPeta = skala * jarakSebenarnya;
        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan Jarak pada Peta:</h3>
            <p>Jarak pada peta = Skala x Jarak sebenarnya</p>
            <p>Jarak pada peta = ${skala} x ${jarakSebenarnya} cm</p>
            <p>Jarak pada peta = ${jarakPeta} cm</p>
        `;
    } else if (rumusSkalaAktif === 'jarakSebenarnya') {
        const jarakPeta = parseFloat(document.getElementById('jarakPeta')?.value);
        const skala = parseFloat(document.getElementById('skala')?.value);
        if (isNaN(jarakPeta) || isNaN(skala) || jarakPeta <= 0 || skala <= 0) {
            alert('Masukkan nilai jarak pada peta dan skala yang valid (> 0)');
            return;
        }
        const jarakSebenarnya = jarakPeta / skala;
        hasilDiv.innerHTML = `
            <h3>Hasil Perhitungan Jarak Sebenarnya:</h3>
            <p>Jarak sebenarnya = Jarak pada peta / Skala</p>
            <p>Jarak sebenarnya = ${jarakPeta} cm / ${skala}</p>
            <p>Jarak sebenarnya = ${jarakSebenarnya} cm</p>
        `;
    } else {
        alert('Silakan pilih rumus terlebih dahulu.');
        return;
    }

    document.querySelector('.hitungSkala').appendChild(hasilDiv);
}

// Fungsi untuk menghitung turunan pangkat dengan rumus turunan power rule
function hitungTurunanPangkat() {
    // Hapus hasil sebelumnya jika ada
    const oldHasil = document.querySelector('.hasilTurunanPangkat');
    if (oldHasil) oldHasil.remove();

    const nInput = document.getElementById('nTurunanPangkat');
    const n = parseFloat(nInput.value);

    if (isNaN(n)) {
        alert('Masukkan nilai n yang valid!');
        return;
    }

    // Rumus: d/dx(xⁿ) = n × xⁿ⁻¹
    const hasilDiv = document.createElement('div');
    hasilDiv.className = 'hasilTurunanPangkat';
    hasilDiv.innerHTML = `
        <h3>Hasil Turunan:</h3>
        <p>f(x) = x<sup>${n}</sup></p>
        <p>f'(x) = d/dx(x<sup>${n}</sup>) = ${n} × x<sup>${n - 1}</sup></p>
        <p><b>f'(x) = ${n === 0 ? 0 : (n === 1 ? 1 : n + 'x' + (n - 1 === 1 ? '' : '<sup>' + (n - 1) + '</sup>'))}</b></p>
    `;

    document.querySelector('.hitungTurunanPangkat').appendChild(hasilDiv);
}

