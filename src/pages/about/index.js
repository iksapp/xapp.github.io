import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import ProfileImageFevzi from "../../assets/pp/fevzi.jpeg";
import ProfileImageMuratcan from "../../assets/pp/muratcan.jpg";
import ProfileImageMelih from "../../assets/pp/melih.jpg";


import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Profile = ({ name, imgSrc, twitter, instagram, linkedin }) => {
  return (
    <Col md={10} className="mb-5">
      <Row>
        <Col md={4} className="mb-5">
          <div className="profile-img-container">
            <img src={imgSrc} alt={name} className="profile-img" style={{ height: 200, width: 200, borderRadius: 500, marginTop: 10 }} />
          </div>
        </Col>
        <Col md={7} className="mb-5">
          <div className="profile-container">
            <div className="profile-img-container" style={{ width: 500 }}>
              <p className="profile-name" style={{ fontSize: 50 }}>{name}</p>
            </div>
            <div className="profile-links">
              {twitter && (
                <Row className="mb-2">
                  <a href={twitter} target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'pink'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <FaTwitter className="icon" size={25} style={{ marginRight: 10 }} /> Twitter
                  </a>
                </Row>
              )}
              {instagram && (
                <Row className="mb-2">
                  <a href={instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'pink'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <FaInstagram className="icon" size={25} style={{ marginRight: 10 }} /> Instagram
                  </a>
                </Row>
              )}
              {linkedin && (
                <Row className="mb-2">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'white', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'pink'} onMouseOut={(e) => e.target.style.color = 'white'}>
                    <FaLinkedin className="icon" size={25} style={{ marginRight: 10 }} /> Linkedin
                  </a>
                </Row>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  );
};




export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-5 mb-5">TUŞAS ENTREPRENEURSHIP SUPPORT PROGRAM MOBILE APP</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <p style={{ fontSize: "1.2rem" }}>

            <strong className="display-6 mb-5">PROJECT DESCRIPTION</strong><br /><br />
            Our project is a mobile application that serves as a central platform for personal development, encompassing entrepreneurship and innovation programs, events, news, educational and instructive videos, and podcasts for self-improvement during leisure time. This application acts as a shared resource for both program managers and participants, facilitating communication and providing access to vital information. It offers opportunities to connect with renowned and successful individuals in their respective fields while also allowing users to explore the content they have prepared. Through the content prepared by TUSAŞ, one of our country's leading companies, we can enhance our skills.
          </p>
                    <p style={{ fontSize: "1.2rem" }}>

          <br /><br /><br />
            <strong className="display-6">DEFINITION OF ENTREPRENEURSHIP AND INNOVATION</strong><br /><br />
            <h3>Entrepreneurship:</h3> Entrepreneurship is the process of developing new business ideas, bringing these ideas to life, and achieving success in the market by taking risks. Entrepreneurs typically aim to change existing markets or create new ones by offering innovative products or services.
            <br /><br />
            <h3>Innovation:</h3> Innovation is the process of making improvements to existing products, services, or processes or developing entirely new solutions. Innovation is not limited to technological advancements; it can also be applied in various areas such as business models, organizational structures, and customer services.
          </p>
                    <p style={{ fontSize: "1.2rem" }}>

          <br /><br /><br />
            <strong className="display-6 mb-5">IMPORTANCE OF ENTREPRENEURSHIP AND INNOVATION</strong><br />
            Our application is user-friendly, developed with feedback from dozens of people and tailored to their needs. Through this application, you can gain prior information about the entrepreneurship and innovation events organized by TUSAŞ. It allows you to connect with people who will participate in the events beforehand and meet them on the event day. Additionally, the application provides easy access to content on personal development, motivation, and much more.
          </p>
                    <p style={{ fontSize: "1.2rem" }}>

          <br/><br/><br/>
            <strong className="display-6 mb-5">IMPACTS:</strong><br />
            <h3>1. Technological Advancement and Competitive Edge:</h3> Innovation encourages the development of new technologies and processes. Entrepreneurs gain a competitive advantage by offering new and more efficient products and services to the market. It enhances the competitiveness of countries and companies in international markets, accelerates technological developments, and contributes to long-term global innovation leadership.
            <br /><br />
            <h3>2. Networking Development:</h3> The application provides users with the opportunity to communicate with each other actively. This way, users can meet successful individuals in their professional fields. It enables investors and entrepreneurs to find and support each other. Before events, users can view participants through the application and connect with them in advance, allowing for meetings on the event day.
            <br /><br />
            <h3>3. Economic Impact:</h3> Entrepreneurship and innovation programs play a crucial role in supporting creativity, problem-solving skills, and economic growth. Entrepreneurship and innovation create new job opportunities and increase employment. New businesses generate new job opportunities and allow the existing workforce to develop their skills. It supports economic growth and reduces unemployment rates, contributing to the overall improvement of living standards.
            <br /><br />
            <h3>4. Social Change and Improvement of Quality of Life:</h3> Innovative initiatives can provide creative solutions to social problems. Innovations in areas such as education, healthcare, and transportation can enhance the quality of life. It increases the overall welfare level of society, improves living standards, and can reduce social inequalities.
            <br /><br />
            <h3>5. Cultural Transformation and Spread of Entrepreneurship Culture:</h3> Entrepreneurship and innovation embed values such as risk-taking, creativity, and innovation in society. This cultural change increases individuals' motivation to start their own businesses and develop innovative ideas. It promotes an entrepreneurial culture throughout society and increases individuals' participation in the business world. This ultimately creates a more dynamic and innovative society in the long term.
          </p>
                    <p style={{ fontSize: "1.2rem" }}>

          <br/><br/><br/>
            <strong className="display-6 mb-5">CONTENT</strong><br /><br/>
            <h3 >1. EVENTS:</h3> Entrepreneurship conferences, seminars, workshops, and hackathons provide platforms for entrepreneurs to gain knowledge, expand their networks, and share their business ideas. Through our application, you can be informed about these events in advance and participate in them when the time comes by following them here.
            <br /><br />
            <h3>2. PODCASTS:</h3> Audio content prepared by experts on entrepreneurship and innovation presents listeners with the stories of successful entrepreneurs, new trends, and sectoral analyses. Through this application, you can quickly and easily access these podcasts.
            <br /><br />
            <h3>3. NEWS:</h3> Daily news and sectoral magazines allow you to follow the latest developments, investment news, and innovative projects in the entrepreneurship ecosystem. This way, you can gain new business ideas or develop your active entrepreneurial ideas.
            <br /><br />
            <h3>4. VIDEOS:</h3> Educational videos, entrepreneurship stories, and interviews provide viewers with inspiring content and visually support information transfer. By watching these videos, you can develop yourself while having fun.
            <br /><br />
            <h3>5. PROGRAMS:</h3> Accelerators, incubators, and training programs provide entrepreneurs with mentorship, funding, and education to develop and implement their business ideas. This way, you can take a step further on the path to your dreams by improving yourself.
          </p>
                    <p style={{ fontSize: "1.2rem" }}>

          <br/><br/><br/>
            <strong className="display-6 mb-5">PROJECT DESIGN PHASE</strong><br /><br/>
            In collaboration with TUSAŞ, efforts were made to create our application to be both user-friendly and efficient. During this process, feedback was gathered from people who had previously used similar applications and regular mobile application users. As a result of the feedback and research conducted, it was determined how the application could be more effective and simpler to use.
          </p>
          <p style={{ fontSize: "1.2rem" }}>

            <br/><br/><br/>
            <strong className="display-6 mb-5">CONCLUSION AND EXPECTED IMPACT</strong><br /><br/>
            This mobile application aims to facilitate the management of entrepreneurship and innovation programs, ensuring that participants gain more benefits from the programs. With effective communication, easy access, and a user-friendly interface, it is expected to increase the success of the programs. Additionally, this type of application is hoped to serve as a model for other similar organizations and contribute to the widespread adoption of innovation.
          </p>
        </Row>
        <Row className="mt-5">
        <strong className="display-6 mb-5">PROJECT DEVELOPERS</strong><br /><br/><br/><br/><br/><br/>
          <Profile
            name="Fevzi KILAS"
            imgSrc={ProfileImageFevzi}
            twitter="https://twitter.com/iksapp"
            instagram="https://www.instagram.com/niexche"
            linkedin="https://www.linkedin.com/in/fevzi-k%C4%B1las-6b857b19a"
          />
          </Row>
          <Row className="mt-5">
          <Profile
            name="Muratcan Baştuğ"
            imgSrc={ProfileImageMuratcan}
            instagram="https://www.instagram.com/muratcanbastug"
            linkedin="https://www.linkedin.com/in/murat-can-bastug-9940a11b4"
          />
           </Row>
          <Row className="mt-5">
          <Profile
            name="Melih Meral"
            imgSrc={ProfileImageMelih}
            instagram="https://www.instagram.com/melihmerall"
            linkedin="https://www.linkedin.com/in/melih-meral"
          />
        </Row>
      </Container>
    </HelmetProvider>
  );
};
