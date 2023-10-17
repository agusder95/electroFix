import "./styles.scss"

import Title from "../../../common/titleBar";
import img1 from "../../../../assets/images/home/Vector-1.png"
import img2 from "../../../../assets/images/home/Vector-2.png"
import img3 from "../../../../assets/images/home/Vector-3.png"
import img4 from "../../../../assets/images/home/Vector-4.png"


const Sect3 =()=> {
/*
     const images = [
          img1, 
          img2, 
          img3,
          img4
     ]
*/




     return (

          <section className="section3">
      
      
      <div className="block">
            <Title text={"Por qué electroFix ?"}/>
      
      
      
      
      <div className="bl1">

      <img src={img1} alt="" />

      <div className="bl1tit">Garantía</div>



         <p >Garantizamos nuestros trabajos 100%</p>
         </div>    
      
      
      
         <div className="bl2">

         <img src={img2} alt="" />
 
         <div className="bl2tit">Confiabilidad</div>
   

         <p >Nos caracteriza la seriedad y la puntualidad</p>
         </div>    
      
      
         <div className="bl3">
  


         <img src={img3} alt=""/>

         <div className="bl3tit">Eficiencia</div>
                <p >Agilizamos tu trabajo y anticipamos las entregas</p>

         </div>      
      
                 
      
         <div className="bl4">

    
         <img src={img4} alt="" />

              
         <div className="bl4tit">Calidad</div>
                <p >Estamos comprometidos con la calidad desde el primer contacto</p>
                
         </div>      
      
      
      
      
       
      
      
            </div>
      
          </section>
        );
      };

export default Sect3;