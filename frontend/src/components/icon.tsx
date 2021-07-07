
import * as React from 'react'
import { Icon as IconifyIconComponent, IconifyIcon } from '@iconify/react'
import plusCircle from '@iconify-icons/bi/plus-circle'
import close from '@iconify-icons/bi/x-square'

export const ICONS = {
    close,
    plusCircle,
}

export type IconKey = keyof typeof ICONS

interface IconProps extends Omit<IconifyIcon, 'icon'> {
    icon: IconKey
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export const Icon:React.FC<IconProps> = ({ icon, onClick, children, ...iconProps }) => {
    if (onClick) {
        return (
            <button onClick={onClick} css={{
                border: 'none',
                background: 'transparent',
                ':hover': {
                    'svg': {
                        filter: 'drop-shadow( 3px 3px 2px rgba(0,0,0,.7) )',
                    },
                },
            }}>
                <IconifyIconComponent
                    icon={ICONS[icon]}
                    {...iconProps}
                />
                {children}
            </button>
        )
    }
    return <IconifyIconComponent icon={ICONS[icon]} {...iconProps} />
}
