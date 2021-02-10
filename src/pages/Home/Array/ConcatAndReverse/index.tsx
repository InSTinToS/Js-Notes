import React from 'react'
import Style from './styles'

const ConcatAndReverse: React.FC = () => {
  return (
    <Style>
      <div className='header'>
        <h4>Concat</h4>
        <span className='code'>{`array.concat(array, array2, arrayN) => []`}</span>
      </div>

      <p>
        Concatena duas ou mais arrays <br />
        array.splice(inicio, n° de elementos para remover, item1, item2, itemN)
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        var num1 = [1, 2, 3];
        <br />
        var num2 = [4, 5, 6];
        <br />
        var num3 = [7, 8, 9];
        <br />
        const newArray = num1.concat(num2, num3);
        <br /> {`// newArray === [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
      </p>

      <hr />

      <div className='header'>
        <h4>Reverse</h4>
        <span className='code'>{`array.reverse(void) => void`}</span>
      </div>

      <p>
        Inverte o array <br />
        array.reverse()
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        const array = [1, 2, 3]; ;
        <br />
        array.reverse()
        <br />
        {`// array === [3, 2, 1]`}
      </p>
    </Style>
  )
}

export default ConcatAndReverse
