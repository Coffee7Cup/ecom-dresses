import './style.css';
import products from './assests/products_100.json';
import { renderCard, renderHeading } from './utils';

(function() {
  const mainComp = document.querySelector('#Main');
  let content = renderHeading({
    title:"lorem ipsum dolor",
    subtitle:"lorem ipsum dolor sit amet",
    img:'https://images.pexels.com/photos/2780196/pexels-photo-2780196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  });

  let items = products.map((item) => {
    return renderCard(item);
  }).join(''); // Join the array of strings to form a single string

  mainComp.innerHTML = content + `<div class="flex flex-wrap justify-center gap-4 mt-8">${items}</div>`;
})();