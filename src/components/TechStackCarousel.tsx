import techStackIcons from '../utils/techStackIcons';
import TechStackCard from './TechStackCard';

const TechStackCarousel = () => {
  return (
    <div className="bg-[#191552]">
      <div className="mx-auto flex items-center gap-16 overflow-hidden py-6">
        {[...techStackIcons, ...techStackIcons].map((icon, i) => (
          <TechStackCard key={i} icon={icon} />
        ))}
      </div>
    </div>
  );
};
export default TechStackCarousel;
