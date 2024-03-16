import './App.css';
import Accordion from './components/accordion/accordion-index';
import ImageSlider from './components/image-slider/image-slider-index';
import LoadMoreData from './components/load-more-data/load-more-index';
import RandomColor from './components/random-color/random-color-index';
import StarRating from './components/star-rating/star-rating-index';
import TreeView from './components/tree-view/tree-view-index';
import menus from './components/tree-view/tree-view-data';
import QRCodeGenerator from './components/qr-code-generator/qr-code-index';
import LightDarkMode from './components/light-dark-mode/light-dark-mode-index';
import ScrollIndicator from './components/scroll-indicator/scroll-indicator-index';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder/github-index';
import SearchAutocomplete from './components/search-autocomplete/search-auto-index';
import TicTacToe from './components/tic-tac-toe/tic-tac-index';
import FeatureFlagGlobalState from './components/feature-flag/context/context-index';
import FeatureFlags from './components/feature-flag/feature-flag-index';
import UseFetchHookTest from './components/use-fetch/use-fetch-test';
import UseOnclickOutsideTest from './components/use-outside-click/use-outside-click-test';
import UseWindowResizeTest from './components/use-window-resize/window-resize-test';
import ScrollToTopAndBottom from './components/scroll-to/scroll-to-index';
import ScrollToSection from './components/scroll-to/scroll-to-section';

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QRCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabTest />
      <ModalTest />
      <GithubProfileFinder />
      <SearchAutocomplete />
      <TicTacToe />
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      <UseFetchHookTest />
      <UseOnclickOutsideTest />
      <UseWindowResizeTest />
      <ScrollToTopAndBottom />
      {/* <ScrollToSection /> */}
    </div>
  );
}

export default App;
