'use client'
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setResult("Sending..."); // Feedback for the user

    const formData = new FormData(event.target);
    formData.append("access_key", "e71cd036-434a-47eb-8622-80a7cc205206"); // Replace with your actual access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!"); // Success message
        event.target.reset(); // Reset the form fields
      } else {
        console.error("Error:", data); // Log detailed error
        setResult(data.message); // Show error message to the user
      }
    } catch (error) {
      console.error("Fetch error:", error); // Catch and log any errors that occur during the fetch
      setResult("An error occurred, please try again."); // Fallback error message
    }
  };

  return (
    <div className="hero min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 mx-auto text-white">
      <div className="card w-full max-w-sm mx-auto shadow-2xl">
        <h1 className="text-center text-6xl tracking-wide font-bold py-4">CONTACT ME </h1> {/* H1 header above the form */}
        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered bg-white rounded-full mt-6 text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered bg-white rounded-full mt-6 text-black"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea input-bordered bg-white rounded-xl h-40 mt-6 text-black"
              required
            ></textarea>
          </div>
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-ghost btn-outline text-white w-full">
              Submit
            </button>
          </div>
          <span className="pt-2">{result}</span>
        </form>
      </div>
    </div>
  );
}
