'use strict';

function BinarioADecimal(num) {
   let res = "";
   while (num>0){
      res = (num % 2) + res;
      num = ~~(num / 2);
   }
   return res;
}

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
