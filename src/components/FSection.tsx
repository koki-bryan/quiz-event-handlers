import { useState } from "react";

const FSection = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "example@email.com",
    preferences: { newsletter: true },
    theme: "light",
  });

  function handleNameChange(e: any) {
    setFormData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }

  function handleEmailChange(e: any) {
    setFormData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }

  function handlePreferencesChange(e: any) {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        newsletter: e.target.checked,
      },
    }));
  }

  function handleThemeChange(e: any) {
    setFormData((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  }
  function handleSubmit() {}
  return (
    <section className="min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">
        Problem 1: Controlled Form With Nested State (onChange)
      </h2>

      <form action="" className="">
        <div>
          <label htmlFor="">Name:</label>{" "}
          <input
            type="text"
            onChange={handleNameChange}
            value={formData.name}
          />
        </div>

        <div>
          <label htmlFor="">Email:</label>{" "}
          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label htmlFor="">Preferences: </label>
          <label htmlFor="">Newsletter</label>
          <input type="checkbox" onChange={handlePreferencesChange} />
        </div>

        <div>
          <label htmlFor="">Theme:</label>
          <label htmlFor="light">light</label>
          <input
            type="radio"
            id="light"
            name="theme"
            onChange={handleThemeChange}
            value="light"
          />
          <label htmlFor="dark">dark</label>
          <input
            type="radio"
            id="dark"
            name="theme"
            onChange={handleThemeChange}
            value="dark"
          />
        </div>

        <button
          type="submit"
          className="border cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <div>
        <h2>Name: {formData.name} </h2>
        <h2>Email: {formData.email} </h2>
        <h2>
          Preferences:{" "}
          {formData.preferences.newsletter ? "Newsletter" : "No Newsletter"}
        </h2>
        <h2>Theme: {formData.theme}</h2>
      </div>
    </section>
  );
};

export default FSection;
