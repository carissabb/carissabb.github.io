import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Involvement } from './components/Involvement';
import { Contact } from './components/Contact';

export const App = () => {
  return (
    <ParallaxProvider>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Involvement />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p>© 2025 Carissa Bostian. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </ParallaxProvider>
  )
}