import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { ROUTERS } from '../constants/constantsRouter';
import { Navigation } from './../components/Navigation';
import { baseTheme } from './../styles/theme';

const renderWithTheme = (ui: ReactElement) => {
  return render(
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>
  );
};

describe('Navigation component', () => {
  test('рендерит логотип и ссылки', () => {
    renderWithTheme(<Navigation />);
    expect(screen.getByText(/Todo list/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', ROUTERS.home);
    expect(screen.getByRole('link', { name: /Settings/i })).toHaveAttribute(
      'href',
      ROUTERS.settings
    );
  });
});
