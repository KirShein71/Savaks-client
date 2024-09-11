import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function CarouselBanner() {
  return (
    <div className="banner">
      <Carousel>
        <Carousel.Item>
          <Link to="/allbrands">
            <img
              className="banner__image"
              src="./img/rug.png"
              text="Second slide"
              alt="image_slider"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/accessories">
            <img
              className="banner__image"
              src="./img/bag.png"
              text="Second slide"
              alt="image_slider"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner__image"
            src="./img/delivery.png"
            text="Third slide"
            alt="image_slider"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
