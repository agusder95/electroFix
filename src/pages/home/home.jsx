
import './style.scss'
import Sect2 from '../../components/sections/sectHome/sect2'
import Sect3 from '../../components/sections/sectHome/sect3'
import Sect4 from '../../components/sections/sectHome/sect4'
import Sect1 from '../../components/sections/sectHome/sect1'
const Home = () => {
  return (
    <div className='HomeWrapper'>
      <Sect1 />
      <Sect2 />
      <Sect3 />
      <Sect4 />
    </div>
  )
}

export default Home
