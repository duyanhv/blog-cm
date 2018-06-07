import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../nextjs/components/HomePage/Layout';
import BlogAside from '../nextjs/components/Blog/BlogAside';
import { Grid, Col, Row } from 'react-bootstrap';

export interface BlogPostProps {
    data: {
        _id: string,
        title: string,
        subtitle: string,
        content: string,
        author: string,
        imageSrc: string,
        postCreatedAt: string
    };
}

const convertStringToHtml = (content: string) => {
    return {
        __html: content
    };
};

export default class BlogPost extends Component<BlogPostProps> {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ query }) {
        const blogData = await fetch(`http://localhost:3000/api/blog/getpostbyid/${query.id}`);
        const jsonBlogData = await blogData.json();
        return {
            data: jsonBlogData
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
                                    <p dangerouslySetInnerHTML={convertStringToHtml(this.props.data.title)}></p>
                                    <p>Posted by {this.props.data.author} on {this.props.data.postCreatedAt.split('T')[0]}</p>
                                </div>

                                <Row className="blog-post-by-id-content">
                                    <Col xs={6} md={4}>
                                        <div className="blog-post-content-img">
                                            img goes here
                                        </div>
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <p dangerouslySetInnerHTML={convertStringToHtml(this.props.data.subtitle)}></p>
                                    </Col>
                                </Row>

                                <div className="blog-post-content-content">
                                    <div dangerouslySetInnerHTML={convertStringToHtml(this.props.data.content)}>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <BlogAside />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Layout>
        );
    }
}
