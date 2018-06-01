import React from 'react';
import { ProgressBar } from 'react-bootstrap';
// export interface AboutProps {

// }

class About extends React.Component {
    render() {
        return (
            <section id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <h4>About our company</h4>
                                    <p><strong>Meliore inciderint qui ne. Suas cotidieque vel
                                        ut lobortis reformidans duo</strong></p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repudiandae odit iste exercitationem praesentium deleniti nostrum laborum rem
                                        id nihil tempora. Adipisci ea commodi unde nam placeat cupiditate quasi a
                                        ducimus rem consequuntur ex eligendi minima
                                        voluptatem assumenda voluptas quidem sit maiores odio velit voluptate</p>
                                    <p>
                                        Mel explicari adipiscing consectetuer no, no mel apeirian
                                        scripserit repudiandae, ad assum mundi scribentur eam.
                                        Graecis offendit phaedrum eu his, eius ferri quidam eos ad,
                                        quis delenit vel ei. Alia modus facete te eos, eu tation appellantur per</p>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <h4>Projects</h4>
                                    <div className="progress">
                                        <ProgressBar active bsStyle="success"
                                            now={40} label={`40% Complete (success)`} />
                                    </div>
                                    <div className="progress">
                                        <ProgressBar active bsStyle="info" now={20} label={`20% Complete`} />
                                    </div>
                                    <div className="progress">
                                        <ProgressBar active bsStyle="warning"
                                            now={60} label={`60% Complete (warning)`} />
                                    </div>
                                    <div className="progress">
                                        <ProgressBar active bsStyle="danger" now={80} label={`80% Complete`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* divider */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blankline">
                            </div>
                        </div>
                    </div>
                </div>
                {/* end divider */}
            </section>
        );
    }
}

export default About;