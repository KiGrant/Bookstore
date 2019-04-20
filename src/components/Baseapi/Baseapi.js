// import React from 'react';
// import axios from 'axios';



// const api = "http://localhost:7000";

// const recieve = url => {
//   return axios(url, {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     }
//   }).then(resp => {
//     if (resp.data.error) throw new Error(resp.error);
//     return resp.data;
//   });
// };

// export const getBookSelf = () => {
//   return recieve(`${api}/bookshelf`);
// };

// export const get = bookId => {
//   return recieve(`${api}/book/${bookId}`);
// };

// export const updateShelf = (bookId, shelf) => {
//   return recieve(`${api}/bookshelf/update/${bookId}/${shelf}`);
// };

// export const search = query => {
//   const newQuery = query.split(" ").join("+");
//   return recieve(`${api}/books/search/${newQuery}`);
// };