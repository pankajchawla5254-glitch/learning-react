// Hero.jsx
function Hero() {
    return (
        <section className="hero">
            <div className="tag">// learning log — 2026</div>
            <h1>
                <span className="r">R</span>
                <span className="e">E</span>
                <span className="a">A</span>
                <span className="c">C</span>
                <span className="t">T</span>
                <br />
                JOURNEY
            </h1>
            <p className="hero-sub">
                20 components hand-crafted line by line.<br />
                From useState to Bootstrap — documented.
            </p>
            <div className="stats-row">
                <div className="stat">
                    <div className="stat-num" style={{ color: "var(--accent1)" }}>20</div>
                    <div className="stat-label">Files Written</div>
                </div>
                <div className="stat">
                    <div className="stat-num" style={{ color: "var(--accent2)" }}>6</div>
                    <div className="stat-label">Core Concepts</div>
                </div>
                <div className="stat">
                    <div className="stat-num" style={{ color: "var(--accent3)" }}>∞</div>
                    <div className="stat-label">Hours Learned</div>
                </div>
                <div className="stat">
                    <div className="stat-num" style={{ color: "var(--accent4)" }}>1</div>
                    <div className="stat-label">Big Project Ahead</div>
                </div>
            </div>
            <div className="scroll-hint">
                <div className="scroll-line"></div>
                SCROLL
            </div>
        </section>
    );
}

export default Hero;