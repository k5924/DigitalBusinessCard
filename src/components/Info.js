import React from "react";

export default function Info(){
  return (
    <div> 
      <img className="profilePicture" src="https://avatars.githubusercontent.com/u/56407135" alt="profile"/>
      <h1 className="name">Kamran Bhatti</h1>
      <h3 className="job">Software Developer</h3>
      <div className="buttons">
          <a href="mailto:k.bhatti5384@yahoo.co.uk">
            <button className="emailButton">Email</button>
          </a>
          <a href="https://linkedin.com/in/kbhatti5924">
            <button className="linkedInButton">LinkedIn</button>
          </a>
        </div>
    </div>
  )
}
