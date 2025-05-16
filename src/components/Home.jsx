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
            VHS TAPES (1–3) ARE SCATTERED ACROSS THE CITY. EACH TAPE 
            CONTAINS A DIFFERENT PART OF THE PASSWORD. ONCE YOU'VE FOUND ALL THREE, 
            ENTER THE FULL PASSWORD IN THE LOCKBOX TAB TO UNLOCK THE COORDINATES OF WHERE I BURIED IT LONG AGO. I'LL SHARE DETAILS FOR EACH TAPE LOCATION 
            TO THE BEST OF MY MEMORY. FIND THEM ALL, 
            AND YOU'LL HAVE THE COMPLETE PASSWORD. KEEP YOUR EYES CLOSED TO THOSE WHO MAY BE WATCHING.
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
