import React, { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
  CustomTextArea,
} from "../index";
import { Link } from "react-router-dom";

const AddBookForm = ({ setShowAddForm }) => {
  const [bookData, setBookData] = useState({
    bookId: "",
    title: "",
    author: "",
    resume: "",
    type: "",
    coverImage: "",
    edition: "",
    salePrice: 0,
    rentalPrice: 0,
    count: 0,
    releaseDate: "",
    available: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowAddForm(false);
  };

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      coverImage: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <div>
      <div className="login w-full  flex justify-center items-center flex-col  h-full bg-white">
        <h2 className="text-[30px] font-semibold">Book details</h2>
        <div className="form-login-container card  h-fit mx-auto border-none md:shadow-2xl p-10 w-full ">
          <form action="" onSubmit={handleSubmit}>
            {/* <div className=" md:grid md:grid-cols-2 md:gap-2"> */}
            <CustomInput
              name="title"
              label="Title"
              type="text"
              variant="normal"
              dimension="medium"
              placeholder=""
              value={bookData.title}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  title: e.target.value,
                })
              }
              required
            />
            <CustomInput
              name="author"
              label="Author"
              type="text"
              variant="normal"
              dimension="medium"
              placeholder=""
              value={bookData.author}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  author: e.target.value,
                })
              }
              required
            />
            {/* </div> */}
            {/* <div className=" md:grid md:grid-cols-2 md:gap-2"> */}
            <CustomInput
              name="edition"
              label="Edition"
              type="text"
              variant="normal"
              dimension="medium"
              placeholder="ex: Lemarion"
              value={bookData.edition}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  edition: e.target.value,
                })
              }
              required
            />
            <CustomInput
              name="release"
              label="Release date"
              type="date"
              variant="normal"
              dimension="medium"
              placeholder=""
              value={bookData.releaseDate}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  releaseDate: e.target.value,
                })
              }
              required
            />
            {/* </div> */}
            <CustomSelect
              name="genre"
              label="Genre"
              variant="normal"
              dimension="medium"
              definition="Genre(s)"
              value={[
                "sci-fi",
                "Comic",
                "Adventure",
                "Romance",
                "Drame",
                "Historic",
              ]}
              onChange={(e) => {
                setBookData({
                  ...bookData,
                  type: e.target.value,
                });
              }}
            />

            {/*  */}

            <label
              htmlFor={"coverImage"}
              className="mb-2 text-sm font-medium text-green-900"
            >
              Cover Image
            </label>

            <div
              className={
                "*:m-2 max-[425px]:flex-col border my-2 rounded-lg justify-center items-center flex flex-col"
              }
            >
              {bookData?.coverImage && (
                <img
                  src={bookData?.coverImage}
                  className="h-[50vh] rounded-md my-3 w-fit"
                />
              )}
              <input
                name="coverImage"
                type="file"
                id="files"
                onChange={handleChange}
                className="hidden"
                accept="image/png, image/jpeg"
              />
              <div className="py-4 flex space-x-2">
                <label
                  htmlFor="files"
                  className="py-2 px-4 rounded-md bg-black text-whiten dark:bg-white dark:text-boxdark-2 cursor-pointer"
                >
                  {bookData?.coverImage ? "Change cover" : "Import photo"}
                </label>
                {bookData?.coverImage && (
                  <div
                    className="py-2 px-4 rounded-md outline outline-1 outline-boxdark text-boxdark-2 hover:bg-boxdark     cursor-pointer"
                    onClick={() =>
                      setBookData({
                        ...bookData,
                        coverImage: "",
                      })
                    }
                  >
                    Remove cover
                  </div>
                )}
              </div>
            </div>

            {/*  */}

            <CustomInput
              name="Count"
              label="Count"
              placeholder=""
              type="number"
              value={bookData.count}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  count: parseInt(e.target.value),
                })
              }
              required
            />

            <CustomInput
              name="price"
              label="Sell price ($) "
              placeholder=""
              type="text"
              value={bookData.salePrice}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  salePrice: parseFloat(e.target.value),
                })
              }
              required
            />
            <CustomInput
              name="priceRent"
              label="Rental price ($) per day  "
              placeholder=""
              type="text"
              value={bookData.rentalPrice}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  rentalPrice: parseFloat(e.target.value),
                })
              }
              required
            />
            <CustomTextArea
              name="resume"
              label="Resume"
              placeholder=""
              value={bookData.resume}
              onChange={(e) =>
                setBookData({
                  ...bookData,
                  resume: e.target.value,
                })
              }
              required
            />

            <div className="flex gap-2">
              <CustomButton
                title="Cancel"
                btnType="button"
                containerStyle="bg-red-600 hover:bg-red-500 text-white mt-5 w-full rounded-md"
                handleClick={() => setShowAddForm(false)}
              />
              <CustomButton
                title="Add book"
                btnType="submit"
                containerStyle="bg-green-600 hover:bg-green-500 text-white mt-5 w-full rounded-md"
                handleClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
