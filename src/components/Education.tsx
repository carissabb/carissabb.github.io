import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import virginiaTechImage from '../assets/virginiaTech.jpg'; 
import libertyImage from '../assets/liberty.jpg'; 

export const Education = () => {
  const education = [
    {
      school: "Virginia Tech",
      degree: "Master of Engineering in Computer Science & Applications",
      period: "2024 - 2025",
      description: "Focus in Artificial Intelligence and Data Analytics",
      achievements: [
        "GPA: 3.8",
        "Machine Learning (Scikit-learn, TensorFlow, PyTorch)",
        "Deep Learning (CNNs, RNNs)",
        "Agile Software Development",
      ],
      image: virginiaTechImage
    },
    {
      school: "Liberty University",
      degree: "Bachelor of Science in Computer Science: Cyber Security",
      period: "2020 - 2024",
      description: "Minor in Business",
      achievements: [
        "GPA: 3.74 | Magna Cum Laude",
        "Dean's List 2020 - 2024",
        "National Society of Collegiate Scholars",
        "Alpha Lambda Delta",
        "National Society of Leadership & Success"
      ],
      image: libertyImage
    }
  ];

  return (
    <div className="relative bg-white py-24 sm:py-32" id="education">
      {/* Background Gradient - Top */}
      <Parallax speed={-20}>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </Parallax>

      {/* Content */}
      <Parallax speed={-10}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Education</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Academic background and achievements
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
              {education.map((edu, idx) => (
                <Parallax key={idx} speed={5}>
                  <article className="relative isolate flex flex-col gap-8 lg:flex-row bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow min-h-[300px] lg:min-h-[400px]">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <div
                        className="absolute inset-0 rounded-2xl bg-cover bg-center ring-1 ring-inset ring-gray-900/10"
                        style={{ backgroundImage: `url(${edu.image})` }}
                      />
                      <div className="absolute inset-0 rounded-2xl bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-4 py-2 text-center">
                          <h3 className="text-lg font-semibold leading-6 text-white">{edu.school}</h3>
                          <p className="text-sm text-gray-200">{edu.period}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">{edu.degree}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">{edu.description}</p>
                      </div>
                      <div className="mt-6">
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIdx) => (
                            <li key={achievementIdx} className="flex gap-x-3">
                              <svg
                                className="h-6 w-5 flex-none text-indigo-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm leading-6 text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Parallax>
              ))}
            </div>
          </div>
        </div>
      </Parallax>

      {/* Background Gradient - Bottom */}
      <Parallax speed={10}>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </Parallax>
    </div>
  );
};