import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllVillagers from '../containers/AllVillagers';

describe('AllVillagers container', () => {
    it('displays a loading screen & renders a list of villagers', async () => {
        render(<AllVillagers />);
        screen.getByText('Loading');
        const ul = await screen.findByTestId('villagers')
    });
});
