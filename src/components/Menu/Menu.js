import add from '../../assets/img/add.svg'
import profile from '../../assets/img/profile.svg'
import search from '../../assets/img/search.svg'
import home from '../../assets/img/home.svg'

import './Menu.css'

export default function Menu() {
  return (
    <section className='contMenu'>
      <div className='Menu'>
          <img src={home} alt="Botón de home" />
          <img src={search} alt="Botón de Search" />
          <img src={add} alt="Botón de Add" />
          <img src={profile} alt="Botón de profile" />
      </div>
    </section>
  )
}



