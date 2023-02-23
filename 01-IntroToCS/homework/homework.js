'use strict';

function BinarioADecimal(num) {

}

function DecimalABinario(num) {
   let array =[];

   if (num === 0) return "0";

   while( num >= 1){
      array.unshift(num % 2);
      num = Math.trunc(num / 2);
   }
   return array.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
