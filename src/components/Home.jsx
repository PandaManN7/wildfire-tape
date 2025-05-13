import useRandomColor from '../function/useRandomColor';
import { Link } from 'react-router-dom';



function Home() {
  const titleColor = useRandomColor(1000);

  return (
    <main>
      <section id="Description">
        <h1>
          MY TAPES STARTED TO DISAPPEAR ONE BY ONE. I DON'T KNOW HOW, BUT THEY SLIPPED AWAY 
          AS THE YEARS PASSED. TIME SWALLOWS EVERYTHING EVENTUALLY, 
          AND I CAN'T REMEMBER MUCH ANYMORE. PLEASE HELP ME FIND WHAT I LOST.
        </h1>
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