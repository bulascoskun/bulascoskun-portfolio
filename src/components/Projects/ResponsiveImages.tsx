import { useModal } from '../Modal/ModalContext';

const ResponsiveImages = ({ images }: { images: string[] }) => {
  const { openModal } = useModal();

  return (
    <div className="flex flex-wrap gap-4 xl:hidden py-4">
      <img
        src={images[0]}
        className="max-w-[400px] w-full aspect-[600/296] mx-auto"
        onClick={() => {
          openModal(images[0]);
        }}
      />
      <img
        src={images[1]}
        className="max-w-[400px] w-full aspect-[600/296] mx-auto"
        onClick={() => {
          openModal(images[1]);
        }}
      />
    </div>
  );
};
export default ResponsiveImages;
