import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
import ContactButton from '../nextjs/components/ContactPage/ContactButton';
import BlogAside from '../nextjs/components/Blog/BlogAside';
import BlogArticle from '../nextjs/components/Blog/BlogArticle';

class Blog extends React.Component<any, an> {
  render() {
    return (
      <Layout>
        <ContactButton />
        <section id="content">
          <div className="container">
            <div className="row">
              <BlogAside />
              <BlogArticle />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Blog;
