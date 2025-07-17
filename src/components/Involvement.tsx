import React from 'react';
import cybervtImg from '../assets/cybervt.jpg';
import girlsWhoCodeImg from '../assets/gwc.png';
import libertyImg from '../assets/libertyLogo.png';
import luCyberImg from '../assets/luCyber.png';
import summitCTFImg from '../assets/summitCTF.jpeg';
import bloombergImg from '../assets/Bloomberg_Logo.png';
import vtechImg from '../assets/vtLogo.png';
import bbergPoster from '../assets/Bloomberg_Poster.png';


export const Involvement = () => {
  const involvement = [
    {
      title: "Cybersecurity for Industry 4.0 Workshop",
      role: "Workshop Participant",
      association: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "July 14-18, 2025",
    },
    {
      title: "CyberVT",
      role: "Member",
      association: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "2024 - Current",
    },
    {
      title: "SummitCTF Competition",
      role: "Team Member: 3rd Place",
      association: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "April 12-13, 2025",
    },
    {
      title: "Bloomberg Tech Lab: Virginia Tech",
      role: "Workshop Participant",
      association: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "September 18-19, 2024",
    },
    {
      title: "Girls Who Code LU",
      role: "President/Founder",
      association: "Liberty University",
      location: "Lynchburg, VA",
      period: "2023 - 2024",
    },
    {
      title: "C++ Tutor",
      role: "Volunteer",
      association: "Liberty University",
      location: "Lynchburg, VA",
      period: "2023 - 2024",
    },
    {
      title: "Cybersecurity Club",
      role: "Member",
      association: "Liberty University",
      location: "Lynchburg, VA",
      period: "2020 - 2024",
    },
  ];

  const involvementImages: { [key: string]: string } = {
    "CyberVT": cybervtImg,
    "Girls Who Code LU": girlsWhoCodeImg,
    "C++ Tutor": libertyImg,
    "Cybersecurity Club": luCyberImg,
    "SummitCTF Competition": summitCTFImg,
    "Bloomberg Tech Lab: Virginia Tech": bloombergImg,
    "Cybersecurity for Industry 4.0 Workshop": vtechImg,
  };

  return (
    <div className="relative bg-white py-24 sm:py-32" id="involvement">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Extracurriculars
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leadership and volunteer activities
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {involvement.map((involvement, idx) => (
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{involvement.title}</h3>
                      <div className="px-4 py-2">
                        <h3 className="text-sm font-semibold leading-6 text-gray-900">
                          <em>{involvement.role}</em>
                        </h3>
                        <p className="text-sm text-gray-500">{involvement.period}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {involvement.association} | {involvement.location}
                      </p>
                    </div>
                    {involvement.title === "SummitCTF Competition" ? (
                    <a href="https://ctftime.org/event/2662/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={involvementImages[involvement.title]}
                        alt={`${involvement.title} Logo`}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                    </a>
                    ) : involvement.title === "Bloomberg Tech Lab: Virginia Tech" ? (
                      <a href={bbergPoster} target="_blank" rel="noopener noreferrer">
                        <img
                          src={involvementImages[involvement.title]}
                          alt={`${involvement.title} Logo`}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                      </a>
                    ) : (
                    <img
                      src={involvementImages[involvement.title]}
                      alt={`${involvement.title} Logo`}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  )}
                  </div>
              ))}
            </div>
          </div>
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
    </div>
  );
};