import React from 'react';

export const Experience = () => {
  const experiences = [
    {
      company: "Ingersoll Rand",
      role: "IT Audit Intern",
      period: "Summer 2023",
      description: "Responsible for assisting in the execution of internal audits, SOX walkthroughs and testing, and special projects and other audit activities including cybersecurity under the supervision of the IT Audit team.",
      achievements: [
        "Increased workplace productivity using Power Automate to program a web scraping bot",
        "Documented, tested, & assessed auto IT controls in Oracle 11i & R12, MFG/PRO, and SAP systems on AuditBoard"
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaxqmavMdrWoPvC8KCO-4PQ5l_CFUaX22nw&s"
    }
  ]

  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="experience">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          My journey in computer science and engineering
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <div className="space-y-16">
            {experiences.map((experience, idx) => (
              <article key={idx} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 rounded-2xl  bg-cover bg-center ring-1 ring-inset ring-gray-900/10" style={{ backgroundImage: `url(${experience.image})` }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-black/10" /> 

                    {/*<div className="px-4 py-2">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">
                        {experience.company}
                      </h3>
                      <p className="text-sm text-gray-500">{experience.period}</p>
                    </div> */}
                  </div>
                </div>
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      {experience.role}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{experience.description}</p>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIdx) => (
                        <li key={achievementIdx} className="flex gap-x-3">
                          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm leading-6 text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}