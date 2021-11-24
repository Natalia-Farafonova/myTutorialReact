// import Paiting from "./components/Painting";
import PaitingList from "./components/PaintingList";
import data from "./paintings.json";
import Section from "./components/Section";

export default function App() {

  
  
  return <div>

    {<Section title="Топ недели">{
      
      data.map(dat => (
      <PaitingList items={data}/>
      
    ))} </Section>}
    {<Section/>}

    {/* {
      
      data.map(dat => (
      <PaitingList items={data}/>
      
    ))} */}
    
   
  </div>;
}


// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//       </Section>

//       <Section title="Лучшее"></Section>
//     </div>
//   );
// }
