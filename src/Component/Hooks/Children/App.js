import React from 'react'
import { Counter, Title, Button } from './components/Counter'

const App = () => (
  <div>
    <Counter>
      <Title />
      <Button type='increment' />
      <Title>
        {(click) => (
          <div style={{ color: 'purple' }}>
            <h1>{ click }</h1>
          </div>
        )}
      </Title>
      <Button type='decrement' />
    </Counter>
  </div>
)

export default App