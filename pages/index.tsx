import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
import Slider from '../nextjs/components/HomePage/Slider';
import Technology from '../nextjs/components/HomePage/Technology';
import News from '../nextjs/components/HomePage/News';
import TeacherImage from '../nextjs/components/HomePage/TeacherImage';
import About from '../nextjs/components/HomePage/About';
import SignUpForTesting from '../nextjs/components/HomePage/SignUpForTesting';

export interface HomeProps {}

export default class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Layout>
        <Slider />
        <Technology />
        <News />
        <TeacherImage />
        <About />
        {/* <SignUpForTesting /> */}
        {/* <AboutStats />
        <Testimonials />
        <Projects />
        <Clients /> */}
      </Layout>
    );
  }
}
