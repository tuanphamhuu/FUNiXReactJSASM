import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer(props) {
  return (
    <MDBFooter expand="md"  className='footer text-center text-lg-start text-muted'>
      <div className="container ">

          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              140, City Center, New York,
              <br />
              U.S.A
              <br />

              <i className="fa fa-phone fa-lg"></i>: +80 888 6789
              <br />
              <i className="fa fa-fax fa-lg"></i>: +80 888 6789
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:phtuan101991@gmail.com">phtuan101991@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>

            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© 2020 Copyright Pham Huu Tuan</p>
          </div>
        </div>
     
    </MDBFooter>

  );
}
export default Footer;    