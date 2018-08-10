import React, {Fragment} from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'

const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

// The Roster component matches one of two different routes
// depending on the full pathname
export const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

export const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)
