import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'default' | 'solid';
  children: string | ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  variant = 'default',
  children,
  onClick,
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: 'default' | 'solid', disabled: boolean }>`
  width: fit-content;
  height: 48px;
  cursor: pointer;
  border-radius: ${props => props.variant === 'default' ? '48px' : '8px'};
  color: var(--ifm-color-home-text-primary);
  font-family: inherit;
  font-size: inherit;

  ${props => props.variant === 'default' && css`
    padding-left: 28px;
    padding-right: 28px;
    border: 2px solid var(--ifm-color-home-text-primary);
    background: transparent;

    &:hover {
      border-width: 3px;
      padding-left: 27px;
      padding-right: 27px;
    }

    &:active {
      border-width: 4px;
      padding-left: 26px;
      padding-right: 26px;
    }
  `}

  ${props => props.variant === 'solid' && css`
    padding-left: 1rem;
    padding-right: 1rem;
    border-width: 0;
    background: var(--ifm-color-home-elevation-01);
    transition: background 300ms ease-out;

    &:hover, &:active {
      background: var(--ifm-color-home-elevation-02);
    }

    ${props => props.theme.colorMode === 'dark' && css`
      background: var(--ifm-color-home-elevation-03);

      &:hover, &:active {
        background: var(--ifm-color-home-elevation-04);
      }
    `}
  `}
`;

export default Button;
