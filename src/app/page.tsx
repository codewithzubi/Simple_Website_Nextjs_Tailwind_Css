import Image from "next/image";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div>
                <Nav />
                <Hero />
                <About/>
                <Services/>
                <Contact/>
                <Footer/>

    </div>
  );
}
