import { useState } from "react";

const FSection = () => {
  return (
    <section className="min-h-screen">
      <h2 className="text-2xl font-bold mb-4">
        Problem 1: Controlled Form With Nested State (onChange)
      </h2>

      <form action="" className="">
        <label htmlFor="">Name:</label> <input type="text" />
        <label htmlFor="">Email:</label> <input type="email" />
        <label htmlFor="">Preferences: </label>
        <label htmlFor="">Newsletter</label>
        <input type="checkbox" />
        <label htmlFor="">Theme:</label>
        <label htmlFor="light">light</label>
        <input type="radio" id="light" />
        <label htmlFor="dark">dark</label>
        <input type="radio" id="dark" />
      </form>
    </section>
  );
};

export default FSection;
