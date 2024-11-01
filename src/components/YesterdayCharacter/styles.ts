import { styled } from "@stitches/react";

export const YesterdayCharacterContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '100%',
    padding: '2rem',
    backgroundColor: 'rgba(64, 61, 57, 0.62)',
    border: '1px solid rgba(64, 61, 57, 0.35)',
    borderRadius: '1rem',
    backdropFilter: 'blur(10px)',
    gap: '1rem',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
    
});

export const Image = styled('img', {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
});

export const Title = styled('h1', {
    color: '$snow',
    fontSize: '2.5rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'center',
});
export const Subtitle = styled('h2', {
    color: '$snow',
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    textAlign: 'center',
});