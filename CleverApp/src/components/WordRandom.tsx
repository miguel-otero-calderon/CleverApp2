const words = ['manzana', 'banana', 'pera', 'naranja', 'uva', 'kiwi'];

export const WordRandom = () => {
  const indexWord = Math.floor(Math.random() * words.length);
  return words[indexWord];
};
