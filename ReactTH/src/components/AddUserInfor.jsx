import React, { useState } from "react";
import "../Style.css"; // Import file CSS

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address] = useState("IUH");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!age || parseInt(age) <= 0) {
      alert("Vui lòng nhập tuổi hợp lệ!");
      return;
    }


    props.handleAddnewUser({
      id: crypto.randomUUID(),
      Name: name, 
      Age: parseInt(age),
      address,
    });    

    setName("");
    setAge("");
  };

  return (
    <form className="form-container" onSubmit={handleOnSubmit}>
      <label>
        Tên:
        <input
          className="input-field"
          type="text"
          value={name}
          onChange={handleOnChangeInput}
          required
        />
      </label>
      <label>
        Tuổi:
        <input
          className="input-field"
          type="number"
          value={age}
          onChange={handleOnChangeAge}
          required
        />
      </label>
      <button type="submit" className="btn-submit">
        Thêm người dùng
      </button>
    </form>
  );
};

export default AddUserInfor;
