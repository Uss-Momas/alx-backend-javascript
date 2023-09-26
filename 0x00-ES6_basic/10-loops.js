export default function appendToEachArrayValue(array, appendString) {
  const newAr = [];
  for (const x of array) {
    newAr.push(appendString + x);
  }

  return newAr;
}
