// ============================================================
// 26 - REACT LEARNING JOURNEY
// The full interactive docs page — converted to React components
// Concepts used: map (file 11), props (file 5), useState (file 1)
// ============================================================

import Chapter from "./Project-1/Chapter";
import Footer from "./Project-1/Footer";
import Hero from "./Project-1/Hero";
import ProjectSection from "./Project-1/ProjectSection";
import "./journey.css"
import { chapters } from "./Project-1/data";



function Journey() {
    return (
        <div className="journey-page">
            {/* Hero section */}
            <Hero />

            {/* All chapters — file 11 map() over data array */}
            {chapters.map((chapter, index) => (
                <Chapter
                    key={chapter.id}
                    chapter={chapter}   // file 5 — passing object as prop
                    index={index}       // file 5 — passing number as prop
                />
            ))}

            {/* Capstone project section */}
            <ProjectSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Journey;