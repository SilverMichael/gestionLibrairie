import React, { useState } from "react";
import { NavBar } from "../../components";
import AddBookForm from "../../components/book/AddBookForm";

import { CustomButton } from "../../components/index";

const DasboardAdmin = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="p-11 grid grid-cols-9 gap-4  ">
        <div className="col-span-6 border rounded-md p-4 ">book list</div>
        <div className="action col-span-3 min-h-[78vh]  border rounded-md p-4 ">
          {!showAddForm && (
            <CustomButton
              title="Add a book"
              btnType="button"
              containerStyle="bg-green-600 hover:bg-green-500 text-white mt-5 w-full rounded-md"
              handleClick={() => setShowAddForm(true)}
            />
          )}
          {showAddForm && <AddBookForm setShowAddForm={setShowAddForm} />}
        </div>
      </div>
    </div>
  );
};

export default DasboardAdmin;
