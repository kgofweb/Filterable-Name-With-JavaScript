// DOM elements
let filterInput = document.getElementById('filterInput');
let ul = document.getElementById('names');
let li = document.querySelectorAll('.collection-items');

// Event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
   // Get input value
   let inputVal = filterInput.value.toUpperCase();

   // With for loop
   // Loop collection-items lis
   for(let i = 0; i < li.length; i++) {
      // Search in A
      let a = li[i].getElementsByTagName('a')[0];

      // Matched
      if(a.innerHTML.toUpperCase().indexOf(inputVal) > -1) {
         // Is macth
         li[i].style.display = '';
      } else {
         // Doesn't macth
         li[i].style.display = 'none';
      }
   }

   // With forEach Loop
   li.forEach(liElement => {
      let a = liElement.getElementsByTagName('a')[0];

      // Matched
      if(a.innerHTML.toUpperCase().indexOf(inputVal) > -1) {
         // Is matched
         liElement.style.display = '';
      } else {
         // Doesn't macth
         liElement.style.display = 'none';
      }
   });
}