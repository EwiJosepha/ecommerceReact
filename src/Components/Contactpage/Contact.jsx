import "./contact.css"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

function Contact () {
  const schema = yup.object().shape({
    yourName: yup.string().min(6).max(20).required(),
    yourEmail: yup.string().email().required(),
    yourNumber: yup.number().positive().min(9).required(),
    yourDesign: yup.string().min(20).max(50).required(),
    yourmessage: yup.string().min(20).max(50).required(),
  }) 
  const {register, handleSubmit, formState: {errors}}=useForm({
    resolver: yupResolver(schema)
  })

function onsubmit (data) {
  console.log(data);
}

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
        <form onSubmit={handleSubmit(onsubmit)}>
        <div className="form">
          <div className="left-form">
            <div className="input">
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder="Edward Snowden" id="yourname" {...register("yourName")}/>
              <p>{errors.yourName?.message}</p>
            </div>
            <br />
            <div className="input">
              <label htmlFor="">Phone No.</label>
              <div className="coller">
                <select name="" id="drop">
                  <option value="">+91</option>
                  <option value="">+237</option>
                  <option value="">+419</option>
                  <option value="">+123</option>
                </select>
                <input  type="text" placeholder="Enter your phone No." id="yournumber" {...register("yourNumber")} />
                <p>{errors.yourNumber?.message}</p>

              </div>
            </div>
          </div>
          <div className="left-form">
            <div className="input">
              <label htmlFor="">Your Email</label>
              <input type="text" placeholder="itanexmple@gmail.com" id="youremail" {...register("yourEmail")}/>
              <p>{errors.yourEmail?.message}</p>
            </div>
            <br />
            <div className="input">
              <label htmlFor="">What you are interested</label>
              <input type="text" placeholder="Design and Branding " id="brand"  {...register("yourDesign")}/>
              <p>{errors.yourDesign?.message}</p>

            </div>
          </div>
​
        </div>
        <div className="textea">
          <label htmlFor="">Message</label>
          <textarea name="" id="for" cols="30" rows="5" placeholder="let tell us know your project about" {...register("yourmessage")}></textarea>
          <p>{errors.yourmessage?.message}</p>

        </div>
        <button id="send" type="submit">Send message <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        </form>
      </div>
​
    </div>
    </div>
    <div className="footer">
      <h1 id="footer">Footer</h1>
    </div>
  </>
)
}

 export default Contact 