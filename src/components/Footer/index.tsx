import {
  Container,
} from './styles';

export default function Footer() {
  return (
    <Container>
      Copyright &copy; {new Date().getFullYear()} | Desenvolvido por Walisson Silva com
      <a href="https://nextjs.org" target="_blank">Next.js</a>
    </Container>
  )
}