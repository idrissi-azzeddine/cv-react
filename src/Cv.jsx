import {
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import { useSelector } from "react-redux";

const Cv = () => {
  const pro = useSelector((state) => state.profil);
  const pro1 = useSelector((state) => state.profil.length);
  const href = useHref("/");
  useEffect(() => {
    const button = document.getElementById("print-button");
    button.addEventListener("click", function () {
      window.print();
    });
  }, []);
  return (
    <div
      className="bg-light h-100 w-100 mt-5 pri container-fluid border-1 border-dark "
      id="first"
    >
      <Link to={href}>
        <MDBBtn
          className="mt-2 position-absolute top-0 start-0 btn btn-primary ms-2 bg-secondary text-light"
          id="print"
          color="light"
        >
          <MDBIcon fas icon="arrow-left" /> Back
        </MDBBtn>
      </Link>
      <MDBBtn
        className="m-2 position-absolute top-0 end-0 fixed"
        id="print-button"
        color="primary"
      >
        <MDBIcon fas icon="arrow-down" />
      </MDBBtn>
      {pro1 && console.log("kayn")}
      {pro.map((item, index) => {
        return (
          <div key={index}>
            {item.fname && (
              <MDBRow className="d-flex justify-content-evenly flex-row hea">
                <MDBCol md="4" className="">
                  {item.photo && (
                    <MDBCardImage
                      src="https://imageproxy-v2.services.lokalebasen.dk/h1080/global/assets/1345225/7520629-30-f-menara-kadin-jl-h-r-rasuna-said-block-x-5-kav-2-3.jpg?v=1552482702"
                      className="img-fluid rounded w"
                    />
                  )}
                </MDBCol>
                <MDBCol md="4" className="mt-4 mz">
                  {item.fname && (
                    <MDBTypography
                      tag="h3"
                      className="mt-3 text-danger text-uppercas"
                    >
                      {" "}
                      {item.fname} {item.lname}{" "}
                    </MDBTypography>
                  )}
                  <small className="text-uppercas khl">
                    {" "}
                    Developpement Digital{" "}
                  </small>
                </MDBCol>
              </MDBRow>
            )}

            {item.email && (
              <MDBRow className="d-flex justify-content-evenly flex-row">
                <MDBCol md="4" className="">
                  <MDBCardImage
                    src="https://imageproxy-v2.services.lokalebasen.dk/h1080/global/assets/1345225/7520629-30-f-menara-kadin-jl-h-r-rasuna-said-block-x-5-kav-2-3.jpg?v=1552482702"
                    className="img-fluid rounded d-none w "
                  />
                </MDBCol>
                <MDBCol md="4" className="">
                  <div className="d-flex flex-wrap">
                    <div className="m-2">
                      <i className="fa-solid fa-tty"></i> {item.fix}
                    </div>
                    <div className="m-2">
                      <i className="fa-solid fa-globe"></i> Maroc
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="m-2">
                      <i className="fa-solid fa-phone"></i> {item.tele}
                    </div>
                    <div className=" m-2">
                      <i className="fa-solid fa-envelope"></i> {item.email}
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            )}

            {item.message && (
              <MDBRow className="d-flex justify-content-evenly flex-row">
                <MDBCol md="4" className="tp">
                  <p className="text-uppercas pt-3 fw-bold border-1 border-dark khl ">
                    {" "}
                    <i className="fa-solid fa-minus khl"></i> RÉSUMÉ{" "}
                  </p>
                </MDBCol>
                <MDBCol md="4" className="border-bottom border-dark border-1">
                  <MDBTypography tag="p" className="pt-3 text-wrap">
                    {" "}
                    {item.message}{" "}
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            )}

            {item.carrière && (
              <MDBRow className="d-flex justify-content-evenly flex-row">
                <MDBCol md="4" className="tp">
                  <p className="text-uppercas pt-3 fw-bold khl">
                    {" "}
                    <i className="fa-solid fa-minus khl"></i> CARRIÈRE{" "}
                  </p>
                </MDBCol>
                <MDBCol md="4" className="border-bottom border-dark border-1">
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="mt-2 fw-bold khl">
                        {" "}
                        {item.année}{" "}
                      </MDBTypography>
                    </div>
                    <div className="ms-2">
                      <MDBTypography tag="p" className="mt-2 text-wrap">
                        {" "}
                        {item.carrière}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="fw-bold khl">
                        {" "}
                        {item.année2}{" "}
                      </MDBTypography>
                    </div>
                    <div className="ms-2">
                      <MDBTypography tag="p" className="text-wrap">
                        {" "}
                        {item.carrière2}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="fw-bold khl">
                        {" "}
                        {item.année3}{" "}
                      </MDBTypography>
                    </div>
                    <div className="ms-2">
                      <MDBTypography tag="p" className="text-wrap">
                        {" "}
                        {item.carrière3}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            )}

            {item.parcour && (
              <MDBRow className="d-flex justify-content-evenly flex-row">
                <MDBCol md="4" className="tp">
                  <p className="text-uppercas pt-3 khl fw-bold ">
                    {" "}
                    <i className="fa-solid fa-minus khl"></i> PARCOURS SCOLAIRE{" "}
                  </p>
                </MDBCol>
                <MDBCol md="4" className="border-bottom border-dark border-1">
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="mt-2 fw-bold khl">
                        {" "}
                        {item.annéep}{" "}
                      </MDBTypography>
                    </div>
                    <div className="ms-2">
                      <MDBTypography tag="p" className="mt-2 text-wrap">
                        {" "}
                        {item.parcour}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="fw-bold khl">
                        {" "}
                        {item.annéep2}{" "}
                      </MDBTypography>
                    </div>
                    <div className="ms-2">
                      <MDBTypography tag="p" className="text-wrap">
                        {" "}
                        {item.parcour2}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="fw-bold khl">
                        {" "}
                        {item.annéep3}{" "}
                      </MDBTypography>
                    </div>
                    <div className="ms-2 ">
                      <MDBTypography tag="p" className="text-wrap">
                        {" "}
                        {item.parcour3}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            )}

            {item.compétence && (
              <MDBRow className="d-flex justify-content-evenly flex-row">
                <MDBCol md="4" className="tp rounded-">
                  <p className="text-uppercas pt-3 fw-bold khl">
                    {" "}
                    <i className="fa-solid fa-minus khl"></i> COMPETENCES{" "}
                  </p>
                </MDBCol>
                <MDBCol md="4" className="">
                  <div className="d-flex flex-wrap">
                    <div className="ms-2">
                      <MDBTypography tag="p" className="mt-2 text-wrap">
                        {" "}
                        {item.compétence}{" "}
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cv;
