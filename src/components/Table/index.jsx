import React from 'react'

function Table({Stats}) {
    const column = [
        {heading: 'Position', value: 'Pos'},
        {heading: 'name', value: 'name'},
        {heading: 'Played', value: 'Played'},
        {heading: 'win', value: 'win'},
        {heading: 'draw', value: 'draw'},
        {heading: 'lost', value: 'lost'},
        {heading: 'Gf', value: 'Gf'},
        {heading: 'Ga', value: 'Ga'},
        {heading: 'Gd', value: 'Gd'},
        {heading: 'Points', value: 'Points'}
    ]
    
    const sorting = (() => {
        const sorted = [...Stats].sort((a, b) => b.Points - a.Points || b.GD - a.GD);
        Stats = sorted
    })()

    const addRank = (() => {
        let counter = 1
        Stats.map((item) => item.Pos = counter ++)
      })()

  return (
    <div>
        <table>
        <thead>
            <tr>
              {column.map((item, pos) => <th key={pos}>{item.heading}</th>)}
            </tr>
        </thead>
            <tbody>
              {Stats.map((item, index) => 
                <tr key={index} className='standings'>
                  {column.map((columnItem, index) => <td key={index}>{item[`${columnItem.value}`]}</td>)}
                </tr>
              )}
            </tbody>
        </table>
    </div>
  )
}

export default Table