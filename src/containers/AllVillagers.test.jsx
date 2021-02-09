import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import villagerApiJson from '../services/villagerApiJson.json';
import AllVillagers from '../containers/AllVillagers';

const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
        return res(ctx.json(villagerApiJson));
    })
);

describe('AllVillagers container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('displays a loading screen & renders a list of villagers', async () => {
        render(
            <MemoryRouter>
                <AllVillagers />
            </MemoryRouter>
        );
        screen.getByText('Loading');

        const listOfVillagers = await screen.findByTestId('villagers');

        return waitFor(() => {
            expect(listOfVillagers).not.toBeEmptyDOMElement();
        })
    });
});
