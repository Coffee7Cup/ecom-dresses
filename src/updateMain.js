import products from "./assests/products_100.json"; // Corrected the path
import { renderCard, renderHeading } from "./utils";

const pref = [];

const updateUi = () => {
  const mainComp = document.querySelector("#Main");

  let content = renderHeading({
    title: "lorem ipsum dolor",
    subtitle: "lorem ipsum dolor sit amet",
    img: "https://images.pexels.com/photos/2780196/pexels-photo-2780196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  const selectedContent = displaySelected();

  let filtered = products
    .filter((item) => {
      return pref.includes(item.for) || pref.includes(item.type);
    })
    .map((item) => {
      return renderCard(item);
    })
    .join("");

  mainComp.innerHTML =
    content +
    selectedContent +
    `<div class="flex flex-wrap justify-center gap-4 mt-8">${filtered}</div>`;

  // Reassign event listeners after rendering
  const closeFilter = document.querySelectorAll("[id^='remove-']");
  closeFilter.forEach((item) => {
    item.addEventListener("click", () => {
      const preferenceToRemove = item.id.split("-")[1];
      const index = pref.indexOf(preferenceToRemove);
      if (index !== -1) {
        pref.splice(index, 1);
        updateUi(); // Update the UI after removing the preference
      }
    });
  });
};

function addPreference(category, type) {
  if (pref.includes(category)) {
    pref.splice(pref.indexOf(category), 1);
  } else {
    pref.push(category);
  }

  if (pref.includes(type)) {
    pref.splice(pref.indexOf(type), 1);
  } else {
    pref.push(type);
  }
  console.log(pref);
  updateUi();
}

const preferences = {
  "men-clothing": ["male", "clothes"],
  "men-footwear": ["male", "footwear"],
  "men-accessories": ["male", "accessories"],
  "men-eyewear": ["male", "glasses"],
  "women-clothing": ["female", "clothes"],
  "women-footwear": ["female", "footwear"],
  "women-accessories": ["female", "accessories"],
  "women-eyewear": ["female", "glasses"],
  "kids-clothing": ["kids", "clothes"],
  "kids-footwear": ["kids", "footwear"],
  "kids-accessories": ["kids", "accessories"],
  "kids-eyewear": ["kids", "glasses"],
};

for (const [id, [category, type]] of Object.entries(preferences)) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", () => addPreference(category, type));
  } else {
    console.warn(`Element with id ${id} not found.`);
  }
}

const displaySelected = () => {
  if (!pref.length) {
    return ``;
  }

  let content = pref
    .map((item) => {
      return `<div class="p-2 rounded-2xl border-gray-600 border-2 flex justify-center items-center bg-gray-300">
          ${item} 
          <span id=${`remove-${item}`} class="text-black text-xl font-bold cursor-pointer hover:text-gray-600 transition ml-2">
            &times;
          </span>
        </div>`;
    })
    .join("");

  return `<div class="flex gap-3 justify-start items-center flex-wrap min-w-screen bg-gray-200 border-black border-2 p-3 m-4 rounded-xl">
        ${content}
      </div>`;
};

const closeFilter = document.querySelectorAll("[id^='remove-']");

closeFilter.forEach((item) => {
  item.addEventListener("click", () => {
    pref.splice(pref.indexOf(item.id.split("-")[1]), 1);
    updateUi();
  });
});

