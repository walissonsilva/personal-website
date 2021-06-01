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
    font-size: 1rem;
    font-weight: 400;

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
    width: 5px;
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
    background-color: ${props => props.theme.colors['background-body']};
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style-position: inside;
    padding-left: 1rem;
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

  .react-modal {
    width: 90%;
    max-width: 700px;
    height: fit-content;
    max-height: calc(100vh - 140px);
    padding: 2rem 2.5rem;
    border-radius: 10px;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-top: 60px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    background-color: ${props => props.theme.colors['background-primary']};

    button.close-modal-button {
      background: transparent;
      border: 0;
      position: absolute;
      top: 2rem;
      right: 2.5rem;

      &:hover {
        svg {
          transform: rotate(90deg);
          transition: transform 0.5s;
        }
      }

      svg {
        color: ${props => props.theme.colors.white};
        font-size: 1.6rem;
      }
    }

    @media (max-width: 500px) {
      margin-top: 45px;
    }
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default GlobalStyles
