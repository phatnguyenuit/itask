module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (message) => message.includes('Initialize project using Create React App'),
  ],
};
