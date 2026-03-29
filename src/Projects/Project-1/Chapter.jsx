// Chapter.jsx
// Concepts: props (file 5), map (file 11)
import Card from "./Card";

// Chapter number → CSS class map
const chClass = { 0: "ch1", 1: "ch2", 2: "ch3", 3: "ch4", 4: "ch5", 5: "ch6" };

function Chapter({ chapter, index }) {
    return (
        <>
            {/* Section header */}
            <div className={`section-header ${chClass[index]}`}>
                <div className="label">{chapter.num}</div>
                <h2>
                    {chapter.title}{" "}
                    <span className="glow-text">{chapter.highlight}</span>
                </h2>
            </div>

            {/* Cards grid — file 11 map */}
            <div className={`chapters ${chClass[index]}`}>
                <div className="chapter">
                    <div className="cards-grid">
                        {chapter.cards.map((card) => (
                            <Card key={card.num} card={card} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="divider"></div>
        </>
    );
}

export default Chapter;