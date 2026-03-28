import { useState } from "react";

import "./App.css";

function App() {
  const [form, setForm] = useState({
    usernamevalue: "",
    pass: "",
    email: "",
  });
  const onsub = (e) => {
    e.preventDefault();

    console.log(form);

    setForm({
      usernamevalue: "",
      email: "",
      pass: "",
    });
  };

  const change = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <h1 className="bg-green-500  p-2">LOGIN FORM</h1>

        <form action="" onSubmit={onsub}>
          <label htmlFor="">ENTER UNIQUE USERNAME :</label>
          <input
           name="usernamevalue"
            value={form.usernamevalue}
            className="border rounded-md px-2 mx-2 my-2 "
            type="text"
            placeholder="Username"
            required
            onChange={change}
          />
          <br />
          <label htmlFor="">ENTER EMAIL :</label>
          <input
           name="email"
            value={form.email}
            className="border rounded-md px-2 mx-2 my-2  "
            type="email"
            required
            placeholder="Email"
            onChange={change}
          />
          <br />
          <label htmlFor="">ENTER PASS :</label>
          <input
           name="pass"
            value={form.pass}
            className="border rounded-md px-2 mx-2 my-2 "
            type="password"
            placeholder="pass"
            required
            onChange={change}
          />
          <br />

          <button type="submit" className="bg-black text-white rounded m-2 p-2" disabled={
            form.usernamevalue.length <10 || 
            !form.email.includes('@') ||
            form.pass.length <8
          }>
            Submit
          </button>

        </form>

        <h1>
          {form.usernamevalue.length > 8 ? (
            <span > valid username </span>
          ) : (
            <span> minimum 10 ch username </span>
          )}
        </h1>
      </div>
    </>
  );
}

export default App;
