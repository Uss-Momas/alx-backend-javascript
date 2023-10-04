export default function cleanSet(set, startString) {
  const arrayFromSet = [...set];
  const newArray = [];
  for (const element of arrayFromSet) {
    if (element.startsWith(startString)) { newArray.push(element.replace(startString, '')); }
  }
  return newArray.join('-');
}
