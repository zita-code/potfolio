function toggleSection(section) {
    const sectionContent = document.getElementById(section + 'Dropdown');
    const button = document.querySelector('#' + section + 'Section .section-btn');
  
    if (sectionContent.style.display === "block") {
      sectionContent.style.display = "none";
      button.style.backgroundColor = "#4CAF50"; // Reset to original color
    } else {
      sectionContent.style.display = "block";
      button.style.backgroundColor = "#45a049"; // Change color when expanded
    }
  }
  
  function showProject(projectName) {
    const projectDetails = document.getElementById("projectDetails");
    projectDetails.style.display = "block";
    projectDetails.innerHTML = `<h2>${projectName}</h2><p>Details about ${projectName} will go here.</p>`;
  }
  