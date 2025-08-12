import "./App.css";
import person from "./assets/person.png";
import arrow_left from "./assets/arrow_left.svg";

export default function App() {

  return (
    <>
      <div className="app">
        <div className="firstDiv">
          <div>
            <h1 className=" text text-3xl font-bold text-black">
              Product Design: UI and UX Basics
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quibusdam enim aspernatur sequi necessitatibus quos porro vitae
              mollitia. Sit, eum eos. Voluptatum repellendus dolore veritatis
              minus repudiandae voluptas non ea? Eveniet mollitia expedita
              dolorem cum dolores! Provident quasi, dolor .
            </p>
          </div>
          <div>
            <Teee />
          </div>
          <div>
            <FirstBox />
          </div>

          <div>
            <h4>Course Outline</h4>
            <CourseLine />
          </div>
        </div>

        <div className="secondDiv"></div>
        <Second />
      </div>
    </>
  );
}

function FirstBox() {
  return (
    <div className="learnBox">
      <h3>What you will learn</h3>
      <div className="lool">
        <LearningDetail para="Understand the core principles of UI and UX design." />
        <LearningDetail para="Create wireframes, prototypes, and user flows with purpose" />
        <LearningDetail para="Design clean, accessible, and user-friendly interfaces." />
        <LearningDetail para="Use tools like Figma for modern digital product design." />
        <LearningDetail para="Translate real user needs into thoughtful design solutions." />
      </div>
    </div>
  );
}

  /* What You'll Learn */

function LearningDetail({ para }) {
  return (
    <div className="learn">
      {/* <input type="radio" /> */}
      <div className="circle">
        <img src={arrow_left} alt="" />
      </div>
      <p>{para}</p>
    </div>
  );
}

  /* Course Outline */
function CourseLine() {
  return (
    <div className="courseoutline">
      <Tough paraText="MODULE 1: INTRODUCTION TO PRODUCT DESIGN" icon="▼" />
      <Tough paraText="MODULE 2: UI DESIGN PRINCIPLES" icon="▼" />
      {
        <Tough
          paraText="MODULE 3: DESIGN THINKING AND FOUNDAMENTAL "
          icon="▼"
        />
      }
      <Tough paraText="MODULE 4: UI DESIGN PRINCIPLES" icon="▼" />
      {
        <Tough
          paraText="MODULE 5: DESIGN THINKING AND FOUNDAMENTAL "
          icon="▼"
        />
      }
      <Tough paraText="MODULE 6: UI DESIGN PRINCIPLES" icon="▼" />
    </div>
  );
}
function Tough({ paraText, icon }) {
  return (
    <div>
      <div className="lolls">
        <p>
          <b> {paraText} </b>
        </p>
        <p style={{ color: "black", fontSize: "1.5rem" }}> {icon} </p>
      </div>
    </div>
  );
}


  /* Instructor Info */


function Teee() {
  return (
    <>
      <div>
        <div className="team  ">
          <img src={person} alt="" className="teeimg" />
          <p className="text-red-700">
            Teee <span>Senior Product designer</span>{" "}
          </p>
        </div>
        <p className="text-sm text-yellow-500">
          ⭐⭐⭐⭐⭐ (135 Ratings) · 1,352 students
        </p>
      </div>
    </>
  );
}


  /* Right - Sidebar */

function Second() {
  return (
    <>
      <div className="secondSize">
        <img src={person} alt="" className="person" />

        <div className="yes">
          <div className="pre">
            <p>₦100000</p>
            <button>Premium</button>
          </div>

          <div>
            <div className="enrolCon">
              <button className="enroll">Enroll Now</button>
            </div>

            <div className="headpeterCount">
              <h2>The Course Include</h2>

              <div className="peterCont">
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
    </>
  );
}
