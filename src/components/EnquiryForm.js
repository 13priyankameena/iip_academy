import { useState } from "react";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    gender: "",
    name: "",
    contact: "",
    country: "",
    state: "",
    city: "",
    address: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="mainwebsitecontent">
      <form onSubmit={handleSubmit}>
        <div className="formrow">
          <div className="formlable">Gender :</div>
          <div className="inputform">
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} style={{ marginLeft: "10px" }} /> Female
          </div>
        </div>

        <FormRow label="Name" name="name" value={form.name} onChange={handleChange} />
        <FormRow label="Contact No" name="contact" value={form.contact} onChange={handleChange} />
        <FormSelect label="Country" name="country" value={form.country} onChange={handleChange} options={["India", "USA", "Australia"]} />
        <FormSelect label="State" name="state" value={form.state} onChange={handleChange} options={["Rajasthan", "Maharastra", "Punjab", "Kerela", "New York", "Malbourne", "Syndey"]} />
        <FormSelect label="City" name="city" value={form.city} onChange={handleChange} options={["Jodhpur", "Jaipur", "Mumbai", "Washington DC", "New York"]} />
        <FormTextarea label="Address" name="address" value={form.address} onChange={handleChange} />
        <FormRow label="Email" name="email" value={form.email} onChange={handleChange} />
        <FormTextarea label="Enquiry" name="enquiry" value={form.enquiry} onChange={handleChange} />

        <div className="formrow">
          <div className="formlable">
            <button type="submit" className="button">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;

const FormRow = ({ label, name, value, onChange }) => (
  <div className="formrow">
    <div className="formlable">{label} :</div>
    <div className="inputform">
      <input type="text" name={name} value={value} onChange={onChange} className="inputbox" />
    </div>
  </div>
);

const FormSelect = ({ label, name, value, onChange, options }) => (
  <div className="formrow">
    <div className="formlable">{label} :</div>
    <div className="inputform">
      <select name={name} value={value} onChange={onChange}>
        <option value="">---Select---</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  </div>
);

const FormTextarea = ({ label, name, value, onChange }) => (
  <div className="formrow">
    <div className="formlable">{label} :</div>
    <div className="inputform">
      <textarea name={name} value={value} onChange={onChange} className="textarea" />
    </div>
  </div>
);
