import UserContext from "../../UserContext";
import Section from "./Section";
import { useContext, useState } from "react";
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const { name, email } = useContext(UserContext);
  return (
    <div>
      <h1>Instamart</h1>
      <h2>
        Assume there are 100s of components inside this component for learning
        how to do "on demand loading" in a large scale web application
      </h2>
      <h1>
        I am playing with context here: name- {name}, email- {email}
      </h1>
      <Section
        name={"About"}
        desc={
          "At [Company Name], our journey began with a vision to [briefly describe the founding vision or inspiration behind the company]. Since our inception, we have been driven by a passionate commitment to [values, goals, or principles that set your company apart]. Our dedicated team of professionals, united by a common purpose, works tirelessly to [mission or main objectives of the company].Our mission at [Company Name] is to [clearly state the mission of the company, emphasizing its impact and purpose]. We believe in [values or beliefs that guide your actions] and are determined to [how you plan to achieve your mission].Innovation: We thrive on innovation, pushing the boundaries of what's possible to deliver unique solutions that make a difference.Customer-Centric Approach: Our customers are at the heart of everything we do. We listen, understand, and tailor our solutions to meet their specific needs. Dedicated Team: Our diverse and talented team is the backbone of our success. We foster a culture of collaboration, respect, and continuous learning.Quality Excellence: We are committed to delivering products/services of the highest quality, ensuring exceptional value and satisfaction for our stakeholders.Integrity: We uphold the highest standards of integrity, transparency, and honesty in all our interactions Innovation: We embrace creativity and innovation to drive progress and stay ahead in an ever-evolving landscape.Teamwork: We believe in the collective strength of our team and the power of collaboration to achieve common goals.Customer Satisfaction: We are dedicated to exceeding customer expectations and building lasting relationships based on trust and reliability."
        }
        isVisible={visibleSection === "about"}
        handleClick={() => {
          if (visibleSection !== "about") {
            setVisibleSection("about");
          } else {
            setVisibleSection(null);
          }
        }}
      />
      <Section
        name={"History"}
        desc={
          "At [Company Name], our journey began with a vision to [briefly describe the founding vision or inspiration behind the company]. Since our inception, we have been driven by a passionate commitment to [values, goals, or principles that set your company apart]. Our dedicated team of professionals, united by a common purpose, works tirelessly to [mission or main objectives of the company].Our mission at [Company Name] is to [clearly state the mission of the company, emphasizing its impact and purpose]. We believe in [values or beliefs that guide your actions] and are determined to [how you plan to achieve your mission].Innovation: We thrive on innovation, pushing the boundaries of what's possible to deliver unique solutions that make a difference.Customer-Centric Approach: Our customers are at the heart of everything we do. We listen, understand, and tailor our solutions to meet their specific needs. Dedicated Team: Our diverse and talented team is the backbone of our success. We foster a culture of collaboration, respect, and continuous learning.Quality Excellence: We are committed to delivering products/services of the highest quality, ensuring exceptional value and satisfaction for our stakeholders.Integrity: We uphold the highest standards of integrity, transparency, and honesty in all our interactions Innovation: We embrace creativity and innovation to drive progress and stay ahead in an ever-evolving landscape.Teamwork: We believe in the collective strength of our team and the power of collaboration to achieve common goals.Customer Satisfaction: We are dedicated to exceeding customer expectations and building lasting relationships based on trust and reliability."
        }
        isVisible={visibleSection === "history"}
        handleClick={() => {
          if (visibleSection !== "history") {
            setVisibleSection("history");
          } else {
            setVisibleSection(null);
          }
        }}
      />
      <Section
        name={"Careers"}
        desc={
          "At [Company Name], our journey began with a vision to [briefly describe the founding vision or inspiration behind the company]. Since our inception, we have been driven by a passionate commitment to [values, goals, or principles that set your company apart]. Our dedicated team of professionals, united by a common purpose, works tirelessly to [mission or main objectives of the company].Our mission at [Company Name] is to [clearly state the mission of the company, emphasizing its impact and purpose]. We believe in [values or beliefs that guide your actions] and are determined to [how you plan to achieve your mission].Innovation: We thrive on innovation, pushing the boundaries of what's possible to deliver unique solutions that make a difference.Customer-Centric Approach: Our customers are at the heart of everything we do. We listen, understand, and tailor our solutions to meet their specific needs. Dedicated Team: Our diverse and talented team is the backbone of our success. We foster a culture of collaboration, respect, and continuous learning.Quality Excellence: We are committed to delivering products/services of the highest quality, ensuring exceptional value and satisfaction for our stakeholders.Integrity: We uphold the highest standards of integrity, transparency, and honesty in all our interactions Innovation: We embrace creativity and innovation to drive progress and stay ahead in an ever-evolving landscape.Teamwork: We believe in the collective strength of our team and the power of collaboration to achieve common goals.Customer Satisfaction: We are dedicated to exceeding customer expectations and building lasting relationships based on trust and reliability."
        }
        isVisible={visibleSection === "careers"}
        handleClick={() => {
          if (visibleSection !== "careers") {
            setVisibleSection("careers");
          } else {
            setVisibleSection(null);
          }
        }}
      />
    </div>
  );
};
export default Instamart;
