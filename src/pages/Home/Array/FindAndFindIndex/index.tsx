import React from 'react'
import Style from './styles'

const FindAndFindIndex: React.FC = () => {
  return (
    <Style>
      <div className='header'>
        <h4>Find</h4>
        <span className='code'>{`array.find((any, number?, []?) => {} ) => any`}</span>
      </div>

      <p>
        Econtra o primeiro elemento que satisfaz a condição. <br />
        {`array.find((elemento, index-atual, array-sendo-pesquisado) => {})`}
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        const array = [5, 12, 8, 130, 44]
        <br />
        {`const foundValue = array1.find(element => element > 10)`}
        {`const foundIndex = array1.findIndex(element => element > 10)`}
        <br />
        {`// foundValue === 12`}
        {`// foundIndex === 1`}
      </p>
    </Style>
  )
}

export default FindAndFindIndex
