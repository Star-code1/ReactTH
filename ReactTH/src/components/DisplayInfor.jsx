import React, { useEffect, useState } from "react";
import "../Style.css"; // Import file CSS

const DisplayInfor = ({ listUser, handleDeleteUser, handleDeleteAllUser }) => {
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser((prev) => !prev);
  };

  useEffect(() => {
    if (listUser.length === 0) {
      alert("Danh sách người dùng sẽ rỗng");
    } else if (listUser.length > 10) {
      alert("Danh sách người dùng đã đầy");
    }
  }, [listUser]);

  return (
    <div>
      <div className="form-container">
        <button className="btn-submit" onClick={handleShowHideListUser}>
          {isShowHideListUser ? "Ẩn danh sách" : "Hiện danh sách"}
        </button>
        <button className="btn-delete-all" onClick={handleDeleteAllUser}>
          Xóa tất cả
        </button>
      </div>

      {isShowHideListUser && listUser?.length > 0 && (
        <ul className="user-list">
          {listUser.map((user) => (
            <div key={user.id} className="form-container">
              <li className="user-item">
               Đây là {user.Name} - {user.Age} tuổi
              </li>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="btn-delete"
              >
                Xóa
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayInfor;
