import {
  Container,
} from './styles';

export default function Footer() {
  return (
    <Container>
      Copyright &copy; {new Date().getFullYear()} | Desenvolvido por Walisson Silva com
      <a href="https://nextjs.org" rel="noopener" target="_blank">Next.js</a>
    </Container>
  )
}