import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import "../Style.css"; // Import file CSS

const MyComponents = () => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Dung", Age: 49 },
    { id: 2, Name: "Hoang", Age: 34 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    setListUser((prev) => [{ ...userObject, id: Date.now() }, ...prev]);
  };

  const handleDeleteUser = (userID) => {
    setListUser((prev) => prev.filter((item) => item.id !== userID));
  };

  const handleDeleteAllUser = () => {
    setListUser([]);
  };

  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser} />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
        handleDeleteAllUser={handleDeleteAllUser}
      />
    </div>
  );
};

export default MyComponents;
