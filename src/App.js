import { ThemeProvider } from "styled-components";
import { lighTheme, darkTheme } from "../src/theme";
import GlobalStyles from "../src/styles/global";

import { Tipograf } from "./styles/styles";
import {AppRoutes} from "./routes/AppRoutes"


export function App() {

  return (
    
    <ThemeProvider
    theme={
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
        ? lighTheme
          : darkTheme
        }
        >
      <>
        <Tipograf>              
     
          <AppRoutes />          
        </Tipograf>
      </>
    
      <GlobalStyles />
    </ThemeProvider>
      
  );
}
