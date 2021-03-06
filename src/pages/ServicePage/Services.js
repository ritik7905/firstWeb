import React from "react";
import { Collapse } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
// styles
import "./styles.scss"
// Pages
import SectionIntro from "../../components/SectionIntro/SectionIntro";
import HowWork from "../../components/howWork/HowWork";
import ContactHero from "../../components/contactHeroposter/ContactHero";
import InfoPage from "./InfoPage";
import { useSelector } from "react-redux";

// Controls the text in the accordian
const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}

const Services = () => {

  const projects = useSelector(state => state.projects);
  console.log(projects);
  return (
    <>
      {/* Services Intro_page */}
      <div className="services-page">
        <div className="service_intro_section">
          <SectionIntro title="Services" intro_para="Agency provides a full service range including
       technicalskills, design, business understanding." />
        </div>
        {/* Services providing */}
        <div className="services">
          <div className="service-provide container">
            <h3 className="title2">SERVICES</h3>
            <div className="service-flex">
              <div className="highlight_info">
                <h1 className="title">
                  Digital agency is a business you hire to outsource your digital marketing efforts
                </h1>
              </div>
              <div className="info">
                <p className="para" >Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                </p>
                <p className="para" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Services section accordian */}
        <div className="accordian">
          <div className="accordian_info container">
            <Collapse defaultActiveKey={['1']} bordered={false} onChange={callback}>
              <Panel icon={<CopyOutlined />} header="Design" key="1">
                <InfoPage title="Agency is a business you hire to outsource your digital marketing efforts" description="Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you." subject_title1="Web Development" subject_title2="Brand Strategy" subject_title3="Art Direction" />
              </Panel>
              <Panel header="Development" key="2">
                <InfoPage title="Agency is a business you hire to outsource your digital marketing efforts" description="Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you." subject_title1="Web Development" subject_title2="Brand Strategy" subject_title3="Art Direction" />

              </Panel>
              <Panel header="Marketing" key="3">
                <InfoPage title="Agency is a business you hire to outsource your digital marketing efforts" description="Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you." subject_title1="Web Development" subject_title2="Brand Strategy" subject_title3="Art Direction" />
              </Panel>
            </Collapse>
          </div>
        </div>
        {/* How we work section */}
        <div className="how-we-work">
          <div className="container">
            <HowWork />
          </div>
        </div>
        {/* Contact-hero-section */}
        <div className="contact-hero">
          <div className="container">
            <ContactHero path="contact-us" btn_name="Contact Now"
              poster={require("../../assets/imags/pic.png")}
              title="Help To Build Your Dream Project" para="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house." />
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;
