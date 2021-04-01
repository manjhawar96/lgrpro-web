import './App.css';
import SliderMain from '../SliderMain';
import CustomNav from '../CustomNav';
import Footer from '../Footer';
function App() {
    return (
        <div className="App">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <CustomNav />
            <SliderMain />
            <Footer />
        </div>
    );
}

export default App;
