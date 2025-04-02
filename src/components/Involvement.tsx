import React from 'react';
import cybervtImg from '../assets/cybervt.jpg';
import girlsWhoCodeImg from '../assets/gwc.png';
import libertyImg from '../assets/libertyLogo.png';
import luCyberImg from '../assets/luCyber.png';

export const Involvement = () => {
  const involvement = [
    {
        title: "CyberVT",
        role: "Member",
        association: "Virginia Tech",
        location: "Blacksburg, VA", 
        period: "2024 - Current"
    },
    {
        title: "Girls Who Code LU",
        role: "President/Founder",
        association: "Liberty Univeristy",
        location: "Lynchburg, VA", 
        period: "2023 - 2024"
    },
    {
        title: "C++ Tutor",
        role: "Volunteer",
        association: "Liberty Univeristy",
        location: "Lynchburg, VA",
        period: "2023 - 2024"
    },
    {
        title: "Cybersecurity Club",
        role: "Member",
        association: "Liberty Univeristy",
        location: "Lynchburg, VA",
        period: "2020 - 2024"
    }
  ]

  const involvementImages: { [key: string]: string } = {
    "CyberVT": cybervtImg,
    "Girls Who Code LU": girlsWhoCodeImg,
    "C++ Tutor": libertyImg,
    "Cybersecurity Club": luCyberImg,
  };



  return (
    <div className="bg-white py-24 sm:py-32" id="involvement">   

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Extracurriculars</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leadership and volunteer activities
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {involvement.map((involvement, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center justify-between">
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
                <img
                  src={involvementImages[involvement.title]}
                  alt={`${involvement.title} Logo`}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}