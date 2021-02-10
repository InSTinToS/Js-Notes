import styled from 'styled-components'

const Style = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1.9rem;
  }

  h5 {
    font-size: 1.7rem;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }

  hr {
    margin: 16px 0;
  }

  .header {
    margin-bottom: 16px;
  }

  .code {
    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`

export default Style
