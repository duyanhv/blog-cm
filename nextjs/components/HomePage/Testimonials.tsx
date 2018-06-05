import React from 'react';

// export interface TestimonialsProps {

// }

class Testimonials extends React.Component {
    render() {
        return (
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <h4>Testimonials</h4>
                                    <div className="testimonialslide clearfix flexslider">
                                        <ul className="slides">
                                            <li>
                                                <blockquote>
                                                    Usu ei porro deleniti similique,
                                                     per no consetetur necessitatibus. 
                                                     Ut sed augue docendi alienum, ex oblique scaevola
                                                      inciderint pri, unum movet cu cum. Et cum impedit epicuri</blockquote>
                                                <h4>Daniel Dan <span>&#8213; MA System</span></h4>
                                            </li>
                                            <li>
                                                <blockquote>
                                                    Usu ei porro deleniti similique, 
                                                    per no consetetur necessitatibus. 
                                                    Ut sed augue docendi alienum,
                                                     ex oblique scaevola inciderint pri,
                                                      unum movet cu cum. Et cum impedit epicuri </blockquote>
                                                <h4>Mark Wellbeck <span>&#8213; AC Software </span></h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#one" data-toggle="tab"><i className="icon-briefcase"></i> One</a></li>
                                        <li><a href="#two" data-toggle="tab">Two</a></li>
                                        <li><a href="#three" data-toggle="tab">Three</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="one">
                                            <p><img src="static/img/dummy1.jpg" className="pull-left" alt="" />
                                                <strong>Augue iriure</strong> dolorum per ex,
                                                 ne iisque ornatus veritus duo. Ex nobis integre l
                                                 ucilius sit, pri ea falli ludus appareat. Eum quods
                                                 i fuisset id, nostro patrioque qui id. Nominati eloquentiam in mea.</p>
                                            <p>
                                                No eum sanctus vituperata reformidans, 
                                                dicant abhorreant ut pro. Duo id enim iisque praesent, 
                                                amet intellegat per et, solet referrentur eum et.</p>
                                        </div>
                                        <div className="tab-pane" id="two">
                                            <p><img src="static/img/dummy1.jpg" 
                                            className="pull-right" alt="" /> Tale 
                                            dolor mea ex, te enim assum suscipit cum, vix 
                                            aliquid omittantur in. Duo eu cibo dolorum menandri
                                            , nam sumo dicit admodum ei. Ne mazim commune honest
                                            atis cum, mentitum phaedrum sit
                                                et.</p>
                                            <p>Lorem ipsum dolor sit amet
                                                , vel laoreet pertinacia at, nam
                                                 ea ornatus ocurreret gubergren. Per facete graecis eu.</p>
                                        </div>
                                        <div className="tab-pane" id="three">
                                            <p>Lorem ipsum dolor sit amet, vel laoreet 
                                                pertinacia at, nam ea ornatus ocurreret gubergren. Per facete graecis eu. </p>
                                            <p>
                                                Cu cum commodo regione definiebas. C
                                                um ea eros laboramus, audire deseruisse his at, mune
                                                re aeterno ut quo. Et ius doming causae philosophia, vi
                                                tae bonorum intellegat usu cu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="solidline">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Testimonials;