import ArrayBufferConverter, { getBuffer } from '../js/task';

describe('ArrayBufferConverter', () => {
  test('should correctly convert buffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should throw error if no buffer loaded before toString', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrow('No buffer loaded');
  });

  test('should throw error on invalid input for load()', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.load('not a buffer')).toThrow('Input must be an instance of ArrayBuffer');
  });

  test('getBuffer should return an ArrayBuffer', () => {
    const buffer = getBuffer();
    expect(buffer).toBeInstanceOf(ArrayBuffer);
  });
});
