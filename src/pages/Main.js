import React from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Home from '../components/common/Home';
import About from '../components/common/About';
import Skills from '../components/common/Skills';
import Projects from '../components/common/Projects';

function Main() {
  return (
    <DefaultLayout>
      <Home />
      <About />
      <Skills />
      <Projects />
    </DefaultLayout>
  );
}

export default Main;
