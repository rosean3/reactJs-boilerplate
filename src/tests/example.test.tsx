import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Button } from '../components';

let container: HTMLDivElement | null = null;

describe('Button functionality and props', () => {
  beforeEach(() => {
    // renderizar elemento a ser testado
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // limpar ao sair
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('shows label correctly', () => {
    act(() => {
      render(<Button primary backgroundColor="red" size="small" label="Teste" />, container);
    });

    expect(container.textContent).toBe('Teste');
  });
});
