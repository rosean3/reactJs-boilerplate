import React from 'react';
import { ButtonStyled } from './style';

interface ButtonProps {
  primary: boolean;
  backgroundColor: string;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: () => void;
}

export const Button: React.ElementType = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <ButtonStyled
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonStyled>
  );
};
