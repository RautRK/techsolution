import "./Contact.css";
import { useState } from "react"; 
import { useContact } from "../../context/ContactContext"; 
import { contactInfo } from "../../data";
import Socials from "../../components/Socials";
import { cssPerfectShape } from "../../utils";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { addMessage } = useContact(); 

  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    country:"",
    phoneNumber: "",
    jobTitle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in required fields.");
      return;
    }

    addMessage(formData); 
    toast.success("Message sent successfully!");

   
    setFormData({
      fullName: "",
      lastName: "",
      email: "",
      country:"",
      phoneNumber: "",
      jobTitle: "",
      message: "",
    });
  };

  return (
    <section id="contact">
        <Toaster position="top-right" />
      <div className="container">
        <div className="contact-info-wrapper">
          {contactInfo.map((info, index) => (
            <div className="contact-info" key={index}>
              <div className="icon" style={{ ...cssPerfectShape(70, 70) }}>
                <info.icon />
              </div>
              <div className="info">
                <h3>{info.title}</h3>
                <p className="description">{info.description}</p>
                <h4 className="value">{info.value}</h4>
              </div>
            </div>
          ))}
          <Socials />
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="top">
            <h2>Get In Touch</h2>
            <p className="description">
              Have a project in mind or need expert advice? We are here to help!
              Reach out to our team for personalized consultations, inquiries,
              or to start your next big project today.
            </p>
          </div>
          <div className="middle">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="control"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="control"
              value={formData.email}
              onChange={handleChange}
              required
            />
             <input
              type="text"
              placeholder="Country"
              name="country"
              className="control"
              value={formData.country}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              className="control"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Job Title"
              name="jobTitle"
              className="control"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Description"
              name="message"
              className="control"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="bottom">
            <button type="submit" className="btn primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
