export default function appendToEachArrayValue(array, appendString) {
  const newAr = [];
  for (let x of array) {
    newAr.push(appendString + x);
  }

  return newAr;
}
