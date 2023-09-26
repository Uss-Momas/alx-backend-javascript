export default function appendToEachArrayValue(array, appendString) {
  for (let x of array) {
    x = appendString + x;
  }

  return array;
}
