const symbolSplitter = /[\s_-]/;

const exhaustedSplitter = /[\s_-]|(?=[A-Z0-9])/;

const titleCase = (word: string) =>
  `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;

export const upperCase = (word: string) => word.toUpperCase();

const createTransform =
  (
    splitter: string | RegExp,
    separator: string,
    transformWord: (word: string) => string,
  ) =>
  (text: string) =>
    text.split(splitter).map(transformWord).join(separator);

export const toLowerCase = createTransform(symbolSplitter, ' ', (w) =>
  w.toLowerCase(),
);

export const toTitleCase = createTransform(symbolSplitter, ' ', titleCase);

export const toKebabCase = createTransform(exhaustedSplitter, '-', (w) =>
  w.toLowerCase(),
);
