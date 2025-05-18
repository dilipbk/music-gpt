import React, { ReactNode, RefObject, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  hasDismiss?: boolean;
  disableOutside?: boolean;
  bodyClasses?: string;
  modalRef?: RefObject<HTMLDivElement | null>;
};

const ModalContent = ({
  onClose,
  header,
  children,
  footer,
  hasDismiss = true,
  disableOutside = false,
  bodyClasses = "",
  modalRef,
}: ModalProps) => {
  const handleBackdrop = () => {
    if (disableOutside) return;
    onClose?.();
  };

  return (
    <div
      className="fixed left-0 top-0 right-0 bottom-0 z-50 flex items-center overflow-hidden justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={handleBackdrop}
    >
      <div
        ref={modalRef}
        className="relative rounded-lg shadow-lg w-full max-w-[800px] mx-0 md:mx-4 h-[100dvh] md:h-auto p-0 outline-none transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {hasDismiss && (
          <button
            onClick={onClose}
            className="absolute top-3 z-[22] cursor-pointer right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        {/* Header */}
        {header && (
          <div className="px-6 pt-6 pb-2 text-lg font-semibold border-b border-gray-200">
            {header}
          </div>
        )}
        {/* Body */}
        <div className={clsx("px-0 md:px-6 py-0 md:py-4 ", bodyClasses)}>
          {children}
        </div>
        {/* Footer */}
        {footer && (
          <div className="px-6 pt-2 pb-6 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes modal-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
  hasDismiss = true,
  disableOutside = false,
  bodyClasses = "",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // close the modal on escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement;
    modalRef.current?.focus();
    return () => {
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // const modalContent = (
  //   <div
  //     className="fixed left-0 top-0 right-0 bottom-0 z-50 flex items-center overflow-hidden justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300"
  //     aria-modal="true"
  //     role="dialog"
  //     tabIndex={-1}
  //     onClick={handleBackdrop}
  //   >
  //     <div
  //       ref={modalRef}
  //       className="relative rounded-lg shadow-lg w-full max-w-[800px] mx-0 md:mx-4 h-[100dvh] md:h-auto p-0 outline-none transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
  //       tabIndex={0}
  //       onClick={(e) => e.stopPropagation()}
  //     >
  //       {/* Close Button */}
  //       {hasDismiss && (
  //         <button
  //           onClick={onClose}
  //           className="absolute top-3 z-[22] cursor-pointer right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
  //           aria-label="Close modal"
  //         >
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth={2}
  //             stroke="currentColor"
  //             className="w-6 h-6"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M6 18L18 6M6 6l12 12"
  //             />
  //           </svg>
  //         </button>
  //       )}
  //       {/* Header */}
  //       {header && (
  //         <div className="px-6 pt-6 pb-2 text-lg font-semibold border-b border-gray-200">
  //           {header}
  //         </div>
  //       )}
  //       {/* Body */}
  //       <div className={clsx("px-0 md:px-6 py-0 md:py-4 ", bodyClasses)}>
  //         {children}
  //       </div>
  //       {/* Footer */}
  //       {footer && (
  //         <div className="px-6 pt-2 pb-6 border-t border-gray-200">
  //           {footer}
  //         </div>
  //       )}
  //     </div>
  //     <style jsx>{`
  //       @keyframes modal-in {
  //         0% {
  //           opacity: 0;
  //           transform: scale(0.95);
  //         }
  //         100% {
  //           opacity: 1;
  //           transform: scale(1);
  //         }
  //       }
  //       .animate-modal-in {
  //         animation: modal-in 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  //       }
  //     `}</style>
  //   </div>
  // );

  if (typeof window === "undefined") return null;
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <ModalContent
      onClose={onClose}
      bodyClasses={bodyClasses}
      header={header}
      footer={footer}
      disableOutside={disableOutside}
      hasDismiss={hasDismiss}
      modalRef={modalRef}
    >
      {children}
    </ModalContent>,
    modalRoot
  );
};

export default Modal;
