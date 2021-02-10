import { motion } from 'framer-motion'
import styled from 'styled-components'

interface StyleProps {
  size: string
  gap: string
}

export const Dot = styled(motion.button).attrs({
  className: 'Dot',
  type: 'button',
})`
  border-radius: 50%;
`

const Style = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;

  ${Dot} {
    width: ${({ size }) => size};
    height: ${({ size }) => size};

    & + ${Dot} {
      margin-left: ${({ gap }) => gap};
    }
  }

  #newLeft,
  #newRight {
    opacity: 0;
  }

  #center {
    transform: scale(1.4);
  }
`
Dot.displayName = 'Dot-Style'
Style.displayName = 'Dots-Style'

export default Style
