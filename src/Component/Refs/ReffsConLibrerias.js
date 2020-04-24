import React, { Component } from 'react'
import Chart from 'chart.js'

class Graficas extends Component {
  
  grafica = React.createRef()

  componentDidMount () {
    // var ctx = document.getElementById('myChart').getContext('2d');
    const ctx = this.grafica.current.getContext('2d')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [2, 10, 12, 6, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',                                //En este ejemplo importamos una libreria de JS puro
                  'rgba(54, 162, 235, 0.2)',                                // y lo adaptamos para que funcione con react
                  'rgba(255, 206, 86, 0.2)',                                // poniendo el elemento canvas del html en el render
                  'rgba(75, 192, 192, 0.2)',                                // remplazando los getElementById por react.refs
                  'rgba(153, 102, 255, 0.2)',                               // y siempre en las refs poner .current para agarrar
                  'rgba(255, 159, 64, 0.2)'                                 // el elemento actual de esa ref
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    })
  }

  render () {
    return (
      <div>
        <canvas
          ref={this.grafica}
          width='400'
          height='400'
        ></canvas>
      </div>
    )
  }
}

class App extends Component {

  render () {

    return (
      <div>
        <Graficas />
      </div>
    )
  }
}

export default App
