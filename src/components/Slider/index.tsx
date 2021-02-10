import React, { useState } from 'react'
import Style, { Container, SliderStyle } from './styles'

import Dots from './Dots'

interface ContainerProps {
  component: React.FC
  key: any
}

interface SliderProps {
  containers: ContainerProps[]
  containerWidth?: number
  containerGap?: number
  dotSize?: number
  dotGap?: number
}

const Slider: React.FC<SliderProps> = ({
  containers,
  dotGap = 16,
  dotSize = 16,
  containerWidth = 600,
  containerGap = 24,
}) => {
  const [makeLeftMove, setMakeLeftMove] = useState(false)
  const [makeRightMove, setMakeRightMove] = useState(false)
  const [xValue, setXValue] = useState(0)
  const move = containerWidth + containerGap
  const quantity = containers.length
  const limit = quantity % 2 === 0 ? move * ((quantity - 2) / 2) : move * ((quantity - 1) / 2)

  const onLeftClick = () => {
    xValue > -limit && setXValue(xValue - move)
    setMakeLeftMove(false)
  }

  const onRightClick = () => {
    xValue < limit && setXValue(xValue + move)
    setMakeRightMove(false)
  }

  const onDragged = (event: any, info: any) => {
    const maxSwipeToAnimate = 20000
    const offset = info.offset.x
    const velocity = info.velocity.x
    const swipe = Math.abs(offset) * velocity

    if (swipe < -maxSwipeToAnimate) {
      setMakeLeftMove(true)
      onLeftClick()
    } else if (swipe > maxSwipeToAnimate) {
      setMakeRightMove(true)
      onRightClick()
    }
  }

  return (
    <Style
      className='Wrapper'
      width={`${containerWidth * containers.length + containerGap * (containers.length - 1)}px`}
    >
      <SliderStyle
        className='Slider'
        drag='x'
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragged}
      >
        {containers.map(({ component: Component, key }) => (
          <Container
            className='Container'
            key={key}
            gap={`${containerGap}px`}
            width={`${containerWidth}px`}
            animate={{ x: xValue }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <Component />
          </Container>
        ))}
      </SliderStyle>

      <Dots
        radius={50}
        size={dotSize}
        gap={dotGap}
        quantity={quantity}
        onRightClick={onRightClick}
        onLeftClick={onLeftClick}
        makeLeftTap={makeLeftMove}
        makeRightTap={makeRightMove}
      />
    </Style>
  )
}

export default Slider
