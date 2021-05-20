// import { BookModel } from './models/book-model';

// export const Books: BookModel[] =
// [
//   {
//     "author": {
//       name: "Chinua Achebe",
//       id: 1
//     },
//     "imageUrl": "http://static1.squarespace.com/static/59a1bc2fa803bb46c79b860c/t/5ab0922b88251bfd949c392e/1521521202817/Things+Fall+Apart+cover.jpg?format=1500w",
//     "pages": 209,
//     "title": "Things Fall Apart",
//     "year": 1958,
//     "quantity": 15
//   },
//   {
//     "author": {
//       name: "Hans Christian Andersen",
//       id: 2
//     },
//     "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6268/9781626860995.jpg",
//     "pages": 784,
//     "title": "Fairy tales",
//     "year": 1836,
//     "quantity": 0
//   },
//   {
//     "author": {
//       name: "Dante Alighieri",
//       id: 3
//     },
//     "imageUrl": "https://kbimages1-a.akamaihd.net/6d079104-b75e-4dc3-a313-3c58145703b4/1200/1200/False/the-divine-comedy-barnes-noble-collectible-editions.jpg",
//     "pages": 928,
//     "title": "The Divine Comedy",
//     "year": 1315,
//     "quantity": 55
//   },
//   {
//     "author": {
//       name: "Jane Austen",
//       id: 4
//     },
//     "imageUrl": "https://m.media-amazon.com/images/I/51tiK-eB3JL.jpg",
//     "pages": 226,
//     "title": "Pride and Prejudice",
//     "year": 1813,
//     "quantity": 3
//   },
//   {
//     "author": {
//       name: "Samuel Beckett",
//       id: 5
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/41F61GM4VZL._SX284_BO1,204,203,200_.jpg",
//     "pages": 256,
//     "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
//     "year": 1952,
//     "quantity": 13
//   },
//   {
//     "author": {
//       name: "Giovanni Boccaccio",
//       id: 6
//     },
//     "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328865921l/752711.jpg",
//     "pages": 1024,
//     "title": "The Decameron",
//     "year": 1351,
//     "quantity": 0
//   },
//   {
//     "author": {
//       name: "Jorge Luis Borges",
//       id: 7
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71iildYvQAL.jpg",
//     "pages": 224,
//     "title": "Ficciones",
//     "year": 1965,
//     "quantity": 120
//   },
//   {
//     "author":  {
//       name: "Emily Bronte",
//       id: 8
//     },
//     "imageUrl": "https://cdn.shoplightspeed.com/shops/611345/files/8231848/faber-faber-childrens-wuthering-heights.jpg",
//     "pages": 342,
//     "title": "Wuthering Heights",
//     "year": 1847,
//     "quantity": 63

//   },
//   {
//     "author": {
//       name: "Albert Camus",
//       id: 9
//     },
//     "imageUrl": "https://prodimage.images-bn.com/pimages/9789390492589_p0_v1_s550x406.jpg",
//     "pages": 185,
//     "title": "The Stranger",
//     "year": 1942,
//     "quantity": 7

//   },
//   {
//     "author": {
//       name: "Paul Celan",
//       id: 10
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/41IdMKkkjPL._SX318_BO1,204,203,200_.jpg",
//     "pages": 320,
//     "title": "Poems",
//     "year": 1952,
//     "quantity": 24

//   },
//   {
//     "author": {
//       name: "Louis-Ferdinand Celine",
//       id: 11
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51P16RmwhxL._SX258_BO1,204,203,200_.jpg",
//     "pages": 505,
//     "title": "Journey to the End of the Night",
//     "year": 1932,
//     "quantity": 2
//   },
//   {
//     "author": {
//       name: "Miguel de Cervantes",
//       id: 12
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/A1QU-FgkiEL.jpg",
//     "pages": 1056,
//     "title": "Don Quijote De La Mancha",
//     "year": 1610,
//     "quantity": 0

//   },
//   {
//     "author": {
//       name: "Geoffrey Chaucer",
//       id: 13
//     },
//     "imageUrl": "https://globalbookclub.s3.amazonaws.com/resources/3095731/the_canterbury_tales/cover.jpg",
//     "pages": 544,
//     "title": "The Canterbury Tales",
//     "year": 1450,
//     "quantity": 1

//   },
//   {
//     "author": {
//       name: "Anton Chekhov",
//       id: 14
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71dF4fTruzL.jpg",
//     "pages": 194,
//     "title": "Stories",
//     "year": 1886,
//     "quantity": 11

//   },
//   {
//     "author": {
//     name: "Joseph Conrad",
//     id: 15
//   },
//     "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Nostromo1st.jpg",
//     "pages": 320,
//     "title": "Nostromo",
//     "year": 1904,
//     "quantity": 5

//   },
//   {
//     "author": {
//       name: "Charles Dickens",
//       id: 16
//     },
//     "imageUrl": "https://images.penguinrandomhouse.com/cover/9780451531186",
//     "pages": 194,
//     "title": "Great Expectations",
//     "year": 1861,
//     "quantity": 34

//   },
//   {
//     "author": {
//       name: "Denis Diderot",
//       id: 17
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51AF4sHZqwL._SX322_BO1,204,203,200_.jpg",
//     "pages": 596,
//     "title": "Jacques the Fatalist",
//     "year": 1796,
//     "quantity": 29

//   },
//   {
//     "author":  {
//       name: "Fyodor Dostoevsky",
//       id: 18
//     },
//     "imageUrl": "https://m.media-amazon.com/images/I/41AM6pjaZhL.jpg",
//     "pages": 551,
//     "title": "Crime and Punishment",
//     "year": 1866,
//     "quantity": 4

//   },
//   {
//     "author": {
//       name: "Fyodor Dostoevsky",
//       id: 18
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51vxaBHD3GL._SX328_BO1,204,203,200_.jpg",
//     "pages": 824,
//     "title": "The Brothers Karamazov",
//     "year": 1880,
//     "quantity": 12

//   },
//   {
//     "author": {
//       name: "Johann Wolfgang von Goethe",
//       id: 19
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/714bRP1cCHL.jpg",
//     "pages": 158,
//     "title": "Faust",
//     "year": 1832,
//     "quantity": 1

//   },
//   {
//     "author": {
//       name: "Ernest Hemingway",
//       id: 20
//     },
//     "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71dUEXcxJzL.jpg",
//     "pages": 128,
//     "title": "The Old Man and the Sea",
//     "year": 1952,
//     "quantity": 0

//   },
//   {
//     "author": {
//       name: "Franz Kafka",
//       id: 21
//     },
//     "imageUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344478704l/32560.jpg",
//     "pages": 488,
//     "title": "Stories",
//     "year": 1924,
//     "quantity": 25

//   },
//   {
//     "author": {
//       name: "Giacomo Leopardi",
//       id: 22
//     },
//     "imageUrl": "https://m.media-amazon.com/images/I/51uKoiFYxgL.jpg",
//     "pages": 184,
//     "title": "Poems",
//     "year": 1818,
//     "quantity": 2

//   },
//   {
//     "author": {
//       name: "Doris Lessing",
//       id: 23
//     },
//     "imageUrl": "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0074/9780007498772.jpg",
//     "pages": 688,
//     "title": "The Golden Notebook",
//     "year": 1962,
//     "quantity": 3
//   }
// ]