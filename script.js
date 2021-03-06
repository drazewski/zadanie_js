var checkNumber;
var displayResults;

/**
*Sprawdza, która z kolei jest jedyna liczba nieparzysta w ciągu liczb parzystych lub liczba
*parzysta w ciągu liczb nieparzystych.
*@param {Array} numbers Ciąg liczb oddzielony spacją.
*@return {Number} Pozycja jedynej liczby parzystej lub nieparzystej.
*@author Łukasz Drążewski
*/

checkNumber = function(numbers) {
   if (numbers.length > 1) {
     var odd = numbers.filter(function(a){
         return a%2===0;
     });
     var even = numbers.filter(function(a){
         return a%2!==0;
     });
     if (odd.length == 1) {
       return numbers.indexOf(odd[0]) + 1;
     }
     if (even.length == 1) {
       return numbers.indexOf(even[0]) + 1;
     }
     if (odd.length == even.length) {
      return 'invalid data - equal number of odd and even numbers';
     }  
   }
   else {
     return 'invalid data';
   }
}

displayResults = function(result) {
  document.getElementById('result').innerHTML = '<p>' + result + '</p>';
}

document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  var numbers = document.getElementById('number').value.split(" ");
  displayResults(checkNumber(numbers));
});