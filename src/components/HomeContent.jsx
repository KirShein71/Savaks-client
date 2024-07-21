import React from 'react';
import Promo from './Promo/Promo';
import Sale from './Sale/Sale';
import SearchSection from './SearchSection/SearchSection';
import CarouselSlider from './CarouselSlider';
import Banner from './Banner';
import Track from './Track/Track';
import Categories from './Categories/Categories';
import CompanyAdvantages from './CompanyAdvantages/CompanyAdvantages';

function HomeContent() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 480 ? (
        <>
          {windowWidth < 600 ? <CarouselSlider /> : <Banner />}
          <Track />
          <SearchSection />
          <Sale />
          <Promo />
          <Categories />
          <CompanyAdvantages />
        </>
      ) : (
        <>
          {windowWidth < 600 ? <CarouselSlider /> : <Banner />}
          <Track />
          <SearchSection />
          <CompanyAdvantages />
          <Promo />
          <Categories />
          <Sale />
        </>
      )}
    </>
  );
}

export default HomeContent;
