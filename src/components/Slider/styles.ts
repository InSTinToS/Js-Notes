import { motion } from 'framer-motion'
import styled from 'styled-components'

interface SliderStyleProps {
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

export const SliderStyle = styled(motion.ul)<SliderStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
`

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;

  &,
  ${SliderStyle}, ${Container} {
    overflow: hidden;
  }
`

Style.displayName = 'Slider-Style'

export default Style
