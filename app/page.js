import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/section";
import Sidebar from "@/components/sidebar";
import Contact from "@/components/contact"
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
