import Image from "next/image";
import React, { useEffect, useState } from "react";

const Selector = ({allRole,placeholder}) => {

  const [addRole, setAddRole] = useState("");
  const [showRole, setShowRole] = useState(false);
  const [selectRole, setSelectRole] = useState("");
  const [role, setRole] = useState(allRole);

  const handleInputChange = (e) => {
    setSelectRole(e.target.value);

    if (e.target.value.trim()) {
      setShowRole(true);
    }
    if (e.target.value) {
      //   debugger
      const filterRole = allRole.filter((item) => {
        return item.role.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setRole(filterRole);
    }
    console.log("filterData", filterRole);
  };

  const handleAddRole = (e) => {
    console.log("role==>", role);
    e.preventDefault();
    setRole([...role, { role: addRole }]);
    setAddRole("");
  };

  const handleSelect = (item) => {
    setSelectRole(item.role);
    setShowRole(false);
  };
  useEffect(() => {
    console.log("selectRole", selectRole);
    if (!selectRole) {
      setShowRole(false);
    }
  }, [selectRole]);
  useEffect(() => {
    if (!selectRole) {
      setRole(allRole); 
    }
  }, [selectRole]);
  return (
    <div className="custom-selector">
      <div className="position-relative">
        <input
          type="text"
          placeholder={placeholder}
          className="select-role"
          value={selectRole}
          onChange={(e) => handleInputChange(e)}
          onClick={() => setShowRole(true)}
        />
        <div className="select-search-icon">
          <Image
            src={"/assets/img/search-select.svg"}
            width={"13px"}
            height={"13px"}
          />
        </div>
      </div>
      {showRole && (
        <div className="selector-suggestion">
          <ul>
            {role.map((item, ind) => {
              return (
                <li key={ind} onClick={() => handleSelect(item)}>
                  {item.role}
                </li>
              );
            })}
            {/* <li>Employee</li>
          <li>HR</li> */}
          </ul>
          <div className="add-suggestion">
            <input
              type="text"
              placeholder="Enter role name"
              value={addRole}
              onChange={(e) => setAddRole(e.target.value)}
            />
            <button onClick={(e) => handleAddRole(e)}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;
