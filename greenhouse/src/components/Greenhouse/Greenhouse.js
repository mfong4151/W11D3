import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const {themeName, setThemeName } = useTheme();

  const changeImage =()=>{
  
    if(themeName === "day"){
      return (<img  className='greenhouse-img'
              src={dayImage}
              alt='greenhouse' 
        />)
    } else {
      return (<img  className='greenhouse-img'
              src={nightImage}
              alt='greenhouse' 
        />)
    }

  } 
  return (
    <section>
      {changeImage()}
     
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;