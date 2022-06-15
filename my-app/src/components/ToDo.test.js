import { render } from '@testing-library/react';
import Todo from "./ToDo";


describe('Todo component', () => {
    test('it renders', () => {
        render(<Todo />);
    });
    test("test child component", () => {
        const { container } = render(<Todo />);
        const button = container.querySelector('button')
        expect(button).toBeInTheDocument();
    });

})