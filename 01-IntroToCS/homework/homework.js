'use strict';

function BinarioADecimal(num) {
   var array = num.split("");
   var sum = 0;
   for(var i=0; i<array.length; i++){
      sum += array[i] * 2 ** (array.length-1-i); 
   }
   return sum;
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
