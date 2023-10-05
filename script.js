(function() {

   'use strict';

   const detailsForm = document.getElementById('destination_details');
   detailsForm.addEventListener('submit', handleFormSubmit);

   function handleFormSubmit(e) {
      e.preventDefault();

      const destinationName = e.target.elements['name'].value;
      const destinationLocation = e.target.elements['location'].value;
      const destinationPhoto = e.target.elements['photo'].value;
      const destinationDescription = e.target.elements['description'].value;

      for (const contents of detailsForm) {
         contents.value = '';
      }
      const wishListContainer = document.querySelector('#destination_container');

      if (wishListContainer.children.length === 0) {
         document.querySelector('#title').innerHTML = 'My Wish List';
      }

      const destinationCard = createDestinationCard(destinationName, destinationLocation, destinationPhoto, destinationDescription);

      wishListContainer.appendChild(destinationCard);

   }

   function createDestinationCard(name, location, photoUrl, description) {
      const card = document.createElement('div');
      card.className = 'card';

      const image = document.createElement('img');
      
      image.setAttribute('alt', name);

      const defaultPhotoUrl = 'image/sean-oulashin-KMn4VEeEPR8-unsplash.jpg';

      if (photoUrl.length === 0) {
         image.setAttribute('src', defaultPhotoUrl);
      } else {
         image.setAttribute('src', photoUrl);
      }

      card.appendChild(image);

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const destinationName = document.createElement('h3');
      destinationName.appendChild(document.createTextNode(name));
      cardBody.appendChild(destinationName);

      const destinationLocation = document.createElement('h4');
      destinationLocation.appendChild(document.createTextNode(location));
      cardBody.appendChild(destinationLocation);

      if (description.length !== 0) {
         const destinationDescription = document.createElement('p');
         destinationDescription.className = 'card-text';
         destinationDescription.appendChild(document.createTextNode(description));
         cardBody.appendChild(destinationDescription);
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.appendChild(document.createTextNode('Remove'));
      deleteBtn.addEventListener('click', removeDestination);
      cardBody.appendChild(deleteBtn);

      card.appendChild(cardBody);

      return card

   }

   function removeDestination(e) {
      const card = e.target.parentElement.parentElement;
      card.remove();
   }

})();