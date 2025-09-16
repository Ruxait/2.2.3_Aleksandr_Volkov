import './Circle.css';
import { forwardRef } from "react";
import classNames from 'classnames';

interface Props {
  color: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  tabIndex?: number;
}

export const Circle = forwardRef<HTMLDivElement, Props>(
  ({ color, active, onClick, onKeyDown, tabIndex }, ref) => {
  const myClass = classNames(
    'circle',
    `circle-${color}`,
    active ? `circle-${color}--active` : ''
  );
  return (
    <div
      className={myClass}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
    />
  );
}
)
