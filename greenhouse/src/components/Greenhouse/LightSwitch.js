import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';


function LightSwitch() {
  const {themeName,setThemeName} = useTheme();

  const clickHandler = e =>{
    e.preventDefault();
    if (e.target.outerText=== 'DAY') setThemeName('day');
    else setThemeName('night')
  }


  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" value="day" onClick ={clickHandler}>DAY</div>
      <div className="off" value="night" onClick ={clickHandler}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;