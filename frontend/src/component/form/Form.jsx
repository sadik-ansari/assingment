import React, { useState } from "react";
import "./Form.css";
import ThankYou from "../thankyou/ThankYou";

const Form = ({ onFormSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    email: "",
    agreed: false,
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "languages") {
      setFormData((prev) => {
        const updatedLanguages = checked
          ? [...prev.languages, value]
          : prev.languages.filter((lang) => lang !== value);
        return { ...prev, languages: updatedLanguages };
      });
    } else if (type === "checkbox" && name === "agreed") {
      setFormData({ ...formData, agreed: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    setShowThankYou(true);
    setFormVisible(false);

    setTimeout(() => {
      setShowThankYou(false);
      setOverlayVisible(false);
      onFormSubmit(formData); 
      if (onClose) onClose();
    }, 3000);
  };

  if (!overlayVisible) return null;

  return (
    <div className="form-overlay position-fixed top-0 d-flex align-items-center justify-content-center">
      {formVisible && !showThankYou && (
        <div className="form-container position-relative m-auto">
          <div className="form-header position-relative">
            <h2 className='text-xl-start'>Get Started Today!</h2>
            <p className='text-xl-start'>Fill in your details and take control of your tasks.</p>
            <span
              className="close-btn position-absolute"
              onClick={() => {
                setOverlayVisible(false);
                if (onClose) onClose();
              }}
            >
              ✕
            </span>
          </div>

          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="row d-flex">
              <div className="form-group">
                <label className='text-xl-start d-block fw-bold'>First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>
              <div className="form-group">
                <label className='text-xl-start d-block fw-bold'>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
            </div>

            <div className="form-section-radio">
              <label className="section-label text-xl-start d-block fw-bold">Gender</label>
              <div className="custom-group d-flex flex-wrap">
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                    required
                  />
                  <span className="checkmark"></span>
                  Male
                </label>
                <label className="custom-radio">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                  />
                  <span className="checkmark"></span>
                  Female
                </label>
              </div>
            </div>

            <div className="form-section-checkbox">
              <label className="section-label text-xl-start d-block fw-bold">Language</label>
              <div className="custom-group">
                {["English", "Hindi", "Marathi"].map((lang) => (
                  <label className="custom-checkbox d-flex align-items-center position-relative" key={lang}>
                    <input
                      type="checkbox"
                      name="languages"
                      value={lang}
                      onChange={handleChange}
                      checked={formData.languages.includes(lang)}
                    />
                    <span className="checkmark"></span>
                    {lang}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="text-xl-start d-block fw-bold">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div className="form-group terms">
              <label>
                <input
                  type="checkbox"
                  name="agreed"
                  onChange={handleChange}
                  checked={formData.agreed}
                />{" "}
                I agree to the <span>terms and conditions</span>
              </label>
            </div>

            <button className="submit-btn" type="submit">
              Done
            </button>
          </form>
        </div>
      )}

      {showThankYou && <ThankYou />}
    </div>
  );
};

export default Form;
