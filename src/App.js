import React from 'react';
import data from './data';

function App() {
  const [count, setCount] = React.useState(0)
  const [text, setText] = React.useState([])
  const handleClick = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if (count < 1){
      amount = 1;
    } 
    if (count > text.length - 1){
      amount = text.length - 1;
    }
    setText(data.slice(0,amount))
  }
  return (
    <section className="section-center">

      <h3>Boring Lorem Ipsum</h3>
      <form action="" className="lorem-form" onSubmit={handleClick}>
        <label htmlFor="amount">Paragraph:</label>
        <input type="number" id='amount' name='amount' value = {count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className='btn'>Generate</button>
      </form>
      
      <article className="lorem-text">
        {text.map((item,index) => {
          return  <p key={index}>{item}</p>
        })}        
      </article>

    </section>
  );
}

export default App;
