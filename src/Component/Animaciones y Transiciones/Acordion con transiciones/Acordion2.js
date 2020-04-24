import React, { useState, useRef } from 'react'
import propTypes from 'prop-types'
import Arrow from './arrow.svg'

const Acordion = ({title, content, bgColor}) => {

  const [ isExpanded, setExpanded ] = useState(false)
  const contentRef = useRef()

  const panelStyles = {
    background: bgColor,
    color: '#FFF',
    padding: '0.5em 1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none'
    
  }

  const contentStyle = {
    height: isExpanded ? contentRef.current.scrollHeight : 0,
    overflow: 'hidden',
    transition: 'all 200ms ease-out',
    border: `1px solid ${bgColor}`,
    padding: isExpanded ? '1em 0.5em' : '0 0.5em'
  }

  const ImgStyles = {
    width: '18px',
    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
    transition: 'transform 250ms ease'
  }
  

  const handleClick = () => setExpanded(!isExpanded)

  return(
    <div> 
      <div 
        onClick={handleClick}
        style={panelStyles}
      >
        <span>{title}</span>
        <img 
          src={Arrow}
          alt='Flecha'
          style={ImgStyles}
        />
      </div>
      <div
      style={contentStyle}
      ref={contentRef}>
        {content}
      </div>
    </div>
  )
}

Acordion.defaultProps = {
  title: '',
  content: '',
  bgColor: 'purple'
}

Acordion.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  bgColor: propTypes.string,

}
export default Acordion