import backgroundImageForBreakfast from './background.jpg'
import {useState} from "react";

function App() {

  const freshFood = ["Apples","Bananas","Pears","Watermelon","Carrot","Pepper","Cherry","Apricot","Strawberry"];
  const meat = ["Boiled Chicken","Chicken's Steak","Boiled beef sirloin","Fish","Pig's Steak"];
  const salad = ["Greek Salad", "Classic Coleslaw", "Garden Salad", "Southwest Salad","Broccoli"];
  const hotDish = ["Potatoes", "Pasta","Rise", "Fried Vegetables", "Mix Plate"];

  const [state, setState] = useState({
      freshFoodResult: '',
      meatResult: '',
      saladResult: '',
      hotDishResult: '', })

  const randomFreshFood = (freshFood) => {
    setState({...state, freshFoodResult: freshFood[Math.floor(Math.random()*freshFood.length)]});
  };

  const randomMeat = (meat) => {
    setState({...state, meatResult: meat[Math.floor(Math.random()*meat.length)]});
  };

  const randomSalad = (salad) => {
    setState({...state, saladResult:  salad[Math.floor(Math.random()*salad.length)] });
  };

  const randomHotDish = (hotDish) => {
    setState({...state, hotDishResult: hotDish[Math.floor(Math.random()*hotDish.length)] });
  };

  return (
        <div style={{backgroundImage: `url(${backgroundImageForBreakfast})`, backgroundRepeat: 'no-repeat',
          width:'99vw', height:"99vh", backgroundSize:'cover', paddingTop: '80px'}}>
          <h1 style={{ textAlign: "center", color: '#32e1ed'}}>What I Suggest for you today</h1>
          <div style={{ display:"flex", justifyContent: "center", height: '100%' }}>
              <div style={{ marginTop: '10em' }}>
                  <div style={{ marginBottom: 10, }}>
                      <input type="button" onClick={()=>randomFreshFood(freshFood)} value="Fresh Food" style={{
                          background: '#c5fa05', width: '150px', outline:'none', borderRadius:'15px', padding:'10px 15px', cursor:"pointer", color:'#fff',border:'none'
                      }} />
                      <p style={{color:'#c5fa05', textAlign: "center", marginTop: 10, fontWeight: 700}}>{state.freshFoodResult}</p>
                  </div>
                  <div style={{ marginBottom: 10, }}>
                      <input type="button" onClick={()=>randomMeat(meat)} value="Meat" style={{
                          background: '#d90b0b', width: '150px', outline:'none', borderRadius:'15px', padding:'10px 15px', cursor:"pointer", color:'#fff',border:'none'
                      }} />
                      <p style={{color:'#d90b0b', textAlign: "center", marginTop: 10, fontWeight: 700}}>{state.meatResult}</p>
                  </div>
                  <div style={{ marginBottom: 10, }}>
                      <input type="button" onClick={()=>randomSalad(salad)} value="Salad" style={{
                          background: '#4cc92c', width: '150px', outline:'none', borderRadius:'15px', padding:'10px 15px', cursor:"pointer", color:'#fff',border:'none'
                      }} />
                      <p style={{color:'#4cc92c', textAlign: "center", marginTop: 10, fontWeight: 700}}>{state.saladResult}</p>
                  </div>
                  <div style={{ marginBottom: 10, }}>
                      <input type="button" onClick={()=>randomHotDish(hotDish)} value="Hot Dish" style={{
                          background: '#0519fa', width: '150px', outline:'none', borderRadius:'15px', padding:'10px 15px', cursor:"pointer", color:'#fff',border:'none'
                      }} />
                      <p style={{color:'#0519fa', textAlign: "center", marginTop: 10, fontWeight: 700}}>{state.hotDishResult}</p>
                  </div>
              </div>
          </div>
        </div>
  );
}

export default App;
