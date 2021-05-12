import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as SpringIcon } from './img/spring.svg';
import { ReactComponent as SummerIcon } from './img/summer2.svg';
import { ReactComponent as AutumnIcon } from './img/autumn.svg';
import { ReactComponent as WinterIcon } from './img/winter.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  margin-right: 10px;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 3rem;

  svg {
    height: auto;
    width: 3rem;
    transition: all 0.3s linear;
    
    // spring icon
    &:first-child {
      transform: ${({ themeName }) => themeName === 'spring' ? 'translateY(0)' : 'translateY(-100px)'};
    }

    // summer icon
    &:nth-child(2) {
        transform: ${({ themeName }) => themeName === 'summer' ? 'translateY(0)' : 'translateY(-100px)'};
    }

    // autumn icon
    &:nth-child(3) {
        transform: ${({ themeName }) => themeName === 'autumn' ? 'translateY(0)' : 'translateY(-100px)'};
    }
    
    // winter icon
    &:nth-child(4) {
      transform: ${({ themeName }) => themeName === 'winter' ? 'translateY(0)' : 'translateY(-100px)'};
    }

  }
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer themeName={theme} onClick={toggleTheme} >
            <SpringIcon />
            <SummerIcon />
            <AutumnIcon />
            <WinterIcon />
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    toggleTheme: func.isRequired,
    theme: string.isRequired,
}

export default Toggle;