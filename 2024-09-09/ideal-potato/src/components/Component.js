import React from "react";
import "./Component.css";
const Component = ({ name, hobbies }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <form className="form">
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Enter your message"></textarea>
        </label>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};
export default Component;