import { CoffeeConsumer } from "../context/CoffeeContext";


const SelectedCoffeeBean = () => {
  let { coffeeBean,
    setCoffeeBeanId } = CoffeeConsumer();
  console.log(CoffeeConsumer())

  return (
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>

  );
}

export default SelectedCoffeeBean;