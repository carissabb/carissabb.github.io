import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "Developed an intelligent code review system using machine learning to automatically analyze code quality, identify potential bugs, and suggest improvements. Integrated with GitHub's API for seamless workflow integration.",
      technologies: ["Python", "TensorFlow", "Natural Language Processing", "GitHub API"],
      link: "#"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "Built a full-stack web application enabling real-time collaboration for software development teams. Features include live code editing, instant messaging, and project management tools.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
      link: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Created a data visualization dashboard for analyzing and predicting research trends using machine learning algorithms. Implemented interactive charts and customizable reports.",
      technologies: ["Python", "scikit-learn", "D3.js", "Flask", "MongoDB"],
      link: "#"
    }
  ]

  return (
    <div className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article key={idx} className="flex flex-col items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-x-4 text-xs w-full">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="group relative mt-6">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                  <a href={project.link}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  View Project <span aria-hidden="true" className="ml-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}