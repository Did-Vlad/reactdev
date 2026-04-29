import React, { useState } from "react";

function LabContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!name.trim()) tempErrors.name = "Ім'я обов'язкове";
    if (!email.includes("@")) tempErrors.email = "Email має містити символ '@'";
    if (message.length < 10) tempErrors.message = "Повідомлення має повинно мати більше 10 символів";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Форма успішно відправлена!");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Форма зворотного зв'язку</h2>
      <form onSubmit={handleSubmit}>
        
        <div style={{ marginBottom: "15px" }}>
          <label>Ім'я:</label><br />
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={{ width: "100%" }}/>

          {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={{ width: "100%" }}/>

          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Повідомлення:</label><br />
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            style={{ width: "100%" }}/>
            
          {errors.message && <p style={{ color: "red", fontSize: "12px" }}>{errors.message}</p>}
        </div>

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default LabContact;