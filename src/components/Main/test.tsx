import { render, screen } from '@testing-library/react'
import Main from '.'
describe('<Main />', () => {
  it('Should render the heading', () => {
    //renderiza o componente
    render(<Main />)
    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
