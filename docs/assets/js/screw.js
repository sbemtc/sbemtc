// Fungsi untuk menghitung ID (Inner Diameter)
function calculateID(diameterPipa, pitch) {
    const phi = Math.PI; // Nilai Phi (π)
    const id = ((diameterPipa * phi) ** 2 + pitch ** 2) / phi;
    return id;
}

// Fungsi untuk menghitung OD (Outer Diameter)
function calculateOD(diameterCasing, diameterPipa, id) {
    const od = diameterCasing - diameterPipa + id;
    return od;
}

document.querySelector("form#screw")?.addEventListener('submit', (event) => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  alert('Form submission cancelled.');
});


// Contoh penggunaan
const diameterPipa = 10; // Diameter pipa dalam satuan tertentu
const pitch = 5; // Pitch dalam satuan tertentu
const diameterCasing = 20; // Diameter casing dalam satuan tertentu

// Menghitung ID
const id = calculateID(diameterPipa, pitch);
console.log("ID (Inner Diameter):", id);

// Menghitung OD
const od = calculateOD(diameterCasing, diameterPipa, id);
console.log("OD (Outer Diameter):", od);
