import React from 'react';
import cppImg from '../assets/cpp.svg';
import pythonImg from '../assets/python.svg';
import jsImg from '../assets/javascript.svg';
import javaImg from '../assets/java.svg';
import unityImg from '../assets/unity.svg';
import cSharpImg from '../assets/csharp.svg';
import githubImg from '../assets/github.svg';
import jupyterImg from '../assets/jupyter.svg';
import kotlinImg from '../assets/kotlin.svg';
import xmlImg from '../assets/xml.svg';
import androidStudioImg from '../assets/android-studio.svg';
import dockerImg from '../assets/docker.svg';
import eclipseImg from '../assets/eclipse.svg';


export const Projects = () => {
  const projects = [
    {
      title: "Immersive VR Privacy & Security Awareness Experience",
      description: "Developed policy-guided VR rooms using C# in Unity to conduct research on user awareness of data collection.",
      technologies: ["C#", "Unity", "GitHub"],
      link: "https://github.com/carissabb/Immersive-VR-Privacy-Security"
    },
    {
      title: "Obesity Prediction and Recommendation Model",
      description: "Utilized Random Forest Classification to provide personalized fitness and nutritional recommendations to users.",
      technologies: ["Python", "Jupyter Notebook", "GitHub"],
      link: "https://github.com/carissabb/ML-Final-Project.git"
    },
    {
      title: "Transit App",
      description: "Developed a bus tracking mobile app in Kotlin integrating Blacksburg Transit’s API, following Agile methodologies.",
      technologies: ["Kotlin", "XML", "Android Studio", "GitHub"],
      link: "https://github.com/carissabb/BTApp"
    },
    {
      title: "Bloomberg Tech Lab: Virginia Tech",
      description: "Collaborated with Bloomberg engineers to build an open-source portfolio manager in Jupyter Notebooks. Enhanced programming and critical thinking skills while receiving valuable mentorship from industry experts.",
      technologies: ["Python", "Jupyter Notebook", "Docker"],
      link: "#"
    },
    {
      title: "Minecraft Mod",
      description: "Created a new ore using Java with full functionality for crafting tools and armor.",
      technologies: ["Java", "Eclipse"],
      link: "#"
    }
  ]


  const skillImages: { [key: string]: string } = {
    "C++": cppImg,
    "Python": pythonImg,
    "JavaScript": jsImg,
    "Java": javaImg,
    "Unity": unityImg,
    "C#": cSharpImg,
    "GitHub": githubImg,
    "Jupyter Notebook": jupyterImg,
    "Kotlin": kotlinImg,
    "XML": xmlImg,
    "Android Studio": androidStudioImg,
    "Docker": dockerImg,
    "Eclipse": eclipseImg,
  };
  

  return (
    <div className="bg-white py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-2">Featured Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article key={idx} className="flex flex-col items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center gap-x-4 text-xs w-full">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="relative inline-flex items-center justify-center w-10 h-10">
                      {skillImages[tech] && (
                        <>
                          <div className="absolute bottom-0 w-6 h-1 rounded-full bg-black/50 blur-sm opacity-50"></div>
                          <img
                            src={skillImages[tech]}
                            alt={tech}
                            className="relative w-7 h-9"
                          />
                        </>
                      )}
                    </span>

                  ))}
                </div>
              </div>
              <div className="group relative mt-3">
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