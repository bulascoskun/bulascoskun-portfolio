import layeredWave1 from '../../assets/images/curves/layered-wave-1.svg';
import layeredWave2 from '../../assets/images/curves/layered-wave-2.svg';
import TechStackCarousel from './TechStackCarousel';

const TechStack = () => {
  return (
    <section>
      <img src={layeredWave1} className="aspect-[2920/200] w-full" />
      <TechStackCarousel />
      <img src={layeredWave2} className="aspect-[2920/200] w-full" />
    </section>
  );
};
export default TechStack;
