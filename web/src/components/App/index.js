import './App.css';
import SliderMain from '../SliderMain';
import CustomNav from '../CustomNav';
import Footer from '../Footer';
function App() {
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <CustomNav />
      <SliderMain />
      <Footer />
    </div>
  );
}

export default App;
