import React from 'react';
import { Layout } from '../components/common';
import { Intro, Skills, Project, Contact } from '../components/landing';

export default () => (
  <Layout>
    <Intro />
    <Project />
    <Skills />
    <Contact />
  </Layout>
);
