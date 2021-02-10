import React from 'react'
import Style from './styles'

import ArrayMap from 'pages/Home/Array/Map'

import Slider from 'components/Slider'

const array = [
  {
    component: ArrayMap,
    key: 'array.map',
  },
  {
    component: ArrayMap,
    key: 'array.maps',
  },
  {
    component: ArrayMap,
    key: 'array.mapss',
  },
]

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
