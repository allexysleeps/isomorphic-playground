import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }

  onNameChange = (value) => this.setState({userName: value})

  render() {
    const { userName } = this.state
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={({target}) => this.onNameChange(target.value)}/>
        </div>
        <h3>{`Your name is ${userName}`}</h3>
      </div>
    )
  }
}