import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript", "TypeScript", "React", "HTML/CSS", "Kotlin", "C", "C#", "SQL", "Assembly", "Java", "Bash", "XML"]
    },
    {
      title: "Development Environments",
      skills: ["VSCode", "Visual Studio", "Eclipse", "Jupyter Notebooks", "Android Studio", "Unity", "Microsoft SQL Server", "MySQL", "Figma"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["VMware Workstation", "GitHub", "Wireshark", "Docker", "PowerShell", "Linux", "Windows", "AWS"]
    }
  ];

  return (
    <div className="relative bg-gray-50 py-24 sm:py-32" id="skills">
      {/* Background Gradient - Top */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      {/* Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Technical expertise and professional competencies
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, idx) => (
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-start h-[200px]">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="flex flex-col items-center rounded-md bg-gradient-to-r from-indigo-50 to-purple-50 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

      {/* Background Gradient - Bottom */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    </div>
  );
};

