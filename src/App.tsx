import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <section className="">
        <Navbar />
        <Hero />
      </section>
      <section id="Homepage" className="">
        Parallax
      </section>
      <section id="Services" className="">
        Services
      </section>
      <section id="Portfolio" className="">
        Portfolio
      </section>
      <section id="Contact" className="">
        Contact
      </section>
      <section className="">Port</section>
      <section className="">folio</section>
    </>
  );
};
export default App;
