import CoreConcept from '../CoreConcept/CoreConcept';
import {CORE_CONCEPTS} from '../../../data';

export default function Main() {
    return (
      <div>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </div>
    );
}