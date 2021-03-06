import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

function FooterAboutUs() {
  const [languageSelect, setLanguageSelect] = React.useState({
    value: "en",
    label: "English",
  });
  const [curencySelect, setCurencySelect] = React.useState({
    value: "USD",
    label: "USD",
  });
  return (
    <>
      <footer className="footer footer-big footer-black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="2" sm="3" xs="6">
              <FormGroup>
                <Select
                  menuPlacement="top"
                  className="react-select react-select-white"
                  classNamePrefix="react-select"
                  name="languageSelect"
                  value={languageSelect}
                  placeholder=""
                  onChange={(value) => setLanguageSelect(value)}
                  options={[
                    { value: "id", label: "Bahasa Indonesia" },
                    { value: "ms", label: "Bahasa Melayu" },
                    { value: "ca", label: "Català" },
                    { value: "da", label: "Dansk" },
                    { value: "de", label: "Deutsch" },
                    { value: "en", label: "English" },
                    { value: "es", label: "Español" },
                    { value: "el", label: "Eλληνικά" },
                    { value: "fr", label: "Français" },
                    { value: "it", label: "Italiano" },
                    { value: "hu", label: "Magyar" },
                    { value: "nl", label: "Nederlands" },
                    { value: "no", label: "Norsk" },
                    { value: "pl", label: "Polski" },
                    { value: "pt", label: "Português" },
                    { value: "fi", label: "Suomi" },
                    { value: "sv", label: "Svenska" },
                    { value: "tr", label: "Türkçe" },
                    { value: "is", label: "Íslenska" },
                    { value: "cs", label: "Čeština" },
                    { value: "ru", label: "Русский" },
                    { value: "th", label: "ภาษาไทย" },
                    { value: "zh", label: "中文 (简体)" },
                    { value: "zh-TW", label: "中文 (繁體)" },
                    { value: "ja", label: "日本語" },
                    { value: "ko", label: "한국어" },
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Select
                  menuPlacement="top"
                  className="react-select react-select-white"
                  classNamePrefix="react-select"
                  name="curencySelect"
                  value={curencySelect}
                  placeholder=""
                  onChange={(value) => setCurencySelect(value)}
                  options={[
                    { value: "ARS", label: "ARS" },
                    { value: "AUD", label: "AUD" },
                    { value: "BRL", label: "BRL" },
                    { value: "CAD", label: "CAD" },
                    { value: "CHF", label: "CHF" },
                    { value: "CNY", label: "CNY" },
                    { value: "CZK", label: "CZK" },
                    { value: "DKK", label: "DKK" },
                    { value: "EUR", label: "EUR" },
                    { value: "GBP", label: "GBP" },
                    { value: "HKD", label: "HKD" },
                    { value: "HUF", label: "HUF" },
                    { value: "IDR", label: "IDR" },
                    { value: "ILS", label: "ILS" },
                    { value: "INR", label: "INR" },
                    { value: "JPY", label: "JPY" },
                    { value: "KRW", label: "KRW" },
                    { value: "MYR", label: "MYR" },
                    { value: "MXN", label: "MXN" },
                    { value: "NOK", label: "NOK" },
                    { value: "NZD", label: "NZD" },
                    { value: "PHP", label: "PHP" },
                    { value: "PLN", label: "PLN" },
                    { value: "RUB", label: "RUB" },
                    { value: "SEK", label: "SEK" },
                    { value: "SGD", label: "SGD" },
                    { value: "TWD", label: "TWD" },
                    { value: "USD", label: "USD" },
                    { value: "VND", label: "VND" },
                    { value: "ZAR", label: "ZAR" },
                  ]}
                />
              </FormGroup>
            </Col>
            <Col className="ml-auto mr-auto" md="9" sm="9" xs="12">
              <Row>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/presentation">Home</a>
                      </li>

                      <li>
                        <a href="/e-commerce">Products</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="/login-page">Login</a>
                      </li>

                      <li>
                        <a href="/register-page">Register</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="social-area">
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="instagram"
                      href="https://instagram.com/phonehub.lb?utm_medium=copy_link"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  Copyright © {new Date().getFullYear()} PhoneHub.
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Company Policy
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Terms
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterAboutUs;
