import React from 'react'
import Style from './styles'

const ShiftUnshiftPushPopAndFill: React.FC = () => (
  <Style>
    <div className='header'>
      <h4>Shift, Unshift, Push e Pop</h4>
      <span className='code'>{`array.shift(any) => void`}</span>
    </div>

    <h5>Inicio do array</h5>
    <ul>
      <li>
        <span className='code'>array.shift(item):</span> adiciona no começo.
      </li>

      <li>
        <span className='code'>array.unshift(item):</span> remove do começo.
      </li>
    </ul>

    <hr />

    <h5>Final do array</h5>
    <ul>
      <li>
        <span className='code'>array.push(item):</span> adiciona no final.
      </li>

      <li>
        <span className='code'>array.pop(item):</span> remove do final.
      </li>
    </ul>

    <hr />

    <div className='header'>
      <h4>Fill</h4>
      <span className='code'>{`array.fill(any, number?, number?) => void`}</span>
    </div>

    <p>
      Preenche um array com um novo valor
      <br />
      array.fill(valor, inicio, final)
    </p>

    <h5>Exemplo:</h5>

    <p className='code'>
      const array = [1, 2, 3]
      <br />
      array.fill(4); // [4, 4, 4]
      <br />
      array.fill(4, 1); // [1, 4, 4] <br />
      array.fill(4, 1, 2); // [1, 4, 3]
    </p>
  </Style>
)

export default ShiftUnshiftPushPopAndFill
