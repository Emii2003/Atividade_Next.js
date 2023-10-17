import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      
      <h1>Produtos</h1>
      <ul>
        <li>
          <Link href="/produtos/Camisa">
            Veja nossos produtos..
          </Link>
        </li>
      </ul> 
    </div>
  );
};

export default Home;
