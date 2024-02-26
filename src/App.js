import './App.css';
import Accordion from './components/accordion/accordion-index';
import RandomColor from './components/random-color/random-color-index';
import StarRating from './components/star-rating/star-rating-index';

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} />
    </div>
  );
}

export default App;
