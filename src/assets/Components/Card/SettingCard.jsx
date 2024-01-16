import "./SettingCard.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ProgressCard = () => {
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

  useEffect(() => {
    if (token) {
      fetch("http://130.211.243.37/api/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
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
        })
        .catch((err) => {
          console.error("Error fetching item", err);
        });
    }
  }, [token]);

  const replaceAltImg = (e) => {
    e.currentTarget.src = "./dum.svg";
  };

  const handleChange = () => {
    navigate("/change");
  };

  const handleUpdatePhoto = async (selectedPhoto) => {
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
        navigate("/dashboard");
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
        navigate("/dashboard");
      } else {
        console.error("Error updating profile: " + response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="settCard"
      // style={{
      //   background: `url('Profile-Bg.svg') no-repeat`,
      //   backgroundColor: "#fff",
      // }}
    >
      <Container>
        <Row>
          <Col xs={2} className="passwordChng">
            <div onClick={handlePhotoClick}>
              <a href="#">
                <img src=/*{idPhoto}/>*/"./dum.svg" alt="" onError={replaceAltImg} />
              </a>
              
              <input
                type="file"
                accept=""
                ref={inputRef}
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
            </div>
            <button className="change-btn" onClick={handleChange}>
              CHANGE PASSWORD
            </button>
          </Col>
          <Col xs={8} className="settingInput">
            <form action="" onSubmit={handleUpdate}>
              <Row>
                <Col xs={6}>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="setting-form"
                  />
                  <label htmlFor="email">Email / Phone Number</label>
                  <input
                    type="text"
                    placeholder={email}
                    readOnly={true}
                    className="setting-form"
                  />
                  <br />
                  <label htmlFor="position">Position</label>
                  <br />
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="setting-form"
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="poin">Poin</label>
                  <br />
                  <input
                    type="text"
                    placeholder={`${poin}/300`}
                    readOnly={true}
                    className="setting-form"
                  />
                  <br />
                  <label htmlFor="totalBelajar">Study Time</label>
                  <br />
                  <input
                    type="text"
                    placeholder={totalBelajar}
                    readOnly={true}
                    className="setting-form"
                  />
                  <br />
                  <label htmlFor="bergabungSejak">Join Since</label>
                  <br />
                  <input
                    type="text"
                    placeholder={bergabungSejak}
                    readOnly={true}
                    className="setting-form"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={8} xs={6}>
                  <button type="submit" className="update-btn">
                    SAVE
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProgressCard;
