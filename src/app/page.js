import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link href="/produtos/Camisa">
            Camisa
          </Link>
        </li>

        <li>
          <Link href="/produtos/calca">
            Calça
          </Link>
        </li>

        <li>
          <Link href="/produtos/bone">
            Boné
          </Link>
        </li>

        <li>
          <Link href="/produtos/sapato">
            Sapato
          </Link>
        </li>

        <li>
          <Link href="/produtos/oculos">
            Óculos
          </Link>
        </li>
      </ul> 
    </div>
  );
};

export default Home;
