"use client";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsHero from "@/src/components/ProjectsHero";
import ProjectsGrid from "@/src/components/ProjectsGrid";
import Contact from "@/src/components/contact";
import TaglineBar from "@/src/components/TaglineBar";

export default function Projects() {
  return (
    <>
      <Navbar activeSection="projects" />

      <main style={{ overflowX: "hidden", width: "100%", background: "#ffffff" }}>
        <ProjectsHero />
          {/* <TaglineBar /> */}
        <div id="work">
          <ProjectsGrid />
        </div>
      </main>

      {/* <Contact /> */}
      <Footer />
    </>
  );
}
