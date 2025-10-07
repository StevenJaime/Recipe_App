import React from 'react'
import Navbar from '../components/Navbar'
import Section from '../Components/Section'

const Home = () => {
  return (
    <div className="home-box">
        <Section name="Recipes of the day" />
        <Section name="Recommended for you" />
        <footer></footer>
    </div>
  )
}

export default Home