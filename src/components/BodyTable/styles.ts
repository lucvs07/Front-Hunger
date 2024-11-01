
import { styled } from "@stitches/react";

export const BodyTableContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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