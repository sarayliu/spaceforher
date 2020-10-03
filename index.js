import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import App from './App';
import { Container, Header, List } from "semantic-ui-react";
import * as serviceWorker from './serviceWorker';

import pkg from 'semantic-ui-react/package.json'
import App from "./MenuBar";
import Reviewform from "./WriteaReview"

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

const App2 = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">This example is powered by Semantic UI React {pkg.version} 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="💌 Official documentation"
        href="https://react.semantic-ui.com/"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 StackOverflow"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
    </List>

    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <Reviewform>
    {/*<Example />*/}
  </Reviewform>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
