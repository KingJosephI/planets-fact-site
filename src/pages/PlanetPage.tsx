import { Header, Planet } from '../common';
import { useLocation } from 'react-router-dom';
import { planets } from '../data/data';
import mercure from '../assets/planet-mercury.svg';
// import { createRequire } from 'module';
import './PlanetPage.scss';

const PlanetPage = () => {
  // const require = createRequire(import.meta.url);
  const { pathname } = useLocation();

  // const illustration = planets[0].images.planet;

  return (
    <>
      <Header />
      <main>
        <Planet
          name={pathname}
          description={planets[0].overview.content}
          source={planets[0].overview.source}
          revolution={planets[0].revolution}
          rotation={planets[0].rotation}
          radius={planets[0].radius}
          temperature={planets[0].temperature}
          illustration={mercure}
          // illustration={require(planets[0].images.planet)}
        />
      </main>
    </>
  );
};

export default PlanetPage;
