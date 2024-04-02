import layeredWave1 from '../../assets/images/curves/layered-wave-1.svg';
import layeredWave2 from '../../assets/images/curves/layered-wave-2.svg';
import TechStackCarousel from './TechStackCarousel';

const TechStack = () => {
  return (
    <section className="bg-[var(--body-background)] z-[14] py-2 relative">
      <img
        src={layeredWave1}
        className="aspect-[2920/200] w-full relative z-20 bottom-[-1px]"
      />
      <TechStackCarousel />
      <img
        src={layeredWave2}
        className="aspect-[2920/200] w-full relative z-20 bottom-[1px]"
      />
    </section>
  );
};
export default TechStack;
