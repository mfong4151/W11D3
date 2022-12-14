import { CoffeeConsumer } from "../context/CoffeeContext";


const SetCoffeeBean = ({ coffeeBeans }) => {
  let { coffeeBean,
    setCoffeeBeanId } = CoffeeConsumer();

  const changeBean = beanID =>{
      setCoffeeBeanId(beanID);
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={e=> changeBean(e.target.value)}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;