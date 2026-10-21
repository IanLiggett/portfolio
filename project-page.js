const projectId = new URLSearchParams(window.location.search).get("project");
const projectTemplate = document.getElementById(projectId);
const projectPage = document.getElementById("project-page");

if (projectTemplate instanceof HTMLTemplateElement && projectPage) {
  const projectContent = projectTemplate.content.cloneNode(true);
  const projectName = projectContent.querySelector("h1")?.textContent;

  if (projectName) {
    document.title = `${projectName} | Ian Liggett`;
  }

  projectPage.appendChild(projectContent);
} else if (projectPage) {
  projectPage.innerHTML = '<section class="project-hero"><p class="eyebrow">Project not found</p><h1>Choose a project</h1><a class="button-link" href="index.html#projects">Return to all projects</a></section>';
}
