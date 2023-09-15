function generateList(array) {
  let result = "<ul>";

  for (let item of array) {
    result += "\n    <li>";
    if (Array.isArray(item)) {
      result += generateList(item);
    } else {
      result += item;
    }
    result += "</li>";
  }

  result += "\n</ul>";
  return result;
}

const inputArray = [1, 2, 3, [1.1, 1.2, 1.3], 4];
const htmlList = generateList(inputArray);

console.log(htmlList);
