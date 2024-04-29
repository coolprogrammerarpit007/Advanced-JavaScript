`use strict`;

const getSomething = () => {
  // creating a promise
  const promise = new Promise((resolve, reject) => {
    // fetch something data
    resolve(`Some data is fetched!`);
    reject(`Some Network error!`);
  });

  return promise;
};

// consuming promise

// getSomething()
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log(error);
//   });

const url = "https://jsonplaceholder.typicode.com/todos/";
// const newTodos = (resource) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(`GET`, resource);
//     xhr.send();

//     xhr.addEventListener(`readystatechange`, () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         resolve(data);
//       } else if (xhr.readyState === 4) {
//         reject(`404 Error`);
//       }
//     });
//   });
//   return promise;
// };

// newTodos(url)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// chaining promises
const newTodos = (resource) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, resource);
    xhr.send();

    xhr.addEventListener(`readystatechange`, () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data);
      } else if (xhr.readyState === 4) {
        reject(`404 Error`);
      }
    });
  });
  return promise;
};

// newTodos(`./todos/one.json`)
//   .then((data) => {
//     console.log(data);
//     return newTodos(`./todos/two.json`);
//   })
//   .then((data) => {
//     console.log(`Promise 2 resolved`, data);
//     return newTodos(`./todos/three.json`);
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
