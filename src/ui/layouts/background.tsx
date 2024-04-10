import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  fullscreen?: boolean;
  hidden?: boolean;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`${props.color}
      ${props.fullscreen ? 'min-h-screen' : ''}
      ${props.hidden ? 'overflow-hidden' : ''}
    `}
    style={{ backgroundColor: '#fbfbfb' }}
  >
    {props.children}
  </div>
);

export { Background };
