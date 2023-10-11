import "./styles.scss";
import Title from "../../../common/titleBar";

const Sect2 = () => {


return (

    <section className="section2">

      <div className="block">
        <Title text={"Pasos a seguir para reparar tu electrodoméstico"} />




<div className="bl1">
   <p > 1<br /> Contactános a través del <br />formulario, deja tus datos y <br />describí brevemente la situación.<br /> También podes contactarnos a <br /> través del whatsapp</p>
   </div>    



   <div className="bl2">
   <p> 2<br />Quedáte atento al correo que de <br />inmediato de responderemos con<br /> un numero de ticket y los días <br /> disponibles para una visita, si es<br /> necesaria. Te indicaremos las <br />formas de pago para agendar la <br />visita.</p>
   </div>    


   <div className="bl3">
   <p> 3<br />Una vez recibida tu confirmación,<br /> recibirás un correo con los datos <br />del técnico que te visitará.<br /> Si decidís traer el equipo, te <br />aseguramos el diagnóstico el<br /> mismo día!</p>
   </div>      

     



 


      </div>


    </section>
  );
};

export default Sect2;
