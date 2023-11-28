import Home from "./Home";
import { Provider } from "react-redux";
import { store } from "./redux";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette:{
      mode:"light",
      primary:{
        main: "#c34a5a",
      },
      secondary:{
        main:"#EFB746"
      }
      
    }
  })
  return (
    <ThemeProvider theme={theme}>

    <Provider store={store}>
      <Home />
    </Provider>
    </ThemeProvider>
  );
}

export default App;
