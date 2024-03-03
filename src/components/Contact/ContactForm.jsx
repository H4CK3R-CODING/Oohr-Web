import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-semibold ">Feedback Form</h1>
      <form method="post" action="#" onSubmit={handleSubmit} className="w-1/2">
        <div className="my-2">
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInput}
          />
        </div>
        <div className="my-2">
          <div>
            <label htmlFor="email">E-mail:</label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInput}
          />
        </div>
        <div className="my-2">
          <div>
            <label htmlFor="phone">Phone:</label>
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleInput}
          />
        </div>
        <div className="my-2">
          <div>
            <label htmlFor="message" className="block">
              Message:
            </label>
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={form.message}
            onChange={handleInput}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 w-32 h-8 rounded-lg font-semibold text-white mt-5">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
