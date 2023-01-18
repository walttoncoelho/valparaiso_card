
import styled from "styled-components";

export const Background = styled.div`
  background: ${(props) => props.color};
`;

export const Tipograf = styled.div`      
  h1 {  
    font-size: 3em;
    line-height: 64px;
    letter-spacing: 0.01em;   
    font-weight: 900;
    line-height: 64px;    
    font-size: 4em;     
    
  }


  h2 {   
    color: #aa38a1;
    font-weight: 900;
    letter-spacing: -0.05em;    
    line-height: 50px;   
    font-size: 2.55em;    
  }

  h3 {   
    color: #aa38a1;
    font-weight: 900;
    line-height: 20px;
    font-size: 2.2em;
    letter-spacing: -0.05em;
  }

  h4 {   
    color: #aa38a1;
    font-weight: 900;
    line-height: 20px;
    font-size: 1.5em;
    letter-spacing: -0.05em;
  }

  h5 {   
    color: #ffffff;
    font-weight: 300;
    line-height: 20px;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    max-width: 700px;
  }

  p {
    color: #4d4c4c;
    font-size: 0.8em;
    font-weight: 400;
    
  }

  p.italico {
    color: #4d4c4c;
    font-size: 0.8em;
    font-weight: 400;   
    font-style: italic;
  }

  strong {
    color: #4d4c4c;    
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;    
  }
`;

/* Elementos */

export const Circle = styled.div`
display: flex;
min-width: 60px;
min-height: 60px;
border-radius: 100px;
background-color: aliceblue;
border-width: 2px;
border-style: solid;
border-color: #eceaea;

img{
  margin: auto;
  align-items: center;
  justify-content: center;  
}
`



