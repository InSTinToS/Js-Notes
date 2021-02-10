import React from 'react'
import Style from './styles'

const SpliceAndSlice: React.FC = () => {
  return (
    <Style>
      <div className='header'>
        <h4>Splice</h4>
        <span className='code'>{`array.splice(number, number, any?) => void`}</span>
      </div>

      <p>
        Adicionar e remover elementos no meio do array. <br />
        array.splice(inicio, n° de elementos para remover, item1, item2, itemN)
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        const array = [0, 1, 2, 3, 4, 5] <br />
        {`array.splice(0, 2, 'x', 'y')`} <br />
        {`// array === [x, y, 2, 3, 4, 5]`}
      </p>

      <hr />

      <div className='header'>
        <h4>Slice</h4>
        <span className='code'>{`array.slice(number, number) => []`}</span>
      </div>

      <p>
        Criar um novo array com um corte em outra array. <br />
        array.slice(inicio, fim)
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        const array = [0, 1, 2, 3, 4, 5] <br />
        {`const newArray = array.slice(0, 2)`} <br />
        {`// newArray === [0, 1, 2]`}
      </p>

      <hr />

      <p>
        <b>Obs: </b> O método split é para string.
      </p>
    </Style>
  )
}

export default SpliceAndSlice
