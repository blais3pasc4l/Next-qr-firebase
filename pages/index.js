import { StyleForm } from "../styles/form";
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../components/Footer";
export default function Home(message) {
  return (
    <StyleForm>
      <br/>
      <ul>
      <li className="text-center nav-home">
        <Link href="/login">Inicia sesión</Link>
      </li>
      </ul>

      <br />

      <h1 className="text-center text-title-init">
        Generador De QR Gratis
      </h1>
      <br />

      <section className="margenes-laterales">
        <h2 className=" text-center register-text">
          Creado para Restaurantes, Bares, & Cafés
          Sube tu menú y descarga tu código QR
        </h2>
      </section>
      <br />
      <section className="image-home">
        <Image
          src="/image/menu.png"
          width={260}
          height={490}
        /></section>


      <br />


      <Footer/>
      
    </StyleForm>
  );
}
