
// Velký, zbytečný a blokující JS
function heavyCalc(){ for(let i=0;i<1e7;i++){} }
setTimeout(heavyCalc, 0);

const unusedLibrary = (() => {
  function logMany(){
    for (let i=0;i<5000;i++){ console.log("debug", i); }
  }
  return { logMany };
})();
