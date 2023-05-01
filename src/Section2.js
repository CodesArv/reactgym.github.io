import Carousel from "react-bootstrap/Carousel";
import sliderimg3 from "./asset/slidergym1.webp";
import sliderimg1 from "./asset/slider2.webp";
import sliderimg2 from "./asset/slider3.webp";
import productimg1 from "./asset/gym product.webp";
import productimg2 from "./asset/pro3.jpg";
import product1 from "./asset//R.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 section2-img"
          src={sliderimg3}
          alt="First slide"
        />
        <div className="topheading">
          <div className="shape">
            <h1 className="shape2 animate__animated animate__fadeInTopLeft">
              shape your <span className="ideal">ideal body</span>
            </h1>
            <p className="text1 animate__animated animate__bounce">
              Going to the gym can have many benefits for your health
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 section2-img"
          src={sliderimg2}
          alt="Second slide"
        />
        <div className="topheading">
          <div className="shape">
            <h1 className="shape2 animate__animated animate__fadeInTopLeft">
              transform <span className="ideal">your body</span>
            </h1>
            <p className="text1 animate__animated animate__rotateInDownLeft">
              Going to the gym can have many benefits for your health
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 section2-img"
          src={sliderimg1}
          alt="Third slide"
        />
        <div className="topheading">
          <div className="shape">
            <h1 className="shape2 animate__animated animate__fadeInTopLeft">
              work out<span className="ideal">with us.</span>
            </h1>
            <p className="text1 animate__animated animate__rollIn">
              Going to the gym can have many benefits for your health
            </p>
          </div>
        </div>
      </Carousel.Item>

      {/* gym product */}

      <Carousel.Item>
        <img
          className="d-block w-100 section2-img"
          src={product1}
          alt="Third slide"
        />
        <div className="topheading">
          <div >
            <h1 className="new  animate__animated animate__tada">
              buy our new <br/><span className="ideal">shaker bottel</span>
            </h1>
            <div className="btn-rel">
            <button className="btn-style">buy</button>
          </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 section2-img"
          src={productimg2}
          alt="Third slide"
        />
        <div className="topheading">
          <div className="">
            <h1 className="text-size animate__animated animate__fadeInTopLeft">
              check out our <span className="ideal">new product</span>
            </h1>
          </div>
          <div className="btn-rel">
            <button className="btn11">buy</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
