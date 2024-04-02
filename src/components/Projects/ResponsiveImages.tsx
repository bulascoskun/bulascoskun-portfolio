const ResponsiveImages = ({ images }: { images: string[] }) => {
  return (
    <div className="flex flex-wrap gap-4 xl:hidden py-4">
      <img
        src={images[0]}
        className="max-w-[400px] w-full aspect-[600/296] mx-auto"
      />
      <img
        src={images[1]}
        className="max-w-[400px] w-full aspect-[600/296] mx-auto"
      />
    </div>
  );
};
export default ResponsiveImages;
