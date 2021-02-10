import React from 'react'
import Style from './styles'

const IndexOfAndLastIndexOf: React.FC = () => (
  <Style>
    <div className='header'>
      <h4>IndexOf</h4>
      <span className='code'>{`array.indexOf(any, number?) => number`}</span>
    </div>

    <p>
      Pesquisa o index do primeiro elemento encontrado
      <br />
      array.indexOf(elemento, inicio-da-busca)
    </p>

    <h5>Exemplo:</h5>

    <p className='code'>
      var array = [2, 5, 9, 8, 9, 2, 1, 3, 3]
      <br />
      const index = array.indexOf(2)
      <br />
      const index2 = array.indexOf(9, 3)
      <br />
      <br />
      {`index === 2`}
      {`index2 === 4`}
    </p>

    <hr />

    <div className='header'>
      <h4>Last Index Of</h4>
      <span className='code'>{`array.lastIndexOf(any, number?) => number`}</span>
    </div>

    <p>
      Pesquisa o index do último elemento encontrado
      <br />
      array.lastIndexOf(elemento, inicio-da-busca)
    </p>

    <h5>Exemplo:</h5>

    <p className='code'>
      {`const array = [2, 5, 9, 2]`}
      <br />
      const lastIndex = array.lastIndexOf(2) const lastIndex2 = array.lastIndexOf(2, 2)
      <br />
      {`// lastIndexOf === 3`}
      {`// lastIndexOf2 === 0`}
    </p>
  </Style>
)

export default IndexOfAndLastIndexOf
