export const setUserStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserStorage = () => {
  const result = localStorage.getItem("user");
  const userData = result ? JSON.parse(result) : null;
  return userData;
};

// // adding a func that get products already fetched and added to the local storage (value)
// export const getCartStorageItem = (cart) => {
//   // getting product array in the local storage (store)
//   let storageItem = localStorage.getItem(cart);
//   // checking to see if products fetched are in the local storage
//   if (storageItem) {
//     // converting the string data set in the local storage into a JSON so that the browser can get it and use
//     storageItem = JSON.parse(localStorage.getItem(cart));
//   } else {
//     // when the local storage where it is to fetch products name is different then it should have an empty array
//     storageItem = [];
//   }
//   // returning the storage item value
//   return storageItem;
// };

// adding a func that add products fetched from the server into the local storage so that it can be easily accessed (takes a key - value pair)
export const setCartStorageItem = (cart) => {
  // The JSON.stringify() method converts the item (products) into strings when setting products in the local storage
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartStorageItem = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};
