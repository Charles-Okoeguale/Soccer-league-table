import React from 'react'
import { useState } from 'react'
import { data } from './data'

function App() {

 const listOfTeams = (() => {
  let set = new Set()
  data.forEach((item) => {
    for (let key in item.score) {
      set.add(key)
    }
  })
  return set ?? []
 })()


 const getNoWins = (() => {
  data.forEach((item) => {
    console.log(item.score)
  })
 })()
  return (
    <div>
      App
    </div>
  )
}

export default App