import styled from 'styled-components'

const Style = styled.main`
  width: 100vw;

  color: ${({ theme }) => theme.colors.white};
  background-image: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.tertiary}, ${theme.colors.primary})`};

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
    width: 100vw;

    header {
      position: absolute;
      top: 0;

      display: flex;
      align-items: center;

      width: 100%;
      height: 72px;
    }

    .title {
      text-align: center;
      width: 100vw;
    }

    .Wrapper {
      .Slider .Container {
        height: 70vh;
        padding: 16px;

        color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.white};
        border: solid 8px ${({ theme }) => theme.colors.quaternary};
      }
    }

    .Dots {
      margin-top: 24px;

      .Dot {
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

export default Style

Style.displayName = 'Home-Style'
