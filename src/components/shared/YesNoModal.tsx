import React from "react";
import ReactDOM  from "react-dom";
import ModalBackDrop from "./ModalBackDrop";
const YesNoModal = (
  props: {OnDeleteItem: (deleteItem: boolean) => void, task: string, AddClass? : string}) => {
    const modalBackdropRoot = document.getElementById('backdrop-root') as HTMLDivElement;
    const modalOverlayRoot = document.getElementById('overlay-root') as HTMLDivElement;
    
    const DeleteHandler = () => {
        props.OnDeleteItem(true);
    }
    const CancelHandler = () => {
        props.OnDeleteItem(false);
  }
  const ModalOverlay = () => {
    return (
      <>
        <div className={`fixed overflow-y-hidden text-lg text-center overflow-x-hidden z-50 manual-center w-full h-full bg-white bg-opacity-0 border-gray-800 rounded-md ${props.AddClass !== undefined ? props.AddClass : ""}`}>
          <div className="fixed z-50 overflow-hidden w-full h-full " aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-full pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
              <div className="inline-block  align-middle bg-white rounded-lg text-left  border-black border-solid overflow-hidden shadow-xl transform transition-all z-50">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        OBS
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Är du säker på att du vill ta bort denna okr? den kommer att tas bort permanent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse  justify-center">
                  <button onClick={DeleteHandler} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Ta bort
                  </button>
                  <button onClick={CancelHandler} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Avbryt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<ModalBackDrop OnClick={props.OnDeleteItem} AddClass=" z-50" />,
        modalBackdropRoot)}
      {ReactDOM.createPortal(<ModalOverlay />,
        modalOverlayRoot)}
    </React.Fragment>
    );

}
export default YesNoModal;