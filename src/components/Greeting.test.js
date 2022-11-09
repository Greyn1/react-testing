import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting Component',() => {
    test('renders "Hello World" as text',() => {
        //Arrange
        render(<Greeting />);

        //Actions

        //Assert
        const helloWorldText = screen.getByText('hello world', {exact : false});
        expect(helloWorldText).toBeInTheDocument();
    });

    test('renders "good to see you" if the button is not clicked initially',() => {
        render(<Greeting />);

        const outputText = screen.getByText('good to see you', {exact: false});
        expect(outputText).toBeInTheDocument();
    });

    test('renders "Changed" if the button is clicked',() => {
        render(<Greeting />);

        //Actiion
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputText = screen.getByText('changed', {exact: false});
        expect(outputText).toBeInTheDocument();
    });

    test('does not renders "good to see you" if the button is clicked',() => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputText = screen.queryByText('good to see you', {exact : false});
        expect(outputText).toBeNull();
    })
})