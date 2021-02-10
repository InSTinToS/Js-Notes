import { motion } from 'framer-motion'
import styled from 'styled-components'

interface StyleProps {
  width: string
}

interface ContainerProps {
  width: string
  gap: string
}

export const Container = styled(motion.li)<ContainerProps>`
  min-width: ${({ width }) => width};

  & + & {
    margin-left: ${({ gap }) => gap};
  }
`

export const SliderStyle = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: solid green 1px;
`

const Style = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow-x: hidden;
  width: ${({ width }) => width};
  border: solid red 1px;
`

Style.displayName = 'Slider-Style'

export default Style
