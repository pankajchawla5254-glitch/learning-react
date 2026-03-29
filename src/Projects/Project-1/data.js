// data.js — all content lives here, components stay clean

export const chapters = [
  {
    id: "ch1",
    num: "Chapter 01",
    title: "STATE",
    highlight: "MANAGEMENT",
    cards: [
      {
        icon: "🧠", num: "File 01 — 1-state.jsx", title: "useState Basics",
        desc: "Learned how useState holds a value and re-renders the component when updated. Used setName to swap between names on button click.",
        pills: ["useState", "event handler", "re-render"],
        code: `<span class="kw">import</span> { <span class="fn">useState</span> } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">function</span> <span class="fn">State</span>() {
  <span class="kw">const</span> [name, setName] = <span class="fn">useState</span>(<span class="str">"Pankaj"</span>);

  <span class="kw">const</span> <span class="fn">handleClick</span> = () => {
    <span class="fn">setName</span>(<span class="str">"Rohit"</span>); <span class="cmt">// triggers re-render</span>
  };

  <span class="kw">return</span> (
    <span class="tag-c">&lt;div&gt;</span>
      <span class="tag-c">&lt;h2&gt;</span>{name}<span class="tag-c">&lt;/h2&gt;</span>
      <span class="tag-c">&lt;button</span> <span class="prop">onClick</span>={handleClick}<span class="tag-c">&gt;</span>Change<span class="tag-c">&lt;/button&gt;</span>
    <span class="tag-c">&lt;/div&gt;</span>
  );
}`
      },
      {
        icon: "🔢", num: "File 02 — 2-counter.jsx", title: "Counter App",
        desc: "Built a counter with two separate states — one for increase and one for decrease. Each button updates its own state independently.",
        pills: ["multiple states", "increment", "decrement"],
        code: `<span class="kw">const</span> [countincrease, setCountincrease] = <span class="fn">useState</span>(<span class="num">0</span>);
<span class="kw">const</span> [countdecrease, setCountdecrease] = <span class="fn">useState</span>(<span class="num">0</span>);

<span class="cmt">// Two independent states, two handlers</span>
<span class="kw">const</span> <span class="fn">handleIncrease</span> = () => <span class="fn">setCountincrease</span>(countincrease + <span class="num">1</span>);
<span class="kw">const</span> <span class="fn">handleDecrease</span> = () => <span class="fn">setCountdecrease</span>(countdecrease - <span class="num">1</span>);`
      },
      {
        icon: "🔀", num: "File 03 — 3-toggle.jsx", title: "Toggle Components",
        desc: "Used boolean state to conditionally render two different child components. The ! operator flips the boolean on each click.",
        pills: ["boolean state", "conditional render", "ternary"],
        code: `<span class="kw">const</span> [display, setDisplay] = <span class="fn">useState</span>(<span class="kw">true</span>);

<span class="cmt">// ternary renders one of two components</span>
{display ? <span class="tag-c">&lt;Rohit /&gt;</span> : <span class="tag-c">&lt;Pankaj /&gt;</span>}

<span class="tag-c">&lt;button</span> <span class="prop">onClick</span>={() => <span class="fn">setDisplay</span>(!display)}<span class="tag-c">&gt;</span>
  Toggle
<span class="tag-c">&lt;/button&gt;</span>`
      },
      {
        icon: "🌿", num: "File 04 — 4-multipleconditon.jsx", title: "Nested Ternary",
        desc: "Chained multiple ternary conditions to show different JSX based on the counter value — like a switch case in JSX.",
        pills: ["nested ternary", "conditional jsx", "state driven ui"],
        code: `{count === <span class="num">1</span> ? <span class="tag-c">&lt;h1&gt;</span>first<span class="tag-c">&lt;/h1&gt;</span>
  : count === <span class="num">2</span> ? <span class="tag-c">&lt;h1&gt;</span>second<span class="tag-c">&lt;/h1&gt;</span>
  : count === <span class="num">3</span> ? <span class="tag-c">&lt;h1&gt;</span>third<span class="tag-c">&lt;/h1&gt;</span>
  : <span class="tag-c">&lt;h1&gt;</span>No condition<span class="tag-c">&lt;/h1&gt;</span>
}
<span class="cmt">// Tip: use switch or object map for 5+ conditions</span>`
      },
    ]
  },
  {
    id: "ch2",
    num: "Chapter 02",
    title: "PROPS",
    highlight: "& COMPOSITION",
    cards: [
      {
        icon: "📦", num: "File 05 — 5-prop.jsx", title: "Passing Props",
        desc: "Passed objects as props to reuse the User component for 3 different users. Also conditionally rendered Student only when state has a value.",
        pills: ["props", "object props", "conditional render"],
        code: `<span class="kw">let</span> userObj = { name: <span class="str">"Pankaj"</span>, age: <span class="num">24</span>, email: <span class="str">"..."</span> };

<span class="cmt">// Spread the whole object as one prop</span>
<span class="tag-c">&lt;User</span> <span class="prop">user</span>={userObj} <span class="tag-c">/&gt;</span>

<span class="cmt">// Conditional render using &&</span>
{ student && <span class="tag-c">&lt;Student</span> <span class="prop">name</span>={student} <span class="tag-c">/&gt;</span> }`
      },
      {
        icon: "🎁", num: "File 06 — 6-advanceprops.jsx", title: "Children Props & Wrapper",
        desc: "Created a Wrapper component that accepts children — anything placed between its tags renders inside it. Also passed color as a prop to customize styling.",
        pills: ["children prop", "wrapper pattern", "composition"],
        code: `<span class="cmt">// Wraper.jsx receives children</span>
<span class="kw">function</span> <span class="fn">Wraper</span>({ children, color }) {
  <span class="kw">return</span> (
    <span class="tag-c">&lt;div</span> <span class="prop">style</span>={{ background: color }}<span class="tag-c">&gt;</span>
      {children}
    <span class="tag-c">&lt;/div&gt;</span>
  );
}

<span class="tag-c">&lt;Wraper</span> <span class="prop">color</span>=<span class="str">"orange"</span><span class="tag-c">&gt;</span>
  <span class="tag-c">&lt;h1&gt;</span>User Component<span class="tag-c">&lt;/h1&gt;</span>
<span class="tag-c">&lt;/Wraper&gt;</span>`
      },
    ]
  },
  {
    id: "ch3",
    num: "Chapter 03",
    title: "FORMS",
    highlight: "& INPUTS",
    cards: [
      {
        icon: "⌨️", num: "File 07 — 7-getinputvalue.jsx", title: "Controlled Input",
        desc: "Wired an input to state with onChange so every keystroke updates the value live. The clear button resets state to empty string.",
        pills: ["onChange", "e.target.value", "controlled"],
        code: `<span class="kw">const</span> [val, setVal] = <span class="fn">useState</span>(<span class="str">""</span>);

<span class="tag-c">&lt;input</span>
  <span class="prop">value</span>={val}
  <span class="prop">onChange</span>={(e) => <span class="fn">setVal</span>(e.target.value)}
<span class="tag-c">/&gt;</span>

<span class="cmt">// e.target.value = what the user typed</span>
<span class="tag-c">&lt;button</span> <span class="prop">onClick</span>={() => <span class="fn">setVal</span>(<span class="str">""</span>)<span class="tag-c">}&gt;</span>Clear<span class="tag-c">&lt;/button&gt;</span>`
      },
      {
        icon: "📝", num: "File 08 — 8-controlled.jsx", title: "Full Form Control",
        desc: "Managed name, password, and email with separate states. The Clear button resets all three fields at once using multiple state setters.",
        pills: ["form", "multiple state", "clear all"],
        code: `<span class="kw">const</span> [name, setName] = <span class="fn">useState</span>(<span class="str">""</span>);
<span class="kw">const</span> [pass, setPass] = <span class="fn">useState</span>(<span class="str">""</span>);
<span class="kw">const</span> [email, setEmail] = <span class="fn">useState</span>(<span class="str">""</span>);

<span class="cmt">// Clear all at once</span>
<span class="tag-c">&lt;button</span> <span class="prop">onClick</span>={() => {
  <span class="fn">setName</span>(<span class="str">""</span>); <span class="fn">setPass</span>(<span class="str">""</span>); <span class="fn">setEmail</span>(<span class="str">""</span>);
}}<span class="tag-c">&gt;</span>Clear<span class="tag-c">&lt;/button&gt;</span>`
      },
      {
        icon: "☑️", num: "File 09 — 9-checkboxes.jsx", title: "Checkboxes & Arrays",
        desc: "State is an array of selected skills. Checking adds to the array with spread; unchecking filters it out.",
        pills: ["array state", "spread operator", "filter"],
        code: `<span class="kw">const</span> [skills, setSkills] = <span class="fn">useState</span>([]);

<span class="kw">if</span> (e.target.checked) {
  <span class="fn">setSkills</span>([...skills, e.target.value]);
} <span class="kw">else</span> {
  <span class="fn">setSkills</span>(skills.<span class="fn">filter</span>(i => i !== e.target.value));
}`
      },
      {
        icon: "🔘", num: "File 10 — 10-radio.jsx", title: "Radio & Select",
        desc: "Radio buttons use checked={gender == 'male'} to stay in sync with state. Also used a select dropdown for city selection.",
        pills: ["radio buttons", "select dropdown", "controlled"],
        code: `<span class="tag-c">&lt;input</span> <span class="prop">type</span>=<span class="str">"radio"</span>
  <span class="prop">value</span>=<span class="str">"male"</span>
  <span class="prop">checked</span>={gender == <span class="str">"male"</span>}
  <span class="prop">onChange</span>={(e) => <span class="fn">setGender</span>(e.target.value)}
<span class="tag-c">/&gt;</span>

<span class="tag-c">&lt;select</span> <span class="prop">defaultValue</span>=<span class="str">"delhi"</span>
  <span class="prop">onChange</span>={(e) => <span class="fn">setCity</span>(e.target.value)}<span class="tag-c">&gt;</span>
  ...
<span class="tag-c">&lt;/select&gt;</span>`
      },
    ]
  },
  {
    id: "ch4",
    num: "Chapter 04",
    title: "LISTS",
    highlight: "& REUSE",
    cards: [
      {
        icon: "🔁", num: "File 11 — 11-loop.jsx", title: "Map in JSX",
        desc: "Used JavaScript's .map() to loop through arrays and render JSX for each item. The key prop helps React track items efficiently.",
        pills: [".map()", "key prop", "dynamic list"],
        code: `<span class="kw">const</span> items = [<span class="str">"one"</span>, <span class="str">"two"</span>, <span class="str">"three"</span>];

items.<span class="fn">map</span>((item, index) => (
  <span class="tag-c">&lt;li</span> <span class="prop">key</span>={index}<span class="tag-c">&gt;</span>{item}<span class="tag-c">&lt;/li&gt;</span>
))

<span class="cmt">// key must be unique — prefer item.id over index</span>`
      },
      {
        icon: "♻️", num: "File 12 — 12-reuse.jsx", title: "Reusable Components",
        desc: "Mapped through a students array and passed each object to a reusable User card component. One component, infinite uses.",
        pills: ["component reuse", "data driven", "key={item.id}"],
        code: `<span class="kw">const</span> students = [
  { id: <span class="num">1</span>, name: <span class="str">"pankaj"</span>, role: <span class="str">"QA intern"</span> },
  { id: <span class="num">2</span>, name: <span class="str">"rohit"</span>, role: <span class="str">"QA intern"</span> },
];

students.<span class="fn">map</span>((item) => (
  <span class="tag-c">&lt;User</span> <span class="prop">key</span>={item.id} <span class="prop">data</span>={item} <span class="tag-c">/&gt;</span>
))`
      },
    ]
  },
  {
    id: "ch5",
    num: "Chapter 05",
    title: "USE",
    highlight: "EFFECT & LIFECYCLE",
    cards: [
      {
        icon: "⚡", num: "File 13 — 13-useEffect.jsx", title: "useEffect Hook",
        desc: "useEffect runs a side-effect when dependencies change. Watched both counter and data — effect fires only when those values update.",
        pills: ["useEffect", "dependency array", "side effects"],
        code: `<span class="cmt">// Runs after render when [counter] or [data] changes</span>
<span class="fn">useEffect</span>(() => {
  <span class="fn">counterFunction</span>();
}, [counter, data]);

<span class="cmt">// [] = runs once on mount
// [val] = runs when val changes
// no array = runs on every render</span>`
      },
      {
        icon: "🔗", num: "File 14 — 14-propsEffect.jsx", title: "Props + useEffect",
        desc: "Passed props to a Counter child and watched them change via useEffect inside the child component.",
        pills: ["props change", "child useEffect", "parent-child"],
        code: `<span class="cmt">// Parent sends count & data as props</span>
<span class="tag-c">&lt;Counter</span> <span class="prop">count</span>={count} <span class="prop">data</span>={data} <span class="tag-c">/&gt;</span>

<span class="cmt">// Inside Counter.jsx</span>
<span class="fn">useEffect</span>(() => {
  console.<span class="fn">log</span>(<span class="str">"prop changed!"</span>, count);
}, [count, data]);`
      },
      {
        icon: "🔄", num: "File 15 — 15-lifecycle.jsx", title: "Component Lifecycle",
        desc: "Learned all 3 phases: mounting, updating, and unmounting. The cleanup function returned from useEffect runs on unmount.",
        pills: ["mount", "update", "unmount", "cleanup"],
        code: `<span class="fn">useEffect</span>(() => {
  console.<span class="fn">log</span>(<span class="str">"mounted / updated"</span>);

  <span class="kw">return</span> () => {
    <span class="cmt">// cleanup = runs on unmount</span>
    console.<span class="fn">log</span>(<span class="str">"unmounting phase"</span>);
  };
}, [toggle]);`
      },
    ]
  },
  {
    id: "ch6",
    num: "Chapter 06",
    title: "STYLING",
    highlight: "TECHNIQUES",
    cards: [
      {
        icon: "🎨", num: "File 16 — 16-inline.jsx", title: "Inline Styles",
        desc: "Applied styles directly as JS objects using camelCase properties. Quick for one-off styles but harder to maintain for complex UIs.",
        pills: ["style prop", "camelCase", "js object"],
        code: `<span class="tag-c">&lt;h1</span> <span class="prop">style</span>={{
  color: <span class="str">"red"</span>,
  fontSize: <span class="str">"24px"</span>,    <span class="cmt">// not font-size</span>
  backgroundColor: <span class="str">"blue"</span>
}}<span class="tag-c">&gt;</span>Hello<span class="tag-c">&lt;/h1&gt;</span>`
      },
      {
        icon: "🌈", num: "File 17 — 17-dynamicinline.jsx", title: "Dynamic Inline Styling",
        desc: "Stored a style object in state and updated it on button click. Spread operator preserved existing styles while overriding only backgroundColor.",
        pills: ["state object", "spread styles", "dynamic theme"],
        code: `<span class="kw">const</span> [cardTheme, setCardTheme] = <span class="fn">useState</span>({
  border: <span class="str">"1px solid green"</span>,
  width: <span class="str">"200px"</span>,
});

<span class="fn">setCardTheme</span>({ ...cardTheme, backgroundColor: bgColor });

<span class="tag-c">&lt;div</span> <span class="prop">style</span>={cardTheme}<span class="tag-c">&gt;</span>...<span class="tag-c">&lt;/div&gt;</span>`
      },
      {
        icon: "🗂️", num: "File 18 — 18-cssmodule.jsx", title: "CSS Modules",
        desc: "CSS Modules scope class names to the component automatically — no more global class name collisions.",
        pills: ["scoped css", "no collisions", ".module.css"],
        code: `<span class="kw">import</span> styles <span class="kw">from</span> <span class="str">"./UserProfile.module.css"</span>;

<span class="tag-c">&lt;div</span> <span class="prop">className</span>={styles.card}<span class="tag-c">&gt;</span>
  <span class="tag-c">&lt;h2</span> <span class="prop">className</span>={styles.name}<span class="tag-c">&gt;</span>Pankaj<span class="tag-c">&lt;/h2&gt;</span>
<span class="tag-c">&lt;/div&gt;</span>`
      },
      {
        icon: "💅", num: "File 19 — 19-styled.jsx", title: "Styled Components",
        desc: "Used the styled-components library to write real CSS inside template literals. The styled element becomes a real React component.",
        pills: ["styled-components", "template literals", "css-in-js"],
        code: `<span class="kw">import</span> styled <span class="kw">from</span> <span class="str">"styled-components"</span>;

<span class="kw">const</span> Styling = styled.h1<span class="str">\`
  color: red;
  border: 1px solid green;
  width: 200px;
\`</span>;

<span class="tag-c">&lt;Styling&gt;</span>heading1<span class="tag-c">&lt;/Styling&gt;</span>`
      },
      {
        icon: "🅱️", num: "File 20 — 20-bootstrap.jsx", title: "React Bootstrap",
        desc: "Installed and used React Bootstrap for pre-built UI components. Import Button with variants for instant professional styling.",
        pills: ["react-bootstrap", "variants", "component library"],
        code: `<span class="kw">import</span> { Button } <span class="kw">from</span> <span class="str">"react-bootstrap"</span>;

<span class="tag-c">&lt;Button</span> <span class="prop">variant</span>=<span class="str">"danger"</span><span class="tag-c">&gt;</span>Delete<span class="tag-c">&lt;/Button&gt;</span>
<span class="tag-c">&lt;Button</span> <span class="prop">variant</span>=<span class="str">"primary"</span><span class="tag-c">&gt;</span>Submit<span class="tag-c">&lt;/Button&gt;</span>
<span class="tag-c">&lt;Button</span> <span class="prop">variant</span>=<span class="str">"success"</span><span class="tag-c">&gt;</span>Save<span class="tag-c">&lt;/Button&gt;</span>`
      },
    ]
  },
];

export const projectFeatures = [
  { icon: "📋", title: "Add Student Form",   concepts: ["controlled inputs", "useState", "form handling"] },
  { icon: "🃏", title: "Student Cards List", concepts: [".map()", "props", "reusable component"] },
  { icon: "🔍", title: "Filter by Skills",   concepts: ["checkboxes", "array state", "filter()"] },
  { icon: "🌙", title: "Dark / Light Toggle",concepts: ["boolean state", "dynamic inline styles", "toggle"] },
  { icon: "⏱️", title: "Live Clock",         concepts: ["useEffect", "setInterval", "cleanup"] },
  { icon: "🎨", title: "Styled UI",          concepts: ["CSS modules", "styled-components", "bootstrap"] },
];

export const skillBadges = [
  { label: "useState",        accent: "accent1" },
  { label: "Props",           accent: "accent2" },
  { label: "Controlled Forms",accent: "accent3" },
  { label: "Checkboxes",      accent: "accent4" },
  { label: "useEffect",       accent: "accent5" },
  { label: "Lifecycle",       accent: "accent6" },
  { label: ".map() & Keys",   accent: "accent1" },
  { label: "CSS Modules",     accent: "accent2" },
  { label: "Bootstrap",       accent: "accent3" },
  { label: "Dynamic Styles",  accent: "accent4" },
  { label: "Toggle",          accent: "accent5" },
  { label: "Children Props",  accent: "accent6" },
];