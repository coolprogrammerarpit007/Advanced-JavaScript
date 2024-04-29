`use strict`;

// console.log(`one`);
// console.log(`two`);
// console.log(`three`);
// setTimeout(() => {
//   console.log(`Taking Some Time To print!`);
// }, "5000");
// console.log(`four`);
// console.log(`five`);

// Making http obj

const getTodos = (resource, callback) => {
  const requestURL = "https://jsonplaceholder.typicode.com/todos/";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", resource); // set up the request
  xhr.send(); // send the request
  xhr.addEventListener(`readystatechange`, () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.responseText);
      callback(obj, undefined);
    } else if (xhr.readyState === 4) {
      callback(undefined, `could not fetch data!`);
    }
  });
};

// getTodos("./todos/one.json", (data, error) => {
//   console.log(`callback is fired 1`);
//   console.log(data, error);
//   getTodos("./todos/two.json", (data, error) => {
//     console.log(`callback is fired 2`);
//     console.log(data, error);
//     getTodos("./todos/three.json", (data, error) => {
//       console.log(`callback is fired 3`);
//       console.log(data, error);
//     });
//   });
// });
