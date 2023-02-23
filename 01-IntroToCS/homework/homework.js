'use strict';

function BinarioADecimal(num) {

}

function DecimalABinario(num) {
   let bin =[];

   if (num === 0) return "0";

   while( num >= 1){
      bin.unshift(num % 2);
      num = Math.trunc(num / 2);
   }
   return bin.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
