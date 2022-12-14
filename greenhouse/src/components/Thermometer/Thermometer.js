import ReactSlider from "react-slider";
import './Thermometer.css';
import { ClimateConsumer } from "../../context/ClimateContext";

function Thermometer() {
  const {climate, setClimate} = ClimateConsumer();

  const handleChange = val =>{
    setClimate(val);
  }

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {climate}°F</div>
      <ReactSlider
        value={climate}
        onAfterChange={(val) => {handleChange(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;