import { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import WhiteNav from "../Components/Navbar/WhiteNav/WhiteNav";
import { useNavigate } from "react-router-dom";
import "../Components/Card/SettingCard.css";

const ProfileSetting = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const poin = localStorage.getItem("poin");
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [totalBelajar, setTotalBelajar] = useState("");
  const [bergabungSejak, setBergabungSejak] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [editNameBtn, setEditNameBtn] = useState(false);

  const toggleEditName = () => {
    setEditNameBtn(!editNameBtn);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    toggleEditName();
  };

  const handlePhotoClick = () => {
    inputRef.current.click();
  };

  const extractBase64 = (dataURL) => {
    const prefix = "data:image/png;base64,";
    if (dataURL.startsWith(prefix)) {
      return dataURL.substr(prefix.length);
    }
    return dataURL;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = extractBase64(e.target.result);
        console.log(base64Image);
        setSelectedPhoto(base64Image);
        handleUpdatePhoto(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("http://130.211.243.37/api/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.metaData && data.metaData.code === 200) {
        setName(data.data.name);
        setEmail(data.data.email);
        setPosition(data.data.posisi);
        setTotalBelajar(data.data.totalSesiBelajar);
        setBergabungSejak(data.data.bergabungSejak);
        setIdPhoto(data.data.idPhoto);
      } else {
        console.error("API returned an error:", data.metaData.message);
      }
    } catch (err) {
      console.error("Error fetching item", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const replaceAltImg = (e) => {
    e.currentTarget.src = "./dum.jpg";
  };

  const handleChange = () => {
    navigate("/change");
  };

  const handleUpdatePhoto = async (e, selectedPhoto) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePicture", selectedPhoto);

    try {
      const response = await fetch(
        "http://130.211.243.37/api/profile/update-picture",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        navigate("/setting");
      } else {
        console.error("Error updating profile picture", response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!token) {
      navigate("/login");
      return;
    }

    const profileData = {
      name: name,
      email: email,
      position: position,
    };

    try {
      const response = await fetch("http://130.211.243.37/api/profile/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        fetchUserProfile();
        toggleEditName();
      } else {
        console.error("Error updating profile: " + response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="dashboard"
      style={{
        backgroundColor: "#FFFFFF",
        height: "100vh",
        background: `url('bg_red_1 1.svg') no-repeat `,
        backgroundPosition: "center top 60px",
        backgroundSize: "100% 156px",
      }}
    >
      <WhiteNav />

      <div className="settCard">
        <Row>
          <Col xs={2} className="passwordChng">
            <div onClick={handlePhotoClick}>
              <a href=".">
                <img
                  src=/*{idPhoto}/>*/ "./dum.svg"
                  alt=""
                  onError={replaceAltImg}
                />
              </a>
              <input
                type="file"
                accept=""
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
            </div>
          </Col>
          <Col xs={8} className="settingInput my-auto">
            <div className="d-flex justify-content-between">
              <div>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBotoom: "0"
                  }}
                >
                  {name}
                </p>
              </div>
              <button
                className="change-btn shadow"
                onClick={(e) => {
                  e.preventDefault();
                  handleChange();
                }}
              >
                CHANGE PASSWORD
              </button>
            </div>
          </Col>
        </Row>
        <form
          action=""
          onSubmit={handleUpdate}
          className="my-5"
          style={{ marginLeft: "100px" }}
        >
          <Row>
            <Col xs={6} className="px-2 ">
              <p className="profile-title">Profile</p>
              <label htmlFor="name" className="label">
                Nama
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="setting-form"
                readOnly={!editNameBtn}
                style={
                  !editNameBtn
                    ? { marginLeft: "160px", outline: "none" }
                    : {
                        marginLeft: "160px",
                        backgroundColor: "#F5F6F8",
                        autoFocus: true,
                        outline: "none",
                      }
                }
              />
              {!editNameBtn ? (
                <a
                  href="."
                  onClick={(e) => {
                    e.preventDefault();
                    toggleEditName();
                  }}
                  style={{
                    textDecoration: "none",
                    color: "#E82827",
                    fontWeight: "600",
                    fontSize: "14px",
                    marginLeft: "-10px",
                  }}
                >
                  Edit
                </a>
              ) : null}
              <br />
              <label htmlFor="email" className="label">
                Email / Nomor Telepon
              </label>
              <input
                type="text"
                placeholder={email}
                readOnly={true}
                className="setting-form"
                style={{ marginLeft: "28px" }}
              />
              <br />
              <label htmlFor="position" className="label">
                Posisi
              </label>
              <input
                type="text"
                placeholder={position}
                //onChange={(e) => setPosition(e.target.value)}
                className="setting-form"
                readOnly={true}
                style={{ marginLeft: "165px" }}
              />
              <br />
              <label htmlFor="bergabungSejak" className="label">
                Bergabung Sejak
              </label>
              <input
                type="text"
                placeholder={bergabungSejak}
                readOnly={true}
                className="setting-form"
                style={{ marginLeft: "75px" }}
              />
            </Col>
            <Col xs={6}>
              <p className="profile-title">Achievement</p>
              <label htmlFor="poin" className="label">
                Poin
              </label>
              <input
                type="text"
                placeholder={`${poin}`}
                readOnly={true}
                className="setting-form"
                style={{ marginLeft: "155px" }}
              />
              <br />
              <label htmlFor="totalBelajar" className="label">
                Study Time
              </label>
              <input
                type="text"
                placeholder={totalBelajar}
                readOnly={true}
                className="setting-form"
                style={{ marginLeft: "100px" }}
              />
              <br />
              <label htmlFor="bergabungSejak" className="label">
                Completed Module
              </label>
              <input
                type="text"
                placeholder="5"
                readOnly={true}
                className="setting-form"
                style={{ marginLeft: "35px" }}
              />
              <br />
              <label htmlFor="bergabungSejak" className="label">
                Level
              </label>
              <input
                type="text"
                placeholder="Basic"
                readOnly={true}
                className="setting-form"
                style={{ marginLeft: "150px" }}
              />
            </Col>
          </Row>
          {editNameBtn ? (
            <Row className="d-flex justify-content-end" style={{}}>
              <Col xs={6} className="my-3">
                <div
                  className="d-flex justify-content-end"
                  style={{ marginRight: "56px" }}
                >
                  <button
                    className="profile-save-btn profile-btn"
                    type="button"
                    onClick={handleCancel}
                  >
                    CANCEL
                  </button>
                  <button
                    className="profile-cancel-btn profile-btn"
                    type="submit"
                  >
                    SAVE
                  </button>
                </div>
              </Col>
            </Row>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
