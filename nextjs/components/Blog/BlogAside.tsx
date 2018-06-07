import React, { Component } from 'react';

// export interface BlogAsideProps {

// }

class BlogAside extends Component {
    render() {
        return (
            <div>
                <aside className="right-sidebar">
                    <div className="widget">
                        <form role="form">
                            <div className="form-group">
                                <input type="text" className="form-control" id="s" placeholder="Search.." />
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
                        <ul className="recent">
                            <li>
                                <img src="static/img/dummies/blog/65x65/thumb1.jpg" 
                                className="pull-left" alt="" />
                                <h6><a href="#">Lorem ipsum dolor sit</a></h6>
                                <p>
                                    Mazim alienum appellantur eu cu ullum officiis pro pri</p>
                            </li>
                            <li>
                                <a href="#"><img src="static/img/dummies/blog/65x65/thumb2.jpg" 
                                className="pull-left" alt="" /></a>
                                <h6><a href="#">Maiorum ponderum eum</a></h6>
                                <p>
                                    Mazim alienum appellantur eu cu ullum officiis pro pri</p>
                            </li>
                            <li>
                                <a href="#"><img src="static/img/dummies/blog/65x65/thumb3.jpg" 
                                className="pull-left" alt="" /></a>
                                <h6><a href="#">Et mei iusto dolorum</a></h6>
                                <p>
                                    Mazim alienum appellantur eu cu ullum officiis pro pri</p>
                            </li>
                        </ul>
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

export default BlogAside;