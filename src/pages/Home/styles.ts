import styled from 'styled-components'

const Style = styled.main`
  color: ${({ theme }) => theme.colors.white};
  background-image: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.tertiary},${theme.colors.primary})`};

  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    header {
      position: absolute;
      top: 0;

      display: flex;
      align-items: center;

      width: 100%;
      height: 72px;
      padding: 24px;
    }

    .title {
      text-align: center;
      width: 100%;
      padding: 16px;
    }

    .Wrapper {
      width: 100vw;

      .Slider .Container {
        height: 70vh;

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
