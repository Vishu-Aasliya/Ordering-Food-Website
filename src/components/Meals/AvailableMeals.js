import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Masala Dosa',
    description: 'Finest Dosa with Delicious Sambhar',
    price: 350,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'An Italian Specialty!',
    price: 200,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, raw, meaty',
    price: 90,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 150,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
