import React from 'react';
import Home from '../pages/Home';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('HomeTest', () => {
    test('Should render without crash', async () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });
});
