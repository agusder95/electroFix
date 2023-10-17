import "./styles.scss";
import Title from "../../../common/titleBar";
import img from "../../../../assets/images/home/map-icon.png";

const Sec4 = () => {
  return (
    <section className="section4">
      <div className="block">
        <Title text={"Cobertura de nuestros servicios"} />

        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Sec4;
