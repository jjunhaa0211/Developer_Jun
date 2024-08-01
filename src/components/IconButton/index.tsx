import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface IconButtonProps {
  variant?: 'default' | 'solid';
  Icon: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const IconButton = ({
  variant = 'default',
  Icon,
  onClick,
  disabled = false,
  className,
}: IconButtonProps) => {
  return (
    <StyledIconButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {Icon}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<{ variant: 'default' | 'solid' }>`
  color: var(--ifm-color-home-text-primary);
  height: 48px;
  width: 48px;
  border-radius: 48px;
  padding: 0;
  cursor: pointer;
  font-size: 0;
  
  ${props => props.variant === 'default' && css`
    background: transparent;
    border: 2px solid var(--ifm-color-home-text-primary);
    border-style: solid;

    &:hover {
      border-width: 3px;
    }

    &:active {
      border-width: 4px;
    }
  `}

  ${props => props.variant === 'solid' && css`
    background: var(--ifm-color-home-elevation-01);
    border-width: 0;
    transition: background 300ms ease-out;

    &:hover,
    &:active {
      background: var(--ifm-color-home-elevation-02);
    }

    ${({ theme }) => theme.colorMode === 'dark' && css`
      background: var(--ifm-color-home-elevation-03);

      &:hover,
      &:active {
        background: var(--ifm-color-home-elevation-04);
      }
    `}
  `}
`;

export default IconButton;
