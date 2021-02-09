import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup, act } from '@testing-library/react';
import VillagerById from './VillagerById';
act(() => {
    describe('VillagerById component',
        () => {
            afterEach(() => cleanup());
            it('renders VillagerById', () => {
                const { asFragment } = render(<BrowserRouter><VillagerById /></BrowserRouter>);
                expect(asFragment()).toMatchSnapshot;
            });
        });
});

