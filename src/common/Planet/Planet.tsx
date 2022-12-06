import React from 'react';
import './Planet.scss';

interface IPlanet {
  name?: string;
  illustration?: string;
  description?: string;
  source?: string;
  rotation?: string;
  revolution?: string;
  radius?: string;
  temperature?: string;
}

const Planet: React.FC<IPlanet> = (props) => {
  const {
    name = '',
    description = '',
    illustration = '',
    source = '',
    rotation = '',
    revolution = '',
    radius = '',
    temperature = '',
  } = props;

  return (
    <section className="planet">
      <ul className="planet__options">
        <li>
          <span>01 </span>Overview
        </li>
        <li>
          <span>02 Internal </span>Structure
        </li>
        <li>
          <span>03 </span>Surface <span>Geology</span>
        </li>
      </ul>
      <img
        className="planet__illustration"
        src={illustration}
        alt="Planet illustration"
      />
      <div>
        <h1 className="planet__name">
          {name[1]?.toUpperCase()?.concat(name?.substring(2))}
        </h1>
        <p className="planet__description">{description}</p>
        <div>
          Source: <a href={source}>Wikipedia</a>
        </div>
      </div>
      {/* <ul className="planet__options">
        <li>
          <span>01 </span>Overview
        </li>
        <li>
          <span>02 </span>Internal Structure
        </li>
        <li>
          <span>03 </span>Surface Geology
        </li>
      </ul> */}

      <article className="planet__highlights">
        <div className="planet__card">
          <h2>ROTATION TIME</h2>
          <strong>{rotation}</strong>
        </div>
        <div className="planet__card">
          <h2>REVOLUTION TIME</h2>
          <strong>{revolution}</strong>
        </div>
        <div className="planet__card">
          <h2>RADIUS</h2>
          <strong>{radius}</strong>
        </div>
        <div className="planet__card">
          <h2>AVERAGE TEMP.</h2>
          <strong>{temperature}</strong>
        </div>
      </article>
    </section>
  );
};

export default Planet;
