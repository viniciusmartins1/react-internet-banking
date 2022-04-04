import React from 'react'

import { render, screen } from '@testing-library/react'

import LateralMenu from './LateralMenu'
import { BrowserRouter} from 'react-router-dom'

describe('LateralMenu Component', () => {


  test("o link de Perfil deve estar presente ao iniciar", () => {
    render(
      <BrowserRouter>
        <LateralMenu />
      </BrowserRouter>
    );

    const balanceText = screen.getByText("Perfil");
    expect(balanceText).toBeInTheDocument;
  })
});

