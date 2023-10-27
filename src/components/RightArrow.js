import Arrow from './Arrow';
import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsFillCaretRightFill } from 'react-icons/bs'
import useScreenSmall from '../hooks/useScreenSmall';

//styles
import '../App.css'

export default function RightArrow() {

  const isSmall = useScreenSmall()

  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <BsFillCaretRightFill className={isSmall ? 'arrowsSmallScreen' : 'arrows'}/>
    </Arrow>
  );
}