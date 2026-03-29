// ProjectSection.jsx
// Concepts: props (file 5), map (file 11)
import { projectFeatures, skillBadges } from "./data";

// accent → CSS variable color & rgba border
const accentMap = {
    accent1: { color: "var(--accent1)", border: "rgba(255,107,53,0.3)" },
    accent2: { color: "var(--accent2)", border: "rgba(0,229,255,0.3)" },
    accent3: { color: "var(--accent3)", border: "rgba(180,77,255,0.3)" },
    accent4: { color: "var(--accent4)", border: "rgba(57,255,20,0.3)" },
    accent5: { color: "var(--accent5)", border: "rgba(255,215,0,0.3)" },
    accent6: { color: "var(--accent6)", border: "rgba(255,61,113,0.3)" },
};

function ProjectSection() {
    return (
        <>
            {/* Header */}
            <div className="section-header" style={{ paddingBottom: "20px" }}>
                <div className="label">🚀 Capstone Project</div>
                <h2>NOW BUILD <span style={{ color: "var(--accent3)" }}>SOMETHING REAL</span></h2>
            </div>

            <div className="project-section">
                <div className="project-banner">
                    <div className="project-inner">
                        <div className="project-tag">PROJECT IDEA</div>
                        <div className="project-title">Student Profile<br />Dashboard</div>
                        <p className="project-desc">
                            A fully interactive student management app that uses every concept
                            you've learned. Add students via a form, filter by skills, toggle
                            cards — no backend needed.
                        </p>

                        {/* Feature cards — file 11 map */}
                        <div className="features-grid">
                            {projectFeatures.map((f) => (
                                <div key={f.title} className="feature-card">
                                    <div className="feature-icon">{f.icon}</div>
                                    <div className="feature-title">{f.title}</div>
                                    <div className="feature-concepts">
                                        Uses{" "}
                                        {f.concepts.map((c) => (
                                            <span key={c}>{c}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* File structure */}
                        <div style={{ marginBottom: "30px" }}>
                            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: "2px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "14px" }}>
                                📁 Suggested File Structure
                            </div>
                            <div className="file-structure">
                                <span className="dir">src/</span><br />
                                &nbsp;&nbsp;<span className="dir">components/</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="file">StudentCard.jsx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← reuse from file 12</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="file">AddStudentForm.jsx</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← controlled inputs (file 8)</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="file">SkillFilter.jsx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← checkboxes (file 9)</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="file">Navbar.jsx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← bootstrap (file 20)</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="file">LiveClock.jsx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← useEffect + cleanup (file 15)</span><br />
                                &nbsp;&nbsp;<span className="new">App.jsx</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">← all wired together</span>
                            </div>
                        </div>

                        {/* Skills map — file 11 map */}
                        <div className="progress-bar-wrap">
                            <div className="progress-label">✅ Skills You Have For This Project</div>
                            <div className="skills-map">
                                {skillBadges.map((badge) => {
                                    const a = accentMap[badge.accent];
                                    return (
                                        <div
                                            key={badge.label}
                                            className="skill-badge"
                                            style={{ color: a.color, borderColor: a.border }}
                                        >
                                            <span className="dot" style={{ background: a.color }}></span>
                                            {badge.label}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectSection;