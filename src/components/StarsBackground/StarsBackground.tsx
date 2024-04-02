import stars from '../../assets/images/other/stars-2.png';

const StarsBackground = () => {
  return (
    <img
      src={stars}
      className="fixed top-0 left-0 h-full w-full pointer-events-none z-10 object-cover"
    />
  );
};
export default StarsBackground;
