import { render} from '@testing-library/react';
import { Pokemon } from './Pokemon';

test('displays correct url', () => {
    render(<Pokemon pokemonName='H' pokemonNumber={1}  shiny={false} urlImage='2' shinyUrlImage='3'/>) ;
    const image = document.getElementById("pokemon-image") as HTMLImageElement;
    expect(image.src).toBe("http://localhost/2")
}) 
