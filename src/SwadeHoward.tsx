import "./SwadeHoward.css";
import Introduction from "./introduction/Introduction";
import Header from "./header/Header";
import selfie from "./images/selfie.jpg";
import selfieWithCats from "./images/selfie-with-cats.jpg";
import catsOnDesk from "./images/cats-on-desk.jpg";

function SwadeHoward() {
  return (
    <div className="swade-howard">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 d-flex justify-content-center">
            <img className="selfie mw-100" src={selfie} alt="Selfie" />
          </div>
          <div className="col-lg-5 mt-3 mt-lg-0 mx-2">
            <Introduction />
          </div>
        </div>
        <div className="text-center mt-5 title">Colleagues</div>
        <div className="row">
          <div className="col-lg">
              <img
                className="img-responsive mt-3 mt-lg-0"
                width="100%"
                height="auto"
                src={selfieWithCats}
                alt="Selfie with cats"
              />
          </div>
          <div className="col-lg">
          <img
                className="img-responsive mt-4 mt-lg-0"
                width="100%"
                height="auto"
                src={catsOnDesk}
                alt="Cats on desk"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwadeHoward;
