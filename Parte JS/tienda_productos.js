let cartItems = [];
        let cartTotal = 0;
        let currencySymbol = 'S/'; // Símbolo de moneda deseado
      
        function agregarAlCarrito(nombre, precio) {
          cartItems.push({ nombre, precio });
          cartTotal += precio;
          mostrarCarrito();
          metodosPagoContainer.scrollTop = metodosPagoContainer.scrollHeight;
        }
      
        function quitarDelCarrito(index) {
          const item = cartItems[index];
          cartTotal -= item.precio;
          cartItems.splice(index, 1);
          mostrarCarrito();
        }
      
        function mostrarCarrito() {
          const cartItemsContainer = document.getElementById('cart-items');
          const cartTotalContainer = document.getElementById('cart-total');
          const paymentImages = document.getElementsByClassName('payment-image');
          const verticalOffset = 35;
      
          // Limpiar el contenido del carrito
          cartItemsContainer.innerHTML = '';
      
          // Mostrar los elementos del carrito
          cartItems.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
      
            const itemName = document.createElement('span');
            itemName.textContent = item.nombre;
            itemName.style.paddingRight = '20px';
            itemName.style.color = "#3300CC"; // Espaciado horizontal para el nombre del producto
            itemName.style.fontSize = '21px'; // Aumentar tamaño de fuente del nombre del producto


            const itemPrice = document.createElement('span');
            itemPrice.textContent = `${currencySymbol}${item.precio}`;
            itemPrice.style.paddingRight = '35px'; // Espaciado horizontal para el precio
      
            // Cambiar el color del precio al agregar al carrito
            itemPrice.style.color = '#33CC33';
            itemPrice.style.fontSize = '21px'; // Aumentar tamaño de fuente del precio

            const removeButton = document.createElement('img'); // Cambiar a elemento img
            removeButton.classList.add('remove');
            removeButton.src = 'img/equis_roja.png'; // Establecer la imagen como fuente
            removeButton.alt = 'Quitar del carrito'; // Altura para accesibilidad
            removeButton.onclick = () => quitarDelCarrito(index);
            removeButton.style.width = '20px'; // Estilo de tamaño
            removeButton.style.height = '20px'; // Estilo de tamaño
            removeButton.style.marginTop = '5px'; // Mover la imagen hacia abajo 5px

      
            cartItemElement.appendChild(itemName);
            cartItemElement.appendChild(itemPrice);
            cartItemElement.appendChild(removeButton);
             // Cambiar estilo de tamaño de fuente para el texto del total
            cartItemElement.style.fontSize = '21px';
      
             // Aquí se establece el estilo para mostrar horizontalmente
            cartItemElement.style.display = 'block'; // Opcional: También podrías usar 'inline' si prefieres

            cartItemsContainer.appendChild(cartItemElement);
          });
      
          // Actualizar el total del carrito con el símbolo de moneda deseado
          cartTotalContainer.textContent = `${currencySymbol}${cartTotal.toFixed(2)}`;
          
           // Cambiar estilo de tamaño de fuente para el texto del total
           cartTotalContainer.style.fontSize = '21px';

          // Mostrar/ocultar el botón de "Quitar del carrito"
          const removeButtons = document.getElementsByClassName('remove');
          if (cartItems.length > 0) {
            for (let i = 0; i < removeButtons.length; i++) {
              removeButtons[i].classList.add('show');
            }
          } else {
            for (let i = 0; i < removeButtons.length; i++) {
              removeButtons[i].classList.remove('show');
            }
          }
      
          // Ajustar la posición vertical de las imágenes
          const cartHeight = cartItems.length * verticalOffset;
          const paymentContainer = document.querySelector('.payment-container');
          paymentContainer.style.top = (50 + cartHeight) + 'px';
        }
      
        function buscarProductos() {
          const searchTerm = document.getElementById('search').value.toLowerCase();
          const products = document.getElementsByClassName('product-container');
          let visibleProducts = 0;
      
          for (let i = 0; i < products.length; i++) {
              const productName = products[i].getElementsByClassName('product-name')[0].textContent.toLowerCase();
      
              if (productName.includes(searchTerm)) {
                  products[i].style.display = 'inline-block';
                  visibleProducts++;
              } else {
                  products[i].style.display = 'none';
              }
          }
      
         
      }
      
        mostrarCarrito();