import React from 'react'
import Style from './styles'

const IncludesAndValues: React.FC = () => (
  <Style>
    <div className='header'>
      <h4>Includes</h4>
      <span className='code'>{`array.includes(any, number) => boolean`}</span>
    </div>

    <p>
      Verifica se possui um elemento na array
      <br />
      array.includes(element)
    </p>

    <h5>Exemplo:</h5>

    <p className='code'>
      const array = [0, 1, 2, 3, 4, 5] <br />
      {`const hasInArray = array.includes(2)`} <br />
      {`const hasInArray = array.includes(2, 3)`} <br />
      {`// hasInArray === true`} <br />
      {`// hasInArray2 === false`}
    </p>

    <hr />

    <div className='header'>
      <h4>Copy Within</h4>
      <span className='code'>{`array.includes(number, number, number?) => void`}</span>
    </div>

    <p>
      Copia uma parte da array e tranpõe para outra parte sem alterar o tamanho
      <br />
      array.(index-para-transpor, index-começo-cópia, index-final-cópia )
    </p>

    <h5>Exemplo:</h5>

    <p className='code'>
      {`const array = ['m', 'i', 'g', 'u', 'e', 'l']`}
      <br />
      array.copyWithin(1, 4, 6)
      <br />
      {`// array === ["m", "e", "l", "u", "e", "l"]`}
    </p>
  </Style>
)

export default IncludesAndValues
