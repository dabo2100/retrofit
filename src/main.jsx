import { createRoot } from 'react-dom/client';
import 'animate.css';
import './index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloProvider } from '@apollo/client/react';
import client from './shared/apolloClient.js';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </QueryClientProvider>
);
