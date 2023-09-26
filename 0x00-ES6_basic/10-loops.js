export default function appendToEachArrayValue(array, appendString) {
  for (const [i, x] of array.entries()) {
    array[i] = appendString + x;
  }

  return array;
}
