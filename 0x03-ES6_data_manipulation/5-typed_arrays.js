/**
 * length - type Number
 * position - type Number
 * value - type Number
 */
export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  int8[position] = value;
  return new DataView(buffer);
}
