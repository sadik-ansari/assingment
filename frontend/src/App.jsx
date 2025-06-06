import React, { useState } from "react";
import NavBar from "./component/navbar/NavBar";
import HeroSection from "./component/heroSection/HeroSection";
import Card from "./component/card/Card";
import Features from "./component/features/Features";
import Customer from "./component/customer/Customer";
import Join from "./component/join/Join";
import Footer from "./component/footer/Footer";
import Table from "./component/table/Table";
import Form from "./component/form/Form";

function App() {
  // State to hold all form submissions
  const [submittedList, setSubmittedList] = useState([]);

  // Control form visibility
  const [showForm, setShowForm] = useState(false);

  // Add new form submission to the list
  const addEntry = (formData) => {
    setSubmittedList((prev) => [...prev, formData]);
  };

  return (
    <>
      <NavBar />

      <HeroSection setShowForm={setShowForm} />

      {showForm && (
        <Form
          onFormSubmit={addEntry}
          onClose={() => setShowForm(false)}
        />
      )}

      <Card />
      <Features />
      <Customer />
      <Join />

      {submittedList.length > 0 && <Table users={submittedList} />}

      <Footer />
    </>
  );
}

export default App;
