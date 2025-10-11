import { GlobalStyle } from '../styles/global';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Container } from '../components/Conteiner';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Grid flexDirection='column'>
          <h1>Styled Components + Responsividade</h1>
          <Button>Botão padrão</Button>
        </Grid>
      </Container>
    </>
  );
}

export default App;
