// Card.jsx
// Concepts: useState (file 1) - toggle open/close
import { useState } from "react";

function Card({ card }) {
    const [open, setOpen] = useState(false); // file 1 - local state

    return (
        <div className="card">
            <div className="card-top">
                <div className="card-icon">{card.icon}</div>
                <div>
                    <div className="card-num">{card.num}</div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-desc">{card.desc}</div>
                </div>
            </div>

            {/* Concept pills — file 11 map() */}
            <div className="concept-pills">
                {card.pills.map((pill) => (
                    <span key={pill} className="pill">{pill}</span>
                ))}
            </div>

            {/* Toggle button — file 3 toggle */}
            <button className="card-toggle" onClick={() => setOpen(!open)}>
                <span>{open ? "HIDE CODE" : "VIEW CODE"}</span>
                <span className={`chevron ${open ? "open" : ""}`}>▼</span>
            </button>

            {/* Conditional render — file 3 */}
            {open && (
                <div className="card-code">
                    <pre dangerouslySetInnerHTML={{ __html: card.code }} />
                </div>
            )}
        </div>
    );
}

export default Card;