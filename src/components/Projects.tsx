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
import poster from '../assets/DLposter.pdf';

export const Projects = () => {
  const projects = [
    {
      title: "Personalized Linguistic Embeddings for Predicting SMS Authorship and Personality Traits",
      description: "Used NLP embedding to analyze user text messages for uniqueness to identify distinct linguistic patterns and predict Big Five personality traits.",
      technologies: [],
      link: poster
    },
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
  ];

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
    <div className="relative bg-white py-24 sm:py-32" id="projects">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-2">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A selection of projects that showcase my technical skills and problem-solving abilities
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, idx) => (
                <article
                  className="flex flex-col items-start bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 min-h-[200px] lg:min-h-[300px]"
                >
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
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0" />
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                    <a
                      href={project.link}
                      target="_blank" rel="noopener noreferrer"
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
  );
};