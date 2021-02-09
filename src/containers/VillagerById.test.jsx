import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import VillagerById from './VillagerById';

describe('VillagerById container', () => {
    it('displays a loading screen & renders a villager', async () => {
        render(<VillagerById />);

        screen.getByText('Loading');

    })
});
