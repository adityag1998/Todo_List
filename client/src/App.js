import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import GetTodos from './Components/GetTodos';
import styles from './beautify.module.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <h2 className={styles.center}>My Todo List</h2>
        <GetTodos />
      </>
    </ApolloProvider>
  );
}

export default App;
