// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ## Table of contents

  - [Description](#description)
  - [Installation](#installation)
  - [Questions](#questions)

  ## Description <a name="description"></a>

  ${data.description}

  ## Installation <a name="installation"></a>

  ${data.installation}

  ## Contributing

  ${data.contributors}
  
  ## Tests

  ${data.tests}

  ## Questions <a name="questions"></a>
  
  If you have additional questions please contact ${data.user_name} at ${data.email}.

`;
}

export default generateMarkdown;
