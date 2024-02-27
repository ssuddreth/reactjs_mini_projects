import './App.css';
import Accordion from './components/accordion/accordion-index';
import ImageSlider from './components/image-slider/image-slider-index';
import LoadMoreData from './components/load-more-data/load-more-index';
import RandomColor from './components/random-color/random-color-index';
import StarRating from './components/star-rating/star-rating-index';

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
      <LoadMoreData />
    </div>
  );
}

export default App;
