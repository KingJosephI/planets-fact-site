import Header from '../common/Header/Header';
import Planet from '../common/Planet/Planet';
import { useLocation } from 'react-router-dom';
import './PlanetPage.scss';

const PlanetPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main>
        <Planet name={pathname} />
      </main>
    </>
  );
};

export default PlanetPage;
