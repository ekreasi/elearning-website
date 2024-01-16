import { faCaretDown, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://130.211.243.37/api/elearning/module", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.metaData && data.metaData.code === 200) {
            setOptions(data.data);
          } else {
            console.error("API returned an error: ", data.metaData.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className="learnDropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <FontAwesomeIcon icon={faCaretDown} style={{ color: "#375747" }} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((module, index) => (
            <div key={index}>
              <div className="module-title">{module.name}</div>
              {module.subModule && module.subModule.length > 0 && (
                <div className="submodules">
                  {module.subModule.map((submodule, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() => {
                        setSelected(submodule.name, submodule.id);
                        setIsActive(false);
                      }}
                      className={`dropdown-item ${
                        submodule.isAccessible ? "" : "disabled"
                      }`}
                    >
                      {submodule.icon && (
                        <FontAwesomeIcon
                          icon={submodule.icon}
                          className={`dropIcon ${
                            submodule.icon ? "disabled" : ""
                          }`}
                        />
                      )}
                      <span className={submodule.icon ? "disabled" : ""}>
                        {submodule.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
