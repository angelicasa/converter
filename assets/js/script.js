let mRef = document.getElementById("m");
let kmRef = document.getElementById("km");
let hmRef = document.getElementById("hm");
let damRef = document.getElementById("dam");

let convertFromm = () => {
  let m = mRef.value;
  kmRef.value = (m / 1000);
  hmRef.value = (m / 100);
  damRef.value = (m / 10);
};

let convertFromkm = () => {
  let km = kmRef.value;
  mRef.value = (km * 1000);
  hmRef.value = (km * 10);
  damRef.value = (km * 100);
};

let convertFromhm = () => {
  let hm = hmRef.value;
  mRef.value = (hm * 100);
  kmRef.value = (hm / 10);
  damRef.value = (hm / 10);
};

let convertFromdam = () => { 
  let dam = damRef.value;
  mRef.value = (dam * 10);
  kmRef.value = (dam / 100);
  hmRef.value = (dam / 10);
};

mRef.addEventListener("input", convertFromm);
kmRef.addEventListener("input", convertFromkm);
hmRef.addEventListener("input", convertFromhm);
damRef.addEventListener("input", convertFromdam); // editar novo dam
window.addEventListener("load", convertFromm);