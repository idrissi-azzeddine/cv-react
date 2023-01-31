import React, { useEffect, useState } from "react";
import { monCv } from "./action";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBTextArea,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Sect() {
  const pro = useSelector((state) => state.profil);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    age: "",
    email: "",
    tele: "",
    fix: "",
    site: "",
    année: "",
    carrière: "",
    année2: "",
    carrière2: "",
    année3: "",
    carrière3: "",
    parcour: "",
    parcour2: "",
    parcour3: "",
    annéep: "",
    annéep2: "",
    annéep3: "",
    compétence: "",
    photo: "",
    state: "",
    message: "",
    francais: "",
    anglais: "",
    german: "",
    adress: "",
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormValue((pre) => {
      return {
        ...pre,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      monCv({
        fname: formValue.fname,
        lname: formValue.lname,
        age: formValue.age,
        email: formValue.email,
        tele: formValue.tele,
        fix: formValue.fix,
        site: formValue.site,
        année: formValue.année,
        carrière: formValue.carrière,
        année2: formValue.année2,
        carrière2: formValue.carrière2,
        année3: formValue.année3,
        carrière3: formValue.carrière3,
        parcour: formValue.parcour,
        parcour2: formValue.parcour2,
        parcour3: formValue.parcour3,
        annéep: formValue.annéep,
        annéep2: formValue.année2,
        annéep3: formValue.annéep3,
        compétence: formValue.compétence,
        photo: formValue.photo,
        state: formValue.state,
        message: formValue.message,
        francais: formValue.francais,
        anglais: formValue.anglais,
        german: formValue.german,
        adress: formValue.adress,
      })
    );
  };

  console.log(pro);

  $(document).ready(function () {
    $(".zwei").hide();
    $(".drei").hide();
    $(".fier").hide();
    $(".funf").hide();
    $("#aa").hide();
    var cpt = 0;
    var cpt2 = 0;
    var z = 0;
    var e = false;
    var r = true;
    var d = false;
    $(".inbtn").click(function () {
      cpt = cpt + 1;
      if (cpt > 1) {
        $(".drei").show();
      } else {
        $(".zwei").show();
      }
      if (cpt >= 2) {
        cpt = 0;
      }
    });
    $(".inbtn2").click(function () {
      cpt2 = cpt2 + 1;
      if (cpt2 > 1) {
        $(".funf").show();
      } else {
        $(".fier").show();
      }
      if (cpt2 >= 2) {
        cpt2 = 0;
      }
    });
    $(".hi").click(function () {
      $(".zwei").hide();
    });
    $(".hi2").click(function () {
      $(".drei").hide();
    });
    $(".hi3").click(function () {
      $(".fier").hide();
    });
    $(".hi4").click(function () {
      $(".funf").hide();
    });

    $(".as").click(function () {
      $("#aa").show();
      $(".aq").hide();
      setTimeout(function () {
        navigation("/cv");
      }, 1000);
    });
    $(".zwei").keydown(function () {
      $(".zwei").show();
      $(".zwei").addClass("zwei");
    });
  });

  return (
    <MDBContainer fluid>
      <MDBRow tag="form" className="g-3 aq">
        <MDBCol md="4">
          <MDBInput
            value={formValue.fname}
            name="fname"
            onChange={handleChange}
            id="1"
            required
            label="First name"
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBInput
            value={formValue.lname}
            name="lname"
            onChange={handleChange}
            id="2"
            required
            label="Last name"
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBInput
            value={formValue.age}
            name="age"
            onChange={handleChange}
            id="3"
            required
            label="Age"
          />
        </MDBCol>

        <MDBCol md="6">
          <MDBInput
            value={formValue.email}
            name="email"
            onChange={handleChange}
            id="4"
            required
            label="Email"
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput
            value={formValue.zip}
            name="adress"
            onChange={handleChange}
            id="5"
            required
            label="Adresse"
          />
        </MDBCol>

        <MDBCol md="4">
          <MDBInput
            value={formValue.tele}
            name="tele"
            onChange={handleChange}
            id="6"
            required
            label="Number"
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBInput
            value={formValue.fix}
            name="fix"
            onChange={handleChange}
            id="7"
            required
            label="Fix"
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBFile
            id="8"
            type="file"
            onChange={handleChange}
            value={formValue.photo}
            name="photo"
          />
        </MDBCol>

        <MDBCol md="12">
          <MDBInput
            value={formValue.site}
            name="site"
            onChange={handleChange}
            id="9"
            required
            label="https://beispiel.com/"
          />
        </MDBCol>

        <MDBCol size="12">
          <MDBTextArea
            label="Message"
            id="10"
            name="message"
            value={formValue.message}
            onChange={handleChange}
            rows={4}
          />
        </MDBCol>

        <MDBCol size="2">
          <MDBInput
            value={formValue.année}
            type="number"
            name="année"
            onChange={handleChange}
            id="11"
            required
            label="Année"
          />
        </MDBCol>
        <MDBCol size="9">
          <MDBInput
            value={formValue.carrière}
            name="carrière"
            onChange={handleChange}
            id="12"
            required
            label="carrière"
          />
        </MDBCol>
        <MDBCol
          size="1"
          className="bg-light d-flex align-items-center justify-content-center"
        >
          <MDBBtn
            type="button"
            className="inbtn d-flex justify-content-center align-items-center"
          >
            <i className="fa-solid fa-plus"></i>
          </MDBBtn>
        </MDBCol>

        <MDBCol size="2" className="zwei">
          <MDBInput
            value={formValue.année2}
            type="number"
            name="année2"
            className="zwei"
            onChange={handleChange}
            id="13"
            required
            label="Année"
          />
        </MDBCol>
        <MDBCol size="9" className="zwei">
          <MDBInput
            value={formValue.carrière2}
            name="carrière2"
            className="zwei"
            onChange={handleChange}
            id="14"
            required
            label="carrière"
          />
        </MDBCol>
        <MDBCol size="1" className="zwei"></MDBCol>

        <MDBCol size="2" className="drei">
          <MDBInput
            value={formValue.année3}
            type="number"
            name="année3"
            className="drei"
            onChange={handleChange}
            id="15"
            required
            label="Année"
          />
        </MDBCol>
        <MDBCol size="9" className="drei">
          <MDBInput
            value={formValue.carrière3}
            name="carrière3"
            className="drei"
            onChange={handleChange}
            id="16"
            required
            label="carrière"
          />
        </MDBCol>
        <MDBCol size="1" className="drei"></MDBCol>

        <MDBCol size="2">
          <MDBInput
            value={formValue.annéep}
            type="number"
            name="annéep"
            onChange={handleChange}
            id="17"
            required
            label="Année"
          />
        </MDBCol>
        <MDBCol size="9">
          <MDBInput
            value={formValue.parcour}
            name="parcour"
            onChange={handleChange}
            id="18"
            required
            label="Parcours Scolaire"
          />
        </MDBCol>
        <MDBCol
          size="1"
          className="bg-light d-flex align-items-center justify-content-center"
        >
          <MDBBtn
            type="button"
            className="inbtn2  d-flex justify-content-center align-items-center"
          >
            <i className="fa-solid fa-plus"></i>
          </MDBBtn>
        </MDBCol>

        <MDBCol size="2" className="fier">
          <MDBInput
            value={formValue.annéep2}
            type="number"
            className="fier"
            name="annéep2"
            onChange={handleChange}
            id="19"
            required
            label="Année"
          />
        </MDBCol>
        <MDBCol size="9" className="fier">
          <MDBInput
            value={formValue.parcour2}
            name="parcour"
            className="fier"
            onChange={handleChange}
            id="20"
            required
            label="Parcours Scolaire"
          />
        </MDBCol>
        <MDBCol size="1" className="fier"></MDBCol>

        <MDBCol size="2" className="funf">
          <MDBInput
            value={formValue.annéep3}
            type="number"
            className="funf"
            name="annéep3"
            onChange={handleChange}
            id="21"
            required
            label="Année"
          />
        </MDBCol>
        <MDBCol size="9" className="funf">
          <MDBInput
            value={formValue.parcour3}
            name="parcour"
            className="funf"
            onChange={handleChange}
            id="22"
            required
            label="Parcours Scolaire"
          />
        </MDBCol>
        <MDBCol size="1" className="funf"></MDBCol>

        <MDBCol size="11">
          <MDBInput
            value={formValue.compétence}
            name="compétence"
            onChange={handleChange}
            id="validationCustom05"
            required
            label="Compétences"
          />
        </MDBCol>
        <MDBCol
          size="1"
          className="bg-light d-flex align-items-center justify-content-center"
        >
          <MDBBtn
            type="button"
            className="inbtn  d-flex justify-content-center align-items-center"
          >
            <i className="fa-solid fa-plus"></i>
          </MDBBtn>
        </MDBCol>

        <MDBCol size="12" className="mb-3">
          <p> Les language </p>
          <MDBContainer>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={handleChange.anglais}
                    name="anglais"
                    onChange={handleChange}
                    id="ang"
                  />
                  <label className="form-check-label" htmlFor="ang">
                    {" "}
                    Anglais{" "}
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={handleChange.francais}
                    name="francais"
                    onChange={handleChange}
                    id="fra"
                  />
                  <label className="form-check-label" htmlFor="fra">
                    {" "}
                    Francais{" "}
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={handleChange.german}
                    name="german"
                    onChange={handleChange}
                    id="ger"
                  />
                  <label className="form-check-label" htmlFor="ger">
                    {" "}
                    German{" "}
                  </label>
                </div>
              </li>
            </ul>
          </MDBContainer>
        </MDBCol>

        <MDBCol size="12">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="state"
              defaultChecked={formValue.state}
              onChange={handleChange}
              name="state"
            />
            <label className="form-check-label" htmlFor="state">
              {" "}
              Agree to terms and conditions{" "}
            </label>
          </div>
        </MDBCol>
        <MDBCol size="12">
          <MDBBtn
            type="button"
            className="as"
            onFocus={handleClick}
            id="existing-button"
          >
            {" "}
            Créer mon cv{" "}
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <div
        className="d-flex justify-content-center w-100 h-100 align-items-center mt-5 bg-danger"
        id="aa"
      >
        <MDBSpinner grow id="aa">
          <span className="visually-hidden" id="aa">
            Loading...
          </span>
        </MDBSpinner>
      </div>
    </MDBContainer>
  );
}
