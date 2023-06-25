import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// to solve problem with testing chart
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

/**
 * @jest-environment jsdom
 */





describe('Canals navbar', () => {
    it('should render Canals button by default', () => {
       render(<App />);
 
        expect(screen.getByText(/Canals/)).toBeInTheDocument();
    });


    it('should render Canals Create button by default', () => {
      render(<App />);

       expect(screen.getByText(/Create Canal/)).toBeInTheDocument();
   });

});

