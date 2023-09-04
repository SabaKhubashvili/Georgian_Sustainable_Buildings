import React, { memo, MouseEventHandler } from 'react';

interface IconProps {
    svg: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
  
const Icon = ({ svg, className, onClick }: IconProps): JSX.Element => {
    return (
        onClick ? <span className={"w-full " + className} dangerouslySetInnerHTML={{ __html: svg}} onClick={onClick}></span>
        : <span className={"w-full " + className} dangerouslySetInnerHTML={{ __html: svg}}></span>
    )
};

export default memo(Icon);