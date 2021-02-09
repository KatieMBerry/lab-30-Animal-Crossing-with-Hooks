import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VillagerById from './VillagerById';

describe('VillagerById container', () => {
    it('displays a loading screen & renders a villager', async () => {
        render(<VillagerById match={{ params: { id: '5f5fb4bbbfd05c2aed82e464' } }} />);

        screen.getByText('Loading');
        const figure = await screen.findByTestId('villager');

        return waitFor(() => {
            expect(figure).not.toBeEmptyDOMElement();
        });
    });
});
