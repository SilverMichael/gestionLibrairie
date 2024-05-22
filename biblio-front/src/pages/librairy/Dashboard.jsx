import React, { useState, Fragment, useRef } from "react";
import { NavBar } from "../../components";
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import livre1 from "../../assets/livre1.jpg";
import livre2 from "../../assets/livre2.jpg";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const cancelButtonRef = useRef(null);
  const handleOpenModalBook = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };
  return (
    <div>
      <NavBar />
      <div className="flex justify-center mt-5">
        <ul className="list-inline">
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="mx-3"
            type="button"
            onClick={handleOpenModalBook}
          >
            <li className="book">
              <img src={livre1} alt="livre1" />
            </li>
          </button>
          <button>
            <li className="book">
              <img src={livre2} alt="livre2" />
            </li>
          </button>
        </ul>
      </div>

      {/* START MODAL */}
      <Transition show={openModal} as={Fragment}>
        <Dialog
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => setOpenModal(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="grid grid-cols-5 p-8">
                    <div className="col-span-2">
                      {/* <ul className=""> */}
                      <li className="book ">
                        <img src={livre1} alt="livre1" />
                      </li>
                      {/* </ul> */}
                    </div>
                    <div className="col-span-3">
                      <DialogTitle
                        as="h2"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Ici le titre
                      </DialogTitle>
                      <h3 className="mb-3 font-normal tracking-tight text-slate-400 ">
                        subtitle
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio cupiditate ea esse ratione, quas ad voluptas
                        eligendi similique ab hic culpa laborum accusantium
                        omnis itaque magni nisi porro quis sed.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius alias dolore error dolor distinctio non soluta cum veniam, tenetur voluptatum quae impedit autem? Ad laudantium, esse deserunt similique veritatis minima.
                      </p>
                    </div>
                  </div>
                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpenModal(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpenModal(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* END MODAL */}
    </div>
  );
};

export default Dashboard;
