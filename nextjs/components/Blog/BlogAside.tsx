import React, { Component } from 'react';
import Link from 'next/link';
export interface BlogAsideProps {
    data: [{
        _id: string,
        title: string,
        imageSrc: string,
    }];
}

const LastestPostData = (data: {
    _id: string,
    title: string,
    imageSrc: string,
}) => {
    return (
        <div key={data._id}>
            <img src="/static/img/dummies/blog/65x65/thumb1.jpg"
                className="pull-left" alt="" />
            <h6>
                <Link href={`/blogpost?id=${data._id}`} as={`/blog/${data._id}`}>
                <a href="#">
                    {data.title}
                </a>
                </Link>
            </h6>
        </div>
    );
};

export default class BlogAside extends Component<BlogAsideProps> {
    render() {
        return (
            <div>
                <aside className="right-sidebar">
                    <div className="widget">
                        <form role="form">
                            <div className="form-group">
                                {/* <input type="text" className="form-control" id="s" placeholder="Search.." /> */}
                            </div>
                        </form>
                    </div>
                    <div className="widget">
                        <h5 className="widgetheading">Categories</h5>
                        <ul className="cat">
                            <li><i className="fa fa-angle-right"></i><a href="#">
                                Web design</a><span> (20)</span></li>
                            <li><i className="fa fa-angle-right"></i><a href="#">
                                Online business</a><span> (11)</span></li>
                            <li><i className="fa fa-angle-right"></i><a href="#">
                                Marketing strategy</a><span> (9)</span></li>
                            <li><i className="fa fa-angle-right"></i><a href="#">
                                Technology</a><span> (12)</span></li>
                            <li><i className="fa fa-angle-right"></i><a href="#">
                                About finance</a><span> (18)</span></li>
                        </ul>
                    </div>
                    <div className="widget">
                        <h5 className="widgetheading">Latest posts</h5>
                        <div className="recent-blog-post">
                            {this.props.data.map((data) => LastestPostData(data))}
                        </div>
                    </div>
                    <div className="widget">
                        <h5 className="widgetheading">Popular tags</h5>
                        <ul className="tags">
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Trends</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Internet</a></li>
                            <li><a href="#">Tutorial</a></li>
                            <li><a href="#">Development</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        );
    }
}
