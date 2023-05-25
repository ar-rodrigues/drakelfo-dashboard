const fs = require('fs');

async function updateJsonFile(filePath, newContent = {}) {
  try {
    // Read the current JSON data from the file
    const currentJsonString = await fs.promises.readFile(filePath, 'utf-8');

    // Parse the JSON data into a JavaScript object
    let currentJson;
    try {
      currentJson = JSON.parse(currentJsonString);
    } catch (err) {
      console.error(`Error parsing JSON data in ${filePath}:`, err);
      return;
    }

    // Update the JavaScript object with the new content
    const updatedJson = { ...currentJson, ...newContent };

    // Convert the updated object back to a JSON string
    const updatedJsonString = JSON.stringify(updatedJson, null, 2);

    // Write the updated JSON data back to the file
    await fs.promises.writeFile(filePath, updatedJsonString, 'utf-8');

    // Wait for the file to be fully written before continuing
    fs.fsyncSync(fs.openSync(filePath, 'r+'));

    console.log(`${filePath} updated successfully`);
  } catch (err) {
    console.error(`Error updating ${filePath}:`, err);
  }
}

module.exports = updateJsonFile;
