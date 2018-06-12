import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../nextjs/components/HomePage/Layout';
import { Grid, Col, Row } from 'react-bootstrap';
import BlogAside, { BlogAsideProps } from '../nextjs/components/Blog/BlogAside';

export interface BlogPostProps {
  data: {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    author: string;
    imageSrc: string;
    postCreatedAt: string;
  };

  blogAside: BlogAsideProps;
}

const convertStringToHtml = (content: string) => {
  return {
    __html: content
  };
};

export default class BlogPost extends Component<BlogPostProps> {
  constructor(props: any) {
    super(props);
  }

  static async getInitialProps({ req, query }: any) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';

    const blogData = await fetch(`${baseUrl}/api/blog/getpostbyid/${query.id}`);
    const jsonBlogData = await blogData.json();

    const lastestBlogPostData = await fetch(
      `${baseUrl}/api/blog/getlastestpost`
    );
    const jsonLastestBlogPostData = await lastestBlogPostData.json();
    return {
      data: jsonBlogData,
      blogAside: jsonLastestBlogPostData
    };
  }

  render() {
    return (
      <Layout>
        {/* <div className="blog-post-header">
                    <div className="blog-post-header-content">
                        <p>{this.props.data.title}</p>
                        <p>{this.props.data.subtitle}</p>
                        <p>Posted by {this.props.data.author} on {this.props.data.postCreatedAt.split('T')[0]}</p>
                    </div>
                </div>
                <div className="blog-post-by-id-content">
                    <div className="container">
                        <div dangerouslySetInnerHTML={convertStringToHtml(this.props.data.content)}>
                        </div>
                    </div>
                </div> */}

        <div className="container blog-post-wrapper">
          <Grid>
            <Row>
              <Col className="blog-post-content-wrapper" xs={12} md={8}>
                <div className="blog-post-header-content">
                  <p
                    dangerouslySetInnerHTML={convertStringToHtml(
                      this.props.data.title
                    )}
                  />
                  <p>
                    Posted by {this.props.data.author} on{' '}
                    {this.props.data.postCreatedAt.split('T')[0]}
                  </p>
                </div>

                <Row className="blog-post-by-id-content">
                  <Col xs={6} md={4}>
                    <div className="blog-post-content-img" />
                  </Col>
                  <Col xs={12} md={8}>
                    <p
                      dangerouslySetInnerHTML={convertStringToHtml(
                        this.props.data.subtitle
                      )}
                    />
                  </Col>
                </Row>

                <div className="blog-post-content-content">
                  <div
                    dangerouslySetInnerHTML={convertStringToHtml(
                      this.props.data.content
                    )}
                  />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <BlogAside {...this.props.blogAside} />
              </Col>
            </Row>
          </Grid>
        </div>
      </Layout>
    );
  }
}
