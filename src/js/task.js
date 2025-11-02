export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }
  return buffer;
}

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Input must be an instance of ArrayBuffer');
    }
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      throw new Error('No buffer loaded');
    }
    const view = new Uint16Array(this.buffer);
    return String.fromCharCode(...view);
  }
}
