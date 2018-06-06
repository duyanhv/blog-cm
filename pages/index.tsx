import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
import Slider from '../nextjs/components/HomePage/Slider';
import Technology from '../nextjs/components/HomePage/Technology';
import About from '../nextjs/components/HomePage/About';
import AboutStats from '../nextjs/components/HomePage/AboutStats';
import Testimonials from '../nextjs/components/HomePage/Testimonials';
import Projects from '../nextjs/components/HomePage/Projects';
import Clients from '../nextjs/components/HomePage/Clients';
import TeacherImage from '../nextjs/components/HomePage/TeacherImage';
import News from '../nextjs/components/HomePage/News';

export interface HomeProps {}

class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Layout>
        <Slider />
        <Technology />
        <News />
        <TeacherImage />
        <About />
        <AboutStats />
        <Testimonials />
        <Projects />
        <Clients />
      </Layout>
    );
  }
}

export default Home;
