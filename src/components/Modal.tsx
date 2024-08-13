import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Close"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
