import logoRed from "../assets/logoRed.png";
import Fyss from "../assets/Fyss.png";

function Introduction({ onStart }) {
  return (
    <section className="map-intro" aria-labelledby="intro-title">
      <div className="map-intro-content">
        <img id="intro-title" src={logoRed}></img>
        <p className="map-intro-text">Find your focus</p>
        <button
          onClick={onStart}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img src={Fyss} />
        </button>
      </div>
    </section>
  );
}

export default Introduction;
