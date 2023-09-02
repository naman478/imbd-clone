import './App.css';
import Upper from './components/Upper';

let flexBox={
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    flexWrap:"wrap"
}
  
function App() {
  return (
    <div style={flexBox}>
      <Upper/>
    </div>
  );
}

export default App;
