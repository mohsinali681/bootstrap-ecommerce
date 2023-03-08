// Get a reference to the card container
const cardContainer = document.getElementById("card-container");

// Create an array of data for the cards and images
const cardData = [
  { title: "wholeseller", imgSrc: "./assets/images/wholeseller.png" },
  { title: "Retailer", imgSrc: "./assets/images/wholeseller.png" },
  {
    title: "Manufacturing companies",
    imgSrc: "./assets/images/wholeseller.png",
  },
  { title: "Distributor", imgSrc: "./assets/images/wholeseller.png" },
  { title: "Worker", imgSrc: "./assets/images/wholeseller.png" },
  { title: "seller", imgSrc: "./assets/images/wholeseller.png" },
];

// Loop through the card data and create a card for each item
for (let i = 0; i < cardData.length; i++) {
  // Create a new div for the card
  const card = document.createElement("div");
  card.classList.add("col-3");

  // Create the card element
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  card.appendChild(cardElement);

  // Create the card image element
  const img = document.createElement("img");
  img.src = cardData[i].imgSrc;
  img.classList.add("card-img-top");
  img.classList.add("custom-height-width");
  cardElement.appendChild(img);

  // Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-img-overlay");
  cardBody.classList.add("text-white");
  cardElement.appendChild(cardBody);

  // Create the card title element
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = cardData[i].title;
  cardBody.appendChild(cardTitle);

  // Add the card to the container
  cardContainer.appendChild(card);
}

//slick slider
$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-carousel-test").slick({
    dots: false,
    infinite: true,
    arrow: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// banner slider product page

// buttons
