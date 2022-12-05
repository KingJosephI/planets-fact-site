import * as React from 'react';
import './Planet.scss';

interface IPlanet {
  name: string;
}

const Planet: React.FC<IPlanet> = (props) => {
  return (
    <section className="planet">
      <h1>{props.name}</h1>
    </section>
  );
};

export default Planet;
