import React from 'react'
import './components/ServiceCard'
import './App.css'
import ServiceCard from './components/ServiceCard'

export default function App() {
  return (
    <div>
      <h1>Our Services</h1>
      <ServiceCard
      title= "Full Stack Developer"
      discription= "Can make an APP for you"
      />
      <ServiceCard
      title = "Web Developer"
      discription = "Can make an WEBSITE for you"
      />
    </div>
  )
}
