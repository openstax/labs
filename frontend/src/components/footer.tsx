import { React, cx } from '../common'
import { CSSObject } from '@emotion/serialize'
import { Box } from 'boxible'

const FIXED:CSSObject = {
    borderTop: '1px solid #ced4da',
    padding: '1rem',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(255 255 255 / 90%)',
}

const WITH_LINE:CSSObject = {
    borderTop: '1px solid #ced4da',
    marginTop: '1rem',
    paddingTop: '1rem',

}

export const Footer: React.FC<{ className?: string, isBottomFixed?: boolean }> = ({ className, isBottomFixed, children }) => {
    return (
        <Box
            gap
            className={cx('footer', className)}
            justify={isBottomFixed ? 'center' : 'end'}
            css={isBottomFixed ? FIXED : WITH_LINE}
        >
            {children}
        </Box>
    )
}
