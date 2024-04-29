`use strict`;

const requestURL = "https://jsonplaceholder.typicode.com/todos/";
const getNewTodos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // console.log(typeof data);
  return data; // returns a promise
};

console.log(getNewTodos(requestURL).then((data) => console.log(data)));
