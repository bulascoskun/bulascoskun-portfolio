import './TechStack.scss';
import techStackIcons from '../../utils/techStackIcons';
import TechStackCard from './TechStackCard';

const TechStackCarousel = () => {
  return (
    <div className="bg-[#191552] overflow-hidden logos flex relative z-[25]">
      <div className="mx-auto flex justify-start items-center py-6 logos-slide ">
        {techStackIcons.map((icon, i) => (
          <TechStackCard key={i} icon={icon} />
        ))}
      </div>
      <div className="mx-auto flex justify-start items-center py-6 logos-slide ">
        {techStackIcons.map((icon, i) => (
          <TechStackCard key={i} icon={icon} />
        ))}
      </div>
    </div>
  );
};
export default TechStackCarousel;
