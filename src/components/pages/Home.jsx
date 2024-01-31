import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../css/Home.css";
const Home = () => {
  return (
    <div className="h-[500px] object-cover mt-24">
      <Carousel autoPlay interval={2000} infiniteLoop transitionTime={1000}>
        <div className="h-[40vh] md:h-[80vh] bg-cover bg-center flex items-end">
          <img src="https://www.discoverpuertorico.com/sites/default/files/styles/share_image/public/2022-12/Airplane%20at%20Luis%20Muoz%20Marn%20International%20Airport.jpg?h=125a58ae&itok=Tu1fL9qJ" />
          <p className="legend"> 1</p>
        </div>
        <div className="h-[40vh] md:h-[80vh] bg-cover bg-center flex items-end">
          <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/pahalgam-july.jpg" />
          <p className="legend"> 2</p>
        </div>
        <div className="h-[40vh] md:h-[80vh] bg-cover  bg-center flex items-end">
          <img src="https://www.progressive.com/lifelanes/wp-content/uploads/2023/01/PR1497_FamilyRoadTrip_Banner.jpg" />
          <p className="legend"> 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
