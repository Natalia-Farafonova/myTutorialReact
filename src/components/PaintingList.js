import Paiting from "./Painting";
import PropTypes from 'prop-types';

function PaitingList({ items }) {
  return (
  <ul>
    {items.map(item => (<li key ={item.id}>
  <Paiting
        
      url={item.url}
  title={item.title}
  price={item.price}
  authorname = {item.author.tag}
      profileUrl={item.author.url}
      quantyty={item.quantity}
  
    />
</li>))}
  </ul>)
}

PaitingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
}))
}

export default PaitingList;

// import Painting from './Painting';
// import PropTypes from 'prop-types';

// function PaintingList({ items }) {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Painting
//             imageUrl={item.url}
//             title={item.title}
//             author={item.author.tag}
//             profileUrl={item.author.url}
//             price={item.price}
//             quantity={item.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// PaintingList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default PaintingList;
