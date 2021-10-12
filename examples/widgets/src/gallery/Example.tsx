import { render } from 'react-dom';
import Typography from '@mui/material/Typography';
import { Jupyter } from '@datalayer/jupyter-widgets';
import { CacheProvider } from '@emotion/react';
import { StylesProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import setupMui from '../MuiSetup';
import Gallery from './Gallery';

const theme = createTheme();
const { jss, cache } = setupMui('datalayer-jss-insertion-point');

const div = document.createElement('div');
document.body.appendChild(div);

const Header = () =>  <>
    <Typography variant="h4" gutterBottom>
      Jupyter React Components Example
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      © Datalayer, 2021
    </Typography>
  </>

render(
  <ThemeProvider theme={theme}>
    <CacheProvider value={cache}>
      <StylesProvider jss={jss}>
        <Jupyter collaborative={true} terminals={true}>
          <Header/>
          <Gallery/>
        </Jupyter>
      </StylesProvider>
    </CacheProvider>
  </ThemeProvider>
  ,
  div
);
