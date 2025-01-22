import products from "./assests/products_100.json"; // Corrected the path

const pref = [];

const updateUi = () => {
  const mainComp = document.querySelector("#Main");
  let content = `<div class="flex relative justify-center items-center w-screen min-h-screen">
    <img src="https://placehold.co/600x400" alt="all-hero" class="w-full h-screen absolute top-0 left-0 object-cover z-10">
    <div class="w-[75%] md:w-[50%] left-[13%] md:left-[50%] min-h-[100%] absolute top-0 z-20 justify-center items-center flex flex-col text-center">
      <h1 class="text-5xl font-bold">${"Lorem, ipsum dolor."}</h1>
      <h4 class="text-2xl">${"Lorem ipsum dolor sit amet."}</h4>
    </div>
  </div>`;

  let filtered = products
  .filter((item) => {
    return pref.includes(item.for) || pref.includes(item.type);
  })
  .map((item) => {
    return `<div class="flex flex-col justify-around items-center h-[450px] w-[300px] border-black border-2 rounded-md overflow-hidden p-4 gap-2">  
            <div class="h-[70%] min-w-[100%] border-black border-2 overflow-hidden">
              <img class="object-center" src="${item.img[0].cloth}" alt="pic">
            </div>
            <div class="flex flex-col justify-start items-start w-[100%]">
              <div class="font-bold text-xl">${item.name}</div>
              <div>Reviews: ${item.reviews}</div>
              <div>Cost: $${item.cost}</div>
            </div>
            <div class="flex gap-2 w-[100%]">
              <button class="border-2 border-black p-2 font-bold">Add to cart</button>
              <button class="border-2 border-black p-2 font-bold px-4">Buy</button>
            </div>
          </div>`;
  }).join('');

  mainComp.innerHTML = content + `<div class="flex flex-wrap justify-center gap-4 mt-8">${filtered}</div>`;
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
    console.log(pref)
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