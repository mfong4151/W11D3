import './ClimateStats.css';
import { ClimateConsumer } from '../../context/ClimateContext';

function ClimateStats() {
  const {humidity, climate} = ClimateConsumer();
  
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climate}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;