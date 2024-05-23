import React, { useState, Fragment, useRef, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogPanel,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import axios from "axios";
import livre1 from "../../assets/livre1.jpg";

const BookList = () => {
  const [bookData, setBookData] = useState([]);
  const [bookDetail, setBookDetail] = useState({
    bookId: "",
    title: "",
    resume: "",
    type: "sci-fi",
    edition: "",
    author: "",
    salePrice: 0,
    rentalPrice: 0,
    available: true,
    count: 0,
    releaseDate: "",
    coverImage: null,
    cover: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const cancelButtonRef = useRef(null);

  const getDataBook = async () => {
    try {
      const response = await axios
        .get(`${import.meta.env.VITE_API_GATEWAY}/book/`)
        .then((res) => {
          setBookData(res?.data?.data);
        });
    } catch (error) {
      console.error("error at retreiving all book data");
    }
  };
  useEffect(() => {
    getDataBook();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleOpenModalBook = (e, book) => {
    e.preventDefault();
    setBookDetail(book);
    console.log(book);
    setOpenModal(true);
  };
  return (
    <div>
      <div>
        <ul className="list-inline">
          {bookData?.map((book, index) => (
            <button
              key={index}
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="mx-3"
              type="button"
              onClick={(e) => {
                handleOpenModalBook(e, book);
              }}
            >
              <li className="book">
                <img
                  src={`http://localhost:5001/uploads/${book?.coverImage}`}
                  alt="livre1"
                />
              </li>
            </button>
          ))}
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
                        <img
                          src={`http://localhost:5001/uploads/${
                            bookDetail?.coverImage
                          }`}
                          alt="livre1"
                        />
                      </li>
                      {/* </ul> */}
                    </div>
                    <div className="col-span-3">
                      <DialogTitle
                        as="h2"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {bookDetail?.title}
                      </DialogTitle>
                      <h3 className="mb-3 font-normal tracking-tight text-slate-400 ">
                        {bookDetail?.author} .{" "}
                        {formatDate(bookDetail?.releaseDate)} .{" "}
                        {bookDetail?.edition}
                      </h3>
                      <p>{bookDetail?.resume}</p>
                      <div className="mt-2 font-thin tracking-tight">
                        <p>Price for sale: {bookDetail?.salePrice}$ </p>
                        <p>Price for rent: {bookDetail?.rentalPrice}$/day </p>
                      </div>
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

export default BookList;
