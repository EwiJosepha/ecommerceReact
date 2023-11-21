import "./contact.css"
function Contact () {
return (
  <>
    <div className="containertwo">
    <div className="contact">
      <div className="other-ways-connect">
        <h3 id="align-center">Other ways to connect</h3>
        <span id="spanid">we love to hear from you our friendly team is always hear to chart</span>
        <div className="email">
          <i className="fa-regular fa-envelope"></i>
          <div className="ourteam">
          <span id="reach-us">Reach us on email</span><br />
          <span id="ourteam">Our friendly team is here to help.</span><br />
          <span id="emaill">info@yourmail.com</span>
        </div>
        </div>
        <div className="email">
          <i className="fa-solid fa-weight-hanging"></i>
          <div className="ourteam">
          <span id="reach-us">For Careers</span><br />
          <span id="ourteam">Our friendly team is here to help.</span><br />
          <span id="emaill">info@yourmail.com</span>
        </div>
        </div>
        <div className="email">
          <i className="fa-solid fa-phone-flip"></i>
          <div className="ourteam">
          <span id="reach-us">Reach us on email</span><br />
          <span id="ourteam">Send your resume on</span><br />
        </div>
        </div>
        <div className="email">
          <i className="fa-solid fa-location-dot"></i>
          <div className="ourteam">
          <span id="reach-us">Phone</span><br />
          <span id="ourteam">Mon-Fri from 8am to 5pm.</span><br />
          <span id="emaill">+01 (614) 875 8005</span><br />
          <span id="emaill">+01 (614) 875 8005</span>
        </div>
        </div>
      </div>
      <div className="conatin2">
        <p className="up1">Love to hear from you,
          Get in touch 👋</p>
        <i className="fas fa-hand-wave"></i>
        <div className="form">
          <div className="left-form">
            <div className="input">
              <label for="">Your Name</label>
              <input type="text" placeholder="Edward Snowden" id="yourname" />
            </div>
            <br />
            <div className="input">
              <label for="">Phone No.</label>
              <div className="coller">
                <select name="" id="drop">
                  <option value="">+91</option>
                  <option value="">+237</option>
                  <option value="">+419</option>
                  <option value="">+123</option>
                </select>
                <input  type="text" placeholder="Enter your phone No." id="yournumber" />
              </div>
            </div>
          </div>
          <div className="left-form">
            <div className="input">
              <label for="">Your Email</label>
              <input type="text" placeholder="itanexmple@gmail.com" id="youremail" />
            </div>
            <br />
            <div className="input">
              <label for="">What you are interested</label>
              <input type="text" placeholder="Design and Branding " id="brand" />
            </div>
          </div>
​
        </div>
        <div className="textea">
          <label for="">Message</label>
          <textarea name="" id="for" cols="30" rows="5" placeholder="let tell us know your project about"></textarea>
        </div>
        <button id="send">Send message <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
​
    </div>
    </div>
    <div class="footer">
      <h1 id="footer">Footer</h1>
    </div>
  </>
)
}

 export default Contact 