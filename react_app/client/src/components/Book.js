import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { AutorPageId } from './autoresPage';
import './book.css';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Bruno & Evinilson
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const LivroPage = () => {
  const [livroData, setLivroData] = useState([]);

  async function fetchLivro() {
    const response = await fetch("http://localhost:8080/livro");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchLivro().then(data => {
      setLivroData(data);
    });
  }, []);

  return ( livroData
  )
}



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Book() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pagina Livros
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Aqui podes encontrar uma diversidade de livros interessantes de acordo com a tua preferencia. Enjoy on Your tour !
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {LivroPage().map((livro) => (
              <Grid item key={livro.id} xs={12} sm={6} md={4}>
                <Card className='book-card'>
                  <CardMedia
                    component="div"
                    className="book-media"
                    image={`https://covers.openlibrary.org/b/id/${livro.id}-L.jpg`}
                  />
                  <CardContent className="book-content">
                    <Typography gutterBottom variant="h5" component="h2">
                      {livro.titulo}
                    </Typography>
                    <Typography>
                      <p>Autor: <AutorPageId id={livro.autorId} /> </p>
                    </Typography>
                  </CardContent>
                  <CardActions className="book-actions">
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}