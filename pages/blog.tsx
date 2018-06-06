import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
import ContactButton from '../nextjs/components/ContactPage/ContactButton';
import BlogAside from '../nextjs/components/Blog/BlogAside';
import BlogArticle, { BlogArticleProps } from '../nextjs/components/Blog/BlogArticle';
import fetch from 'isomorphic-unfetch';

export interface BlogProps {
  blogArticle: BlogArticleProps;
}

class Blog extends React.Component<BlogProps> {
  static async getInitialProps(): Promise<BlogProps> {
    const blogData = await fetch('http://localhost:3000/api/blog/getpostpublic');
    const jsonBlogData = await blogData.json();
    return {
      blogArticle: jsonBlogData,
    };
  }
  render() {
    return (
      <Layout>
        <ContactButton />

        <section id="content">
          <div className="container">
            <div className="row">
              <BlogAside />
              <BlogArticle {...this.props.blogArticle} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Blog;
