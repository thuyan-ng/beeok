import React from "react";

export default function FetchProductsFromCategory(category) {
  // fetch("https://api.example.json").then((response) => response.json().then(data => {return data;}))

  //hardcoded
  return [
    {
      id: "Boisson fleur de sureau 1L",
      picture:
        "https://beeok.be/web/image/product.template/8656/image?unique=caba2c7",
      price: "2,61€",
    },
    {
      id: "Jus de Tomates 75CL",
      price: "2,19€",
      picture:
        "https://beeok.be/web/image/product.template/8656/image?unique=caba2c7",
    },
    {
      id: "Jus de Betterave rouge 75CL",
      price: "2,37€",
      picture:
        "https://beeok.be/web/image/product.template/8656/image?unique=caba2c7",
    },
    {
      id: "Jus Pomme Cerise 75CL",
      price: "3,38€",
      picture:
        "https://beeok.be/web/image/product.template/8656/image?unique=caba2c7",
    },
    {
      id: "Jus de Pamplemousse rose 75CL",
      price: "3,69€",
      picture:
        "https://beeok.be/web/image/product.template/8656/image?unique=caba2c7",
    },
    {
      id: "Jus Multifruits 75CL",
      price: "3,40€",
      picture:
        "https://beeok.be/web/image/product.template/8656/image?unique=caba2c7",
    },
  ];
}
