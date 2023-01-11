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
  return set
 })()


 const noWins = (() => {
  let obj = {}
  data.map((fixture) => {
    Object.keys(fixture.score).reduce((a, e) =>  {
      if (fixture.score[a] === null || fixture.score[e] === null) {
        return null
      } else if (fixture.score[a] > fixture.score[e]){
        (!obj[a]) ? obj[a] = 1 : obj[a] ++
     } else if (fixture.score[a] < fixture.score[e]) {
      (!obj[e]) ? obj[e] = 1 : obj[e] ++
     } else if (fixture.score[a] === fixture.score[e]) return null
    else return null
    })
  })
  return obj
 })()


 const noLoss = (() => {
  let obj = {}
  data.map((fixture) => {
    Object.keys(fixture.score).reduce((a, e) =>  {
      if (fixture.score[a] === null || fixture.score[e] === null) {
        return null
      } else if (fixture.score[a] < fixture.score[e]){
        (!obj[a]) ? obj[a] = 1 : obj[a] ++
     } else if (fixture.score[a] > fixture.score[e]) {
      (!obj[e]) ? obj[e] = 1 : obj[e] ++
     } else if (fixture.score[a] === fixture.score[e]) return null
    else return null
    })
  })
  return obj
 })()

 const noDraws = (() => {
  let obj = {}
  data.map((fixture) => {
    Object.keys(fixture.score).reduce((a, e) => {
      if (fixture.score[a] === null || fixture.score[e] === null) {
        return null
      } else if (fixture.score[a] === fixture.score[e]) {
        (!obj[a]) ? obj[a] = 1 : obj[a] ++
        (!obj[e]) ? obj[e] = 1 : obj[e] ++
      } else return null  
    })
  })
  return obj
 })()

 const goalsFor = (() => {
  let obj = {}
  data.map((fixture) => {
   for (let key in fixture.score) {
     (!obj[key]) ? obj[key] = fixture.score[key] : obj[key] = obj[key] + fixture.score[key]
    }
  })
  return obj
 })()


 const goalsAgainst = (() => {
  let obj = {}
  data.map((fixture) => {
    Object.keys(fixture.score).reduce((a, e) => {
      if (!obj[a] && !obj[e]) {
        obj[a] = fixture.score[e]
        obj[e] = fixture.score[a]
      } else if (obj[a] && !obj[e]) {
        obj[a] += fixture.score[e]
        obj[e] = fixture.score[a]
      } else if (!obj[a] && obj[e]) {
        obj[a] = fixture.score[e]
        obj[e] += fixture.score[a]
      } else if (obj[a] && obj[e]) {
        obj[a] += fixture.score[e]
        obj[e] += fixture.score[a]
      } else ;
    })
  })
  return obj
 })()

 console.log(goalsAgainst)


  return (
    <div>
      App
    </div>
  )
}

export default App