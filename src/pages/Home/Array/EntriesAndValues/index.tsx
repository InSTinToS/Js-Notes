import React from 'react'
import Style from './styles'

const EntriesAndValues: React.FC = () => {
  return (
    <Style>
      <div className='header'>
        <h4>Entries</h4>
        <span className='code'>{`array.entries() => Array Iterator {}`}</span>
      </div>

      <p>
        Retorna um objeto com chave/valor em um array <br />
        const arrayIterator = array.entries() <br />
        arrayIterator.next().value
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        {`const array = ['a', 'b', 'c']`}
        <br />
        const arrayIterator = array.entries()
        <br />
        {`console.log(arrayIterator.next().value) // [0, "a"]`}
        <br />
        {`console.log(arrayIterator.next().value) // [1, "b"]`}
        <br />
        {`console.log(arrayIterator.next().value) // [2, "c"]`}
        <br />
      </p>

      <hr />

      <div className='header'>
        <h4>Values</h4>
        <span className='code'>{`array.values() => Array Iterator {}`}</span>
      </div>

      <p>
        Retorna um objeto com os valores do array <br />
        const arrayIterator = array.values() <br />
        arrayIterator.next().value
      </p>

      <h5>Exemplo:</h5>

      <p className='code'>
        {`const array = ['a', 'b', 'c']`}
        <br />
        const arrayIterator = array.values()
        <br />
        {`console.log(arrayIterator.next().value) // "a"`}
        <br />
        {`console.log(arrayIterator.next().value) // "b"`}
        <br />
        {`console.log(arrayIterator.next().value) // "c"`}
        <br />
      </p>
    </Style>
  )
}

export default EntriesAndValues
