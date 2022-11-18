import { Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
      fontFamily: 'Rubik',
  }
});

function App() {
  return (
    <  >
     <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Content />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
