
const renderStars = (review) => {
    let starsHTML = ''; // Initialize an empty string to store HTML

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(review)) {
      starsHTML += `<span class="text-yellow-500 text-4xl">&#9733;</span>`; // Full star
    } else if (i - 0.5 === Math.ceil(review) && review % 1 !== 0) {
      starsHTML += `
        <span class="relative text-4xl">
          <span class="text-yellow-500">&#9733;</span>
          <span class="absolute inset-0 overflow-hidden w-1/2 text-gray-300">&#9733;</span>
        </span>`; // Half star
    } else {
      starsHTML += `<span class="text-gray-300 text-4xl">&#9733;</span>`; // Empty star
    }
  }

  return `<div class="flex">${starsHTML}</div>`;
}

const costCalc = (cost, offer) => {
    if (offer) {
        let price = cost - (cost*offer/100);

        return `<span class="line-through">${cost}/-</span>
        <span class="text-green-700 mx-2 font-bold">${price}/-</span>
        <span class="text-green-700">${offer}% Off</span>`
    }else{

      return `<span class="text-green-700 mx-2 font-bold">${cost}/-</span>`
    }
}

const renderHeading = (item) => {
    return `<div class="flex relative justify-center items-center w-screen min-h-screen">
    <img src=${item.img} alt="all-hero" class="w-full h-screen absolute top-0 left-0 object-cover z-10">
    <div class="w-[75%] md:w-[50%] left-[13%] md:left-[50%] min-h-[100%] absolute top-0 z-20 justify-center items-center flex flex-col text-center">
      <h1 class="text-5xl font-bold">${item.title}</h1>
      <h4 class="text-2xl">${item.subtitle}</h4>
    </div>
  </div>`
}

const renderCard = (item) => {
    return `<div class="flex flex-col justify-around items-center h-[450px] w-[300px] border-black border-2 rounded-md overflow-hidden p-4 gap-2">  
            <div class="h-[70%] min-w-[100%] border-black border-2 overflow-hidden">
              <img class="object-center" src="${item.img[0].cloth}" alt="pic">
            </div>
            <div class="flex flex-col justify-start items-start w-[100%]">
              <div class="font-bold text-xl">${item.name}</div>
              <div>${renderStars(item.reviews)}</div>
              <div>Cost: ${costCalc(item.cost, item.offer)}</div>
            </div>
            <div class="flex gap-2 w-[100%]">
              <button class="border-2 border-black p-2 font-bold hover:bg-black hover:text-white transform transition-all duration-75">Add to cart</button>
              <button class="border-2 border-black p-2 font-bold hover:bg-black hover:text-white transform transition-all duration-75">Buy</button>
            </div>
          </div>`
}

export { renderCard, renderHeading }