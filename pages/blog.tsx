import React from 'react';
import Layout from '../nextjs/components/HomePage/Layout';
// import ContactButton from '../nextjs/components/ContactPage/ContactButton';
// import BlogAside from '../nextjs/components/Blog/BlogAside';
import BlogArticle, { BlogArticleProps } from '../nextjs/components/Blog/BlogArticle';
import fetch from 'isomorphic-unfetch';

export interface BlogProps {
  blogArticle: BlogArticleProps;
}

export default class Blog extends React.Component<BlogProps> {
  static async getInitialProps({ req }: any): Promise<BlogProps> {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  
    const blogData = await fetch(`${baseUrl}/api/blog/getpostpublic`);
    const jsonBlogData = await blogData.json();
    return {
      blogArticle: jsonBlogData,
    };
  }
  render() {
    return (
      <Layout>
        {/* <ContactButton /> */}
        <section id="content">
          <div className="container">
            <div className="row">
              {/* <BlogAside /> */}
              <BlogArticle {...this.props.blogArticle} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
