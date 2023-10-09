import { Link } from 'react-router-dom'
import './style.scss'
import Sect1 from '../../sections/sectHome/sect1'
import Sect2 from '../../sections/sectHome/sect2'
import Sect3 from '../../sections/sectHome/sect3'
import Sect4 from '../../sections/sectHome/sect4'
const Home = () => {
  return (
    <div className='HomeWrapper'>
      <Sect1 />
      <Sect2 />
      <Sect3 />
      <Sect4 />
      <h2>Página</h2>
      <ul style={{padding: 0}}>
        <li style={{listStyle: "none", padding: 5}}><Link to="/user">Usuario</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/employees">Empleados</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/client">Clientes</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/materials">Materiales</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/budget">Presupuestos</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/reception">Recepción</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/providers">Proveedores</Link></li>
        <li style={{listStyle: "none", padding: 5}}><Link to="/clientList">Lista de clientes</Link></li>
      </ul>
    </div>
  )
}

export default Home
