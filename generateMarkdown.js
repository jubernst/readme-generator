// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "CC0":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "CC0":
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This work is available under the [MIT License]${renderLicenseLink(
        license
      )}.`;
    case "Apache 2.0":
      return `This work is available under the [Apache 2.0 License]${renderLicenseLink(
        license
      )}.`;
    case "CC0":
      return `This work is available under the [Creative Commons 1.0 License]${renderLicenseLink(
        license
      )}.`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description
  
${data.description}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
  
## Installation
  
${data.installation}
  
## Usage
  
${data.usage}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## License
  
${renderLicenseSection(data.license)}
  
## Questions
  
If you have any questions, contact me directly at [${data.email}](mailto:${
    data.email
  }). You can find more of my work at my [Github](https://github.com/${
    data.github
  }/).
    `;
}

module.exports = generateMarkdown;
