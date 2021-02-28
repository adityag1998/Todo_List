import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GetTodos from './Components/GetTodos';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <h1>This is client side</h1>
        <GetTodos />
      </>
    </ApolloProvider>
  );
}

export default App;
