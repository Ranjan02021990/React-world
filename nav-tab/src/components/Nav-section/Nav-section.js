import TabButton from "../TabButton/TabButton.js";
import { useState } from "react";
import "./Nav-section.css";
import { EXAMPLES } from "../../data.js";

export default function NavSectionContent() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  let tabContent = "Please click a button";
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleSelect("components")}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
        <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
      </menu>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </section>
  );
}
