import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];
export default function Header() {
    const description=reactDescription[0];
return (
    <header>
        <img src={reactImg} alt='iconapp'/>
        <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>

)
}