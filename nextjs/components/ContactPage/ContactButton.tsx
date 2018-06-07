import React from 'react';

// export interface ContactButtonProps {}

class ContactButton extends React.Component {
  render() {
    return (
      <section id="inner-headline">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-home" />
                  </a>
                  <i className="icon-angle-right" />
                </li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactButton;
