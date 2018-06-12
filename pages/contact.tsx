import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
// import ContactButton from '../nextjs/components/ContactPage/ContactButton';
import ContactForm from '../nextjs/components/ContactPage/ContactForm';
import Map from '../nextjs/components/ContactPage/Map';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        {/* <ContactButton /> */}
        <Map />
        <ContactForm />
      </Layout>
    );
  }
}
