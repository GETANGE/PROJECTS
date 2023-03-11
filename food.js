const search = () => {
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const product = document.querySelectorAll('.food1');
  
    // loop through the products.
    for (let i = 0; i < product.length; i++) {
      let match = product[i].querySelector('h3');
  
      // find out if the user value matches with the product name value.
      if (match) {
        let textvalue = match.textContent || match.innerHTML;
  
        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          product[i].style.display = '';
        } else {
          product[i].style.display = 'none';
        }
      }
    }
  }
    const storeitems = document.querySelector('#product-list').querySelectorAll('.food1, .food2');
  