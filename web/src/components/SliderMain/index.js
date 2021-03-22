import { FullPage, Slide } from 'react-full-page';
import LandingPage from '../LandingPage'; 
import CreatorInfoPage from '../CreatorInfoPage'; 
import BrandInfoPage from '../BrandInfoPage'; 
import TeamPage from '../TeamPage';

function SliderMain() {
    return (
      <div className="slider-main">
        <FullPage controls>
            <Slide>
                <LandingPage />
            </Slide>
            <Slide>
                <CreatorInfoPage />
             </Slide>
             <Slide>
                <BrandInfoPage /> 
            </Slide>
            <Slide>
                <TeamPage /> 
            </Slide>
        </FullPage>
      </div>
    );
  }
  
  export default SliderMain;