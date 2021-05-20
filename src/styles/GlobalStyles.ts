import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    background-color: ${props => props.theme.colors['background-body']};
    color: ${props => props.theme.colors['text-color']};

    @media (max-width: 1366px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  *, button, input {
    border: 0;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  h1,h2,h3,h4,h5,h6,p,span {
    color: ${props => props.theme.colors['text-color']}
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    -webkit-box-shadow: none;
    background-color: ${props => props.theme.colors['background-primary']};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${props => props.theme.colors['alpha']};
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .Toastify__toast--success {
    background-color: ${props => props.theme.colors.success};
    font-weight: 500;
  }

  .Toastify__toast--error {
    ${props => props.theme.colors.danger}
    font-weight: 500;
  }

  .Toastify__toast--warning {
    background-color: #fdd400; 
    color: #0B1923;   
    font-weight: 400;
  }

  .Toastify__toast--info {
    background-color: ${props => props.theme.colors['primary-color-blue']};
    font-weight: 500;
  }

  .Toastify__toast-body {
    font-weight: 500;
  }
`

export default GlobalStyles
