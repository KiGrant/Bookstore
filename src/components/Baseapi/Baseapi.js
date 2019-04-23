import React from 'react';
import axios from 'axios';



const api = "http://localhost:7000";

const send = url => {
  return axios(url, {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  }).then(resp => {
    if (resp.data.error) throw new Error(resp.error);
    return resp.data;
  });
};

export const getBookSelf = () => {
  return send(`${api}/bookshelf`);
};

export const get = bookId => {
  return send(`${api}/book/${bookId}`);
};

export const updateShelf = (bookId, shelf) => {
  return send(`${api}/bookshelf/update/${bookId}/${shelf}`);
};

