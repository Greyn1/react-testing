import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe('Async Component',() => {
    test('renders posts if the API request succeeds',async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id:'p1', title:'First post'}]
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})