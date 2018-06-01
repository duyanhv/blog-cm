import React, { Component } from 'react';

// export interface BlogArticleProps {

// }

class BlogArticle extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <article>
                    <div className="post-image">
                        <div className="post-heading">
                            <h3><a href="#">This is an example of standard post format</a></h3>
                        </div>
                        <img src="static/img/dummies/blog/img1.jpg" alt="" className="img-responsive" />
                    </div>
                    <p>
                        Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei. Fierent adipisci iracundia est ei, usu timeam persius
                        ea. Usu ea justo malis, pri quando everti electram ei, ex homero omittam salutatus sed.
							</p>
                    <div className="bottom-article">
                        <ul className="meta-post">
                            <li><i className="fa fa-calendar"></i><a href="#"> Mar 27, 2014</a></li>
                            <li><i className="fa fa-user"></i><a href="#"> Admin</a></li>
                            <li><i className="fa fa-folder-open"></i><a href="#"> Blog</a></li>
                            <li><i className="fa fa-comments"></i><a href="#">4 Comments</a></li>
                        </ul>
                        <a href="#" className="readmore pull-right">Continue reading <i className="fa fa-angle-right"></i></a>
                    </div>
                </article>

                <article>
                    <div className="post-slider">
                        <div className="post-heading">
                            <h3><a href="#">This is an example of slider post format</a></h3>
                        </div>
                        <div id="post-slider" className="postslider flexslider">
                            <ul className="slides">
                                <li>
                                    <img src="static/img/dummies/blog/img1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="static/img/dummies/blog/img2.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="static/img/dummies/blog/img3.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei. Fierent adipisci iracundia est ei, usu timeam persius
                        ea. Usu ea justo malis, pri quando everti electram ei, ex homero omittam salutatus sed.
							</p>
                    <div className="bottom-article">
                        <ul className="meta-post">
                            <li><i className="fa fa-calendar"></i><a href="#"> May 17, 2014</a></li>
                            <li><i className="fa fa-user"></i><a href="#"> Admin</a></li>
                            <li><i className="fa fa-folder-open"></i><a href="#"> Blog</a></li>
                            <li><i className="fa fa-comments"></i><a href="#">4 Comments</a></li>
                        </ul>
                        <a href="#" className="readmore pull-right">Continue reading <i className="fa fa-angle-right"></i></a>
                    </div>
                </article>
                <article>
                    <div className="post-quote">
                        <div className="post-heading">
                            <h3><a href="#">Nice example of quote post format below</a></h3>
                        </div>
                        <blockquote>
                            <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, ei quod constituto qui. Summo labores expetendis ad quo, lorem luptatum et vis. No qui vidisse signiferumque...
								</blockquote>
                    </div>
                    <div className="bottom-article">
                        <ul className="meta-post">
                            <li><i className="fa fa-calendar"></i><a href="#"> May 17, 2014</a></li>
                            <li><i className="fa fa-user"></i><a href="#"> Admin</a></li>
                            <li><i className="fa fa-folder-open"></i><a href="#"> Blog</a></li>
                            <li><i className="fa fa-comments"></i><a href="#">4 Comments</a></li>
                        </ul>
                        <a href="#" className="readmore pull-right">Continue reading <i className="fa fa-angle-right"></i></a>
                    </div>
                </article>
                <article>
                    <div className="post-video">
                        <div className="post-heading">
                            <h3><a href="#">Amazing video post format here</a></h3>
                        </div>
                        <div className="video-container">
                            <iframe src="http://player.vimeo.com/video/30585464?title=0&amp;byline=0">
                            </iframe>
                        </div>
                    </div>
                    <p>
                        Qui ut ceteros comprehensam. Cu eos sale sanctus eligendi, id ius elitr saperet, ocurreret pertinacia pri an. No mei nibh consectetuer, semper laoreet perfecto ad qui, est rebum nulla argumentum ei. Fierent adipisci iracundia est ei, usu timeam persius
                        ea. Usu ea justo malis, pri quando everti electram ei.
							</p>
                    <div className="bottom-article">
                        <ul className="meta-post">
                            <li><i className="fa fa-calendar"></i><a href="#"> May 17, 2014</a></li>
                            <li><i className="fa fa-user"></i><a href="#"> Admin</a></li>
                            <li><i className="fa fa-folder-open"></i><a href="#"> Blog</a></li>
                            <li><i className="fa fa-comments"></i><a href="#">4 Comments</a></li>
                        </ul>
                        <a href="#" className="readmore pull-right">Continue reading <i className="fa fa-angle-right"></i></a>
                    </div>
                </article>
                <div id="pagination">
                    <span className="all">Page 1 of 3</span>
                    <span className="current">1</span>
                    <a href="#" className="inactive">2</a>
                    <a href="#" className="inactive">3</a>
                </div>
            </div>
        );
    }
}
export default BlogArticle;