import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    🦄
  </span>
)

class App extends Component {
  state = {
    active: true
  }

  handleChange = (event) => {
    this.setState({
      active: event.target.checked
    })
  }

  render () {
    const { active } = this.state                         // Para hacer un checkbox controlado, lo que debemos hacer es vincularlo
    return (                                              // al state mediante la propiedade "checked" del checkbox, y luego mediante
      <div>                                               {/*un evento onChange, luego en el setState llega el event y debemos poner */}
        <form>                                            {/*event.target.CHECKED */}
          <input
            type="checkbox"
            checked={active}
            onChange={this.handleChange}  
          />
        </form>
        {active && (
          <h1>
            Etiqueta Checkbox <Unicorn />
          </h1>
        )}
      </div>
    )
  }
}

export default App