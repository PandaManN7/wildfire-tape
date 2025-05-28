import useRandomColor from '../function/useRandomColor';
import { Link } from 'react-router-dom';

function Home() {
  const titleColor = useRandomColor(1000);

  return (
    <main>
      <section className="text-sections">
        <div className="description">
          <h2>
            MY TAPES STARTED TO DISAPPEAR ONE BY ONE. I DON'T KNOW HOW, BUT THEY SLIPPED AWAY AS THE YEARS PASSED. 
            TIME SWALLOWS EVERYTHING EVENTUALLY, AND I CAN'T REMEMBER MUCH ANYMORE. 
            PLEASE HELP ME FIND WHAT I LOST.
          </h2>
          <img src="/images/wf.Hands.jpg" alt="Image 1" />
        </div>
        
        <div className="instructions">
          <img src="/images/wf.tape.jpg" alt="Image 1" />
          <h2>
            1. VHS TAPES (1–3) ARE SCATTERED ACROSS THE CITY. EACH TAPE CONTAINS A PORTION OF THE FULL PASSWORD. YOU WILL NEED A VCR TO WATCH THE TAPE.
          </h2>
          <h2>
            2. IF YOU FIND A TAPE, SHARE THE PASSWORD IN THE DISCORD (LOCATED UNDER THE SIGN-UP TAB).
          </h2>
          <h2>
            3. ONCE ALL THREE TAPES ARE FOUND AND SHARED, ENTER THE FULL PASSWORD IN THE LOCKBOX TAB TO UNLOCK THE PHYSICAL COORDINATES OF SOMETHING I BURIED LONG AGO.
          </h2>
          <h2>
            4. CLICK ON THE TAPES BELOW FOR DETAILS ON THEIR LAST KNOWN LOCATION. FIND THEM, BUT KEEP YOUR EYES CLOSED TO THOSE WHO MAY BE WATCHING.
          </h2>
          <h2>
            5. REMINDER: THERE IS ONLY ONE COPY OF EACH PHYSICAL TAPE. THERE WILL ALSO ONLY BE ONE LOCKBOX. FIND IT BEFORE THE OTHERS.
          </h2>

        </div>
      </section>

      <section id="gallery">
        <div className="image-grid">
          <Link to="/vhs1">
            <img src="/images/vhs1.jpg" alt="Image 1" />
            
          </Link>
          <Link to="/vhs2">
            <img src="/images/vhs2.jpg" alt="Image 2" />
          </Link>
          <Link to="/vhs3">
            <img src="/images/vhs3.jpg" alt="Image 3" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
