import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const API_TOKEN = '43bea5cf-fa8a-4924-ac3a-447cfd64c648'

// Create a middleware that adds the API token to the request headers
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: `https://qa4-api.8basedev.com/clt4ho3cr00000akvgsqj51qg`,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
