import bgImage from './video/background-img.mp4'; // Corrected the import statement

function Hero() {
  return (
    <>
      <div className="hero-container"> {/* Changed class to className */}
        <video autoPlay loop muted> 
          <source src={bgImage} type="video/mp4" />
        </video>
     <div className='hero-content'>
     <h1 className="hero"> {/* Changed class to className */}
          Innovate. Create. Elevate.
        </h1>
        <p>At Techifo Innovation, we empower businesses to reach new heights through cutting-edge <br /> technology solutions. Our team of experts is dedicated to delivering innovative and creative solutions  <br />that elevate your brand and drive success.</p>
        <div className="hero-btn"> {/* Changed class to className */}
         <a href="https://www.google.com"> <button className="btn1">Transform Your Brand</button></a> {/* Changed class to className */}
        </div>
     </div>
      </div> {/* Added closing div tag */}
    </>
  );
}

export default Hero;
