import { styled } from "@stitches/react";

export const HeaderTableContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1rem',
    width: '100%',
});

export const HeaderTableTitle = styled('h1', {
    display: 'flex',
    padding: '8px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '6px solid $red',
    color: '$snow',
    fontSize: '2rem',
    lineHeight: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    boxSizing: 'border-box',
});