import React from 'react';
import Home from '../pages/Home';
import { render } from '@testing-library/react';

describe('HomeTest', () => {
    test('Should render without crash', async () => {
        render(<Home />);
    });
});
