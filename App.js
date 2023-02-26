import React from "react"
import Card from "./components/Card.js"
import Header from './components/Header.js'
import data from './data.js'

export default function App() {
    const cards = data.map(arr => {
        return (
            <Card
                key={arr.id}
                {...arr}
            />
        )
    })
    
    return (
        <>
            <Header/>
            <main>
                {cards}
            </main>
        </>
        )
    }