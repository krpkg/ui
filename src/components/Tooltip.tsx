import React, { forwardRef, ReactNode } from 'react';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  coord?: string;
  shortcut?: string;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  coord,
  shortcut,
  className = '',
}) => {
  return (
    <div className={`kz-tooltip-wrapper ${className}`}>
      {children}
      <div className={`kz-tooltip-bubble kz-tooltip-${position}`}>
        <div className="kz-tooltip-content">
          {coord && <span className="kz-tooltip-coord">{coord}</span>}
          <span className="kz-tooltip-text">{content}</span>
          {shortcut && <kbd className="kz-tooltip-shortcut">{shortcut}</kbd>}
        </div>
        <div className="kz-tooltip-arrow" />
      </div>
    </div>
  );
};
