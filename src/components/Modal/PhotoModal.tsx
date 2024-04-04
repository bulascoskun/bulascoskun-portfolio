import { IoMdCloseCircle } from 'react-icons/io';
import { useModal } from './ModalContext';

const PhotoModal = () => {
  const { modalContent, closeModal } = useModal();

  return (
    <div
      onClick={closeModal}
      className="fixed z-[200] top-0 left-0 bg-[#0d0716c9] w-full h-dvh flex justify-center items-center"
    >
      <IoMdCloseCircle className="absolute top-[10px] right-[10px] size-12 cursor-pointer" />
      <img
        src={modalContent as any}
        className="aspect-[565/280] max-w-[1400] max-h-[80dvh]"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
export default PhotoModal;
