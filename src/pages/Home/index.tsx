import React from 'react'
import Style from './styles'

import array from './Array'

import Slider from 'components/Slider'

const Home: React.FC = () => {
  return (
    <Style>
      <section>
        <header>
          <h1>Notas do Javascript</h1>
        </header>

        <div className='title'>
          <h2>Métodos de Array</h2>
        </div>

        <Slider containers={array} containerWidth={600} containerGap={24} />
      </section>

      <section>
        <div className='title'>
          <h2>Métodos de String</h2>
        </div>

        <Slider containers={array} containerWidth={600} containerGap={24} />
      </section>
    </Style>
  )
}

export default Home
