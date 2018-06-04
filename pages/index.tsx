import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
import Slider from '../nextjs/components/HomePage/Slider';
// import Promo from '../nextjs/components/HomePage/Promo';
import Technology from '../nextjs/components/HomePage/Technology';
import About from '../nextjs/components/HomePage/About';
import AboutStats from '../nextjs/components/HomePage/AboutStats';
import Testimonials from '../nextjs/components/HomePage/Testimonials';
import Projects from '../nextjs/components/HomePage/Projects';
import Clients from '../nextjs/components/HomePage/Clients';
import TeacherImage from '../nextjs/components/HomePage/TeacherImage';
import News from '../nextjs/components/HomePage/News';
import SignUpForTesting from '../nextjs/components/HomePage/SignUpForTesting';
// interface HomeProps {

// }

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Slider />
        {/* <Promo /> */}
        <Technology />
        <News />
        <TeacherImage />
        <About />
        <SignUpForTesting />
        <AboutStats />
        <Testimonials />
        <Projects />
        <Clients />
      </Layout>
    );
  }
}

export default Home;