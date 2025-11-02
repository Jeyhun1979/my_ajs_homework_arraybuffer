import ArrayBufferConverter, { getBuffer } from './js/task';

const converter = new ArrayBufferConverter();
const buffer = getBuffer();
converter.load(buffer);
console.log(converter.toString());
