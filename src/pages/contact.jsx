
import '../styles/contact.css';



function Contact() {
  return (<>
    
  <div class="hero-container">
  <button class="hero-btn left-hero">
    <div class="left-hero-face">
      <div class="left-eye"></div>
    </div>
  </button>

  <button class="hero-btn right-hero">
    <div class="right-hero-face">
      <div class="right-mask"></div>
      <div class="right-eye"></div>
    </div>
  </button>
    </div>

    <div class="contact-container">

  <div class="contact-inner">
    <form class="contact-form">
      <p class="contact-title">Get In Touch</p>

      <div class="input-container">
        <input required="" placeholder="Name" class="form-input" type="text" />
      </div>

      <div class="input-container">
        <input
          required=""
          placeholder="Email"
          class="form-input"
          type="email"
        />
      </div>

      <div class="input-container">
        <input
          required=""
          placeholder="Subject"
          class="form-input"
          type="text"
        />
      </div>

      <div class="input-container">
        <textarea
          required=""
          placeholder="Message"
          cols="30"
          rows="3"
          class="form-input"
        ></textarea>
      </div>

      <button class="submit-btn">Send Message</button>
    </form>
  </div>
</div>

  </>);
}


export default Contact;