import Arrow from './Arrow';
import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsFillCaretLeftFill } from 'react-icons/bs'
import useScreenSmall from '../hooks/useScreenSmall';

import '../App.css'

export default function LeftArrow() {

  const isSmall = useScreenSmall()

  const { isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <BsFillCaretLeftFill className={isSmall ? 'arrowsSmallScreen' : 'arrows'}/>
    </Arrow>
  );
}

