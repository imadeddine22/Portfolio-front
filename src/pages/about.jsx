import aboutImage from "../assets/mm.png"
import "../styles/about.css"
import Back from "../assets/back.png"
function About() {
    return (
        <>
            <div className="hawia">
      
              
            <div class="about-container">
                <div class="about-image"><img src={aboutImage} className="about-image" alt="About" /></div>
              
                <div class="about-content"><p> 
Lines of code, sparks of creativity, and a mind wired for innovation — that's the rhythm I live by.
I don’t just design interfaces; I design emotions, moments, and memories on a digital canvas.
Every click, every scroll, every animation is a carefully crafted whisper to the user:
"Stay a little longer... there's more to feel here."
The web isn’t just a place for me — it’s a playground, a stage, and a battlefield where I chase perfection pixel by pixel.
Welcome to my world — where ideas breathe and experiences come alive.

</p></div>
            </div>
            </div>








            <button class="cosmic-button">
  <div class="black-hole-effect">
    <span class="rocket-container">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="rocket-icon"> 
        <g> 
          <path d="M0 0h24v24H0z" fill="none"></path> 
          <path d="M8.498 20h7.004A6.523 6.523 0 0 1 12 23.502 6.523 6.523 0 0 1 8.498 20zM18 14.805l2 2.268V19H4v-1.927l2-2.268V9c0-3.483 2.504-6.447 6-7.545C15.496 2.553 18 5.517 18 9v5.805zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path> 
        </g> 
      </svg>
    </span>
    <span class="event-horizon">
      <span class="horizon-block"></span>
    </span>
  </div>
  <span class="button-label">About Me</span>
</button>


        </>
    );
}
export default About;
