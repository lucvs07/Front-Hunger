
import { styled, keyframes} from "@stitches/react";

const fadein = keyframes({
    '0%': { opacity: 0, transform: 'translateY(10px)' },
    '100%': { opacity: 1, transform: 'translateY(0px)' },
});

export const BodyTableContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1rem',
    width: '100%',
    height: '100%',
});

export const ContentTable = styled('div', {
    height: '100px',
    width: '100%',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 12px',
    gap: '10px',
    alignSelf: 'stretch',
    boxSizing: 'border-box',
    opacity: 0,
    animation: `${fadein} 0.5s ease-in-out forwards`,
    variants: {
        type: {
            'img': {
                backgroundImage: 'url("https://recreio.com.br/media/_versions/filmes/jogos_vorazes_arena_capa_widelg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            },
            'correct':{
                border: '1px solid $borderBlack',
                backgroundColor: '$greenGlass',
                backdropFilter: 'blur(10px)',
            },
            'incorrect':{
                border: '1px solid $borderBlack',
                backgroundColor: '$redGlass',
                backdropFilter: 'blur(10px)',
            },
            'similar':{
                border: '1px solid $borderBlack',
                backgroundColor: '$orangeGlass',
                backdropFilter: 'blur(10px)',
            }
        }
        
    }
});
export const TextContent = styled('p', {
    color: '$snow',
    textAlign: 'center',
    fontFamily: '"Russo One"',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
});