import { styled } from "@stitches/react";

export const HeaderTableContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
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
});