import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript", "TypeScript", "React", "HTML/CSS", "Kotlin", "C", "C#", "Assembly", "Java", "Bash", "XML", "JSON"]
    },
    {
      title: "Development Environments",
      skills: ["VSCode", "Visual Studio", "Eclipse", "Jupyter Notebooks", "Android Studio","Unity", "Microsoft SQL Server", "MySQL"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["VMware Workstation", "GitHub", "Wireshark", "Docker",  "PowerShell", "Linux", "Windows"]
    }
  ]

  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="skills">
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
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
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
    </div>
  )
}

