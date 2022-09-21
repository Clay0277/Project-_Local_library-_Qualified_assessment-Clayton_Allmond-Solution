function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) { 
  const borrowedCount = books.filter(book => book.borrows[0].returned === false).length;
   return borrowedCount; 
  }


function getMostCommonGenres(books) {
const bookGenre = books.map((book) => book.genre);
 let bookArray = []; 
 let count = {}; 
 bookGenre.forEach(function(i) { count[i] = (count[i] || 0) + 1;
}); 
for (let key in count) { 
    array.push({ name: key, count: count[key], });
  } 
array.sort((a, b) => (a.count < b.count ? 1 : -1));
    return array.slice(0, 5);
  }

function getMostPopularBooks(books) {
  let booksResult = {};
  const mostPopular = books.map((book) => {
    booksResult = {name: book.title, count: book.borrows.length}
    return booksResult;
  })
  mostPopular.sort((a, b) => b.count - a.count)
  return mostPopular.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let authorsResult = [];
  const popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  popularAuthor.forEach((book) => {
    let authorName = authors.find((author) => author.id === book.authorId)
    authorsResult.push({name: `${authorName.name.first} ${authorName.name.last}`, count: book.borrows.length});
  })
  authorsResult.sort((a, b) => b.count - a.count);
  return authorsResult.slice(0,5);
  }
  



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
