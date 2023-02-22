import { useState } from 'react'
import AnimalShow from './AnimalShow'
import './App.css'

function getRandomAnimal() {
    const animals = ["cat", "dog", "gator", "horse", "bird"]
    return animals[Math.floor(Math.random()*animals.length)]
}


function App() {
    // 1. using arrow function for event handler, also called callback function 
    // 2. name the function using handle or on + the event name 
    // 3. you can also write the callback directly inline if the code inside the callback is really small 

    // const [count, setCount] = useState(0)
    const [animals, setAnimals] = useState([])
    // map take every element out of an array and pass it to a function 
    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })
    
    const handleClick = () => {
        // setCount(count + 1)
        setAnimals([...animals, getRandomAnimal()])
    }
    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            {/* <div>Number of animals: {count}</div> */}
            <div className='animal-list'>{renderAnimals}</div>
        </div>
    )
}

export default App