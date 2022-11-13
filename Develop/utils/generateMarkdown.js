function renderLicense(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

    default: return ''
 }
}

function generateMarkdown(data) {
  return `${renderLicense(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This code base is covered under the ${data.license} license. For more information click: ${renderLicense(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[GitHub](https://github.com/${data.githubUsername})
Contact me using my email (${data.email}) if you have questions.

`;
}

module.exports = generateMarkdown;
