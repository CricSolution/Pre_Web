import Hero from '../../components/Hero';
import WhoWeAre from '../../components/whoWeAre'
import Stats from '../../components/Stats';
import BlogCarousel from '../../components/BlogCarousel';
import EnquiryForm from '../../components/EnquiryForm';
import Crosel from '../../components/Crowsel/Crosel';
import Profile from '../../components/Profile/Profile';
import Service from '../../components/service/Service';
import Events from '../../components/Events/Events';
import Turnaments from '../../components/Turnaments/Turnaments';
import GroundAsso from '../../components/GroundAsso/GroundAsso';
import Testimonial from '../../components/Testimonial/Testimonials';

import MainComponent from '../../components/BottomEnquiry/MainComponent';

function Home() {
    return (
        <div className="home"> 
            <Crosel/>
            <WhoWeAre />
            <Service/>
            <Events/>
            <Turnaments/>
            <GroundAsso/>
            <Stats />
            <Testimonial/>
            <BlogCarousel />
            <Profile/>
            <MainComponent/>
             {/* <EnquiryForm/> */}
        </div>
    );
}

export default Home;