import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer/footer';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Produtos</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link href="/produtos/Camisa">
            Veja nossos produtos
          </Link>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
    backgroundColor: 'lightblue', 
    padding: '10px', 
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: 'blue',
  },
};

export default Home;