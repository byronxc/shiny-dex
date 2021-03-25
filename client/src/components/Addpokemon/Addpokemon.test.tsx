import { render, screen, fireEvent } from '@testing-library/react';
import {AddPokemon } from './Addpokemon';

test('renders Addpokemon', () => {
    render(<AddPokemon/>);
    const label = screen.getByText("Name:");
    expect(label).toBeInTheDocument();
}) 

test('tests user input', () => {
    const {getByLabelText} = render(<AddPokemon/>) ;
    const input = getByLabelText("Name:") as HTMLInputElement;
    fireEvent.change(input, {
        target: { value: "Charmander"},
    });
    expect(input.value).toBe("Charmander")
}) 
