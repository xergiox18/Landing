import React from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks =[
    {
        id:1,
        title:"Inicio",
        Link:"/"
    },
    {
        id:2,
        title:"Nosotros",
        Link:"#"
    }, {
        id:3,
        title:"Contacto",
        Link:"#"
    }, {
        id:4,
        title:"Soporte",
        link:"#"
    },
]

const Navbar = () => {
  return (
    <nav>
      <div>

        <div>
            <img src={Logo} alt='Logo del sitio' className='w-[100px]' />
        </div>

        <div>
            <ul>
                {navbarlinks.map((link) =>(
                    <li key={link.id}>
                        <a href={link.link}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                <li>redes</li>
                <li>redos</li>
            </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
