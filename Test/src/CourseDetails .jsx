
import React from "react";
import "./CourseDetails.css"; // for plain CSS fallback

const CourseDetails = () => {
  return (
    <div className="bg-purple-100 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left - Course Info */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Design: UI and UX Basics
          </h1>
          <p className="italic text-gray-700">
            "It's not just about how a product looks—it’s about how it behaves,
            how it feels in motion, and how it supports the user without getting in the way."
          </p>

          {/* Instructor Info */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/teacher.jpg" // Update path as needed
              alt="Instructor"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Teee</p>
              <p className="text-sm text-gray-500">Senior Product designer</p>
              <p className="text-sm text-yellow-500">⭐ 4.3 (135 Ratings) · 1,352 students</p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">What you'll learn</h2>
            <ul className="list-none space-y-2 text-sm text-gray-700">
              {[
                "Understand the core principles of UI and UX design.",
                "Create wireframes, prototypes, and user flows with purpose.",
                "Design clean, accessible, and user-friendly interfaces.",
                "Conduct user research and usability testing.",
                "Use tools like Figma for modern digital product design.",
                "Translate real user needs into thoughtful design solutions.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-600 text-lg">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Outline */}
          <div className="space-y-3">
            {[
              "Introduction to Product Design",
              "Design Thinking & UX Fundamentals",
              "UI Design Principles",
              "Figma Essentials",
              "User Research & Testing",
              "Prototyping & Interaction Design",
              "Case Studies & Portfolio Building",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white px-5 py-4 rounded-md shadow-sm cursor-pointer font-medium"
              >
                MODULE {index + 1}: {title.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="space-y-5">
          <img
            src="/assets/team.jpg" // Update path as needed
            alt="Course"
            className="w-full h-56 object-cover rounded-md"
          />
          <div className="bg-white p-5 rounded-lg shadow-md space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">₦ 10,000.00</h3>
            <span className="text-sm bg-purple-200 text-purple-700 px-2 py-1 rounded-full font-semibold">Premium</span>
            <button className="bg-purple-600 text-white w-full py-2 rounded-md hover:bg-purple-700">
              Enroll Now
            </button>

            <div className="text-sm text-gray-700 space-y-2">
              <p>📼 22 hours on-demand video</p>
              <p>📄 15 articles</p>
              <p>🧾 At least 5 savable resources</p>
              <p>♾️ Full lifetime access</p>
              <p>📱 Access on mobile and desktop</p>
              <p>📜 Certificate of completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
