import React from 'react'

import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Content from './Content';
import { BrowserRouter } from 'react-router-dom';

describe('Content Component', () => {


  const initialState = {
    reducerLogin: { user: { userName: '', password: '' } },
    userSaved: false,
    forgotPass: false,
    isAuthenticated: false
  }

  const mockStore = configureStore()
  let store;

  test("o card de Saldo deve estar presente ao iniciar", () => {
  store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </Provider>
    );

    const balanceText = screen.getByText("Saldo");

    expect(balanceText).toBeInTheDocument;
  })
});

