import './App.css'
import BOFLogo from "./assets/BoF-No-Text-PNG.png";
import L115Capsule from "./assets/store_capsule_main.png";

function App() {

  return (
    <>
      <div>
        Hello! We are <b>Bucket of Fish</b>, a team of four working to make some cool games!
      </div>
      <img className={"bof-logo"} src={BOFLogo} alt='Bucket of Fish Games Logo'/>
      <div>We are currently working on a game called <b>Locomotive 115</b>, a short horror game where you drive a locomotive and try to survive whatever the tundra throws your way...</div>
      <div>You can wishlist and check out the game <a href='https://store.steampowered.com/app/3269860/Locomotive_115/' target='_blank' rel='noopener noreferrer'>here!</a></div>
      <a href='https://store.steampowered.com/app/3269860/Locomotive_115/' target='_blank' rel='noopener noreferrer'>
        <img className='l115-capsule' src={L115Capsule} alt='Locomotive 115 Capsule'/>
      </a>
      <div>
        <i>Pardon our site, it is still under construction :)</i>
      </div>
    </>
  )
}

export default App
