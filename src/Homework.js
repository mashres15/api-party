import React, { Component } from 'react'
import './Homework.css'
import { Route } from 'react-router-dom'
import Weather from './Weather'


class Homework extends Component {
  state = {
    latlon: ''
  }

  handleChange = (ev) => {
    const latlon = ev.currentTarget.value
    this.setState({ latlon })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/homework/${this.state.latlon}`)
  }
  render() {
    return (
      <div className="homework">
        <h2>Know the Weather</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.latlon}
              placeholder="Enter Lat,lon"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Weather</button>
          </div>
        </form>

        <Route path='/homework/:latlon' component={Weather} />
      </div>
      
    )
  }
}

export default Homework