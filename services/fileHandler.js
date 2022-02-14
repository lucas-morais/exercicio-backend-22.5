const fs = require('fs/promises');

const readFile = async (filename) => {
  try {
    const content = await fs.readFile(filename, 'utf-8');
    return JSON.parse(content)
  } catch(e) {
    console.error(e.message);
  }
}

const writeFile = async (filename, content) => {
  try {
    await fs.writeFile(filename, JSON.stringify(content, null, '\t'));
  } catch(e) {
    console.error(e.message);
  }
}

module.exports = { readFile, writeFile }