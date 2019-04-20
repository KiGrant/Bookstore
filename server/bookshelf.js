const { cleanUpVolumeInfo } = require("./util");

let Bookshelf = require("./starterBookshelf");

let error = "";

const getBookshelfError = () => {
  return error;
};

const getBookshelf = () => {
  return { ...Bookshelf };
};

const getVolumeInfo = bookId => {
  error = "";
  const volumeInfo = Object.values(Bookshelf)
    .reduce((acc, shelf) => {
      return acc.concat(shelf);
    }, [])
    .find(book => book.id === bookId);
  if (!volumeInfo) error = `Book with ${bookId} is not on the bookshelf`;
  return volumeInfo;
};

const getBookIds = () => {
  return Object.values(Bookshelf).reduce((acc, books) => {
    const bookIds = books.map(book => book.id);
    return acc.concat(bookIds);
  }, []);
};

const hasBook = bookId => {
  return getBookIds().indexOf(bookId) > -1;
};

const findShelfForBook = (bookId, shelfIndex = 0) => {
  error = "";
  if (!hasBook(bookId)) {
    error = `Book with ID ${bookId} is not in the book shelf`;
    return "none";
  }

  const shelf = Object.keys(Bookshelf)[shelfIndex];
  const shelfBookIds = Bookshelf[shelf].map(book => book.id);
  if (shelfBookIds.indexOf(bookId) < 0)
    return findShelfForBook(bookId, shelfIndex + 1);
  else return shelf;
};

const addToBookshelf = (volumeInfo, shelf) => {
  Bookshelf[shelf] = [
    ...Bookshelf[shelf],
    { ...cleanUpVolumeInfo(volumeInfo), shelf }
  ];
};

const deleteFromBookshelf = bookId => {
  Bookshelf = Object.entries({ ...Bookshelf }).reduce((acc, [shelf, books]) => {
    acc[shelf] = books.filter(book => book.id !== bookId);
    return acc;
  }, {});
};

const updateBookshelf = (volumeInfo, shelf) => {
  error = "";

  if (!Bookshelf[shelf] && shelf !== "none") {
    error = `Shelf ${shelf} does not exist`;
    return undefined;
  }

  if (!volumeInfo.hasOwnProperty("id")) {
    error = "Invalid volumeInfo";
    return undefined;
  }

  deleteFromBookshelf(volumeInfo.id);
  if (shelf !== "none") addToBookshelf(volumeInfo, shelf);
  return getBookshelf();
};

module.exports = {
  getBookshelfError,
  getBookshelf,
  getVolumeInfo,
  findShelfForBook,
  updateBookshelf
};
