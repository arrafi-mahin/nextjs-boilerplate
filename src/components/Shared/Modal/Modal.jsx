"use client";
/**
 * Modal Component
 *
 * A reusable modal dialog component that can be shown or hidden.
 *
 * @param {Object} props - The component's props.
 * @param {boolean} [props.show=false] - Whether the modal is visible or hidden.
 * @param {function} props.onClose - A function to be called when the modal is closed.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 *
 * @returns {ReactNode} The rendered modal component.
 */

// Example

{
  /* <Modal show={true} onClose={()=>{}} >
    <p className="">Hello world</p>
</Modal> */
}

import Cross from "@/assets/icons/cancel.svg";
import { useEffect } from "react";
const Modal = ({ show = false, onClose, children }) => {
  useEffect(() => {
    const escapeHandler = (e) =>
       e.key === "Escape" ? onClose() : null;
       document.addEventListener('keydown', escapeHandler);
       return () => {
         document.removeEventListener("keydown", escapeHandler);
       };
  }, [onClose]);

  useEffect(()=>{
   show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
  },[show])

  if (!show) return null;

  return (
    <div className={`modal absolute ${show ? "" : "scale-0"}`}>
      <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-[#0000008c]">
        <div
          className={`fixed flex w-full h-full items-center justify-center duration-300 ${
            show ? "-top-[0px]" : "-top-[50px]"
          }`}
        >
          <div className="relative bg-white rounded-lg p-5 min-w-[95vw] lg:min-w-[30vw]">
            <div className="flex justify-end">
              <span onClick={onClose} className="cursor-pointer font-bold mb-3">
                <Cross className="w-5 h-5 fill-neutral-500" />
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
