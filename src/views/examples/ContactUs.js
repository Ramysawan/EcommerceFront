import React from "react";
// reactstrap components
import { Button, Form, Input, Container, Row, Col, CardTitle } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import Select from 'react-select';

const data = [
  { label: "Delivery issue", value: 1},
  { label: "Product issue", value: 2}
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    
    color: state.isSelected ? 'black' : 'black',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  }
}

function ContactUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/gerrit-vermeulen.jpg").default +
              ")",
          }}>
          <div className="filter"/>
            <Container style={{marginTop:"13%"}}>
            <div className="text-center" style={{marginBottom:"5%"}}>          
              <h1>Get in touch with us</h1>
              <h3>Let us tell you more about what we do.</h3>
            </div>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  {/* <h3 className="title">
                    <small>Or drop us a note</small>
                  </h3> */}
                  <Form className="contact">
                    <Row>
                      <Col md="6">
                        <Input placeholder="First Name" type="text" />
                      </Col>
                      <Col md="6">
                        <Input placeholder="Last Name" type="text" />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Input placeholder="Email" type="text" />
                      </Col>
                      <Col md="6">
                        <Select 
                          placeholder={'Subject'}
                          options={data}
                          styles={customStyles} 
                        />
                      </Col>
                    </Row>
                    <Input placeholder="Message" rows="7" type="textarea" style={{marginTop:"5%"}}/>
                    <Row>
                      <Col className="ml-auto mr-auto" md="6">
                        <Button block className="btn-round" color="danger">
                          Send
                        </Button>
                      </Col>
                    </Row>
                    </Form>
                </Col>
              </Row>
            </Container>
          </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default ContactUs;