// import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Produto({params}) {
  const { item } = params;
  const imagePath = `/produtos/${item}.jpg`;

  return (
    <>
       <h1>Produto de categoria: {params.item}</h1>
       <Image
        src={imagePath}
        alt={`Imagem de ${item}`}
        width={300} 
        height={300} 
      />

      <ul>
      <li>
          <Link href="/">
            Home
          </Link>
        </li>
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
    </>
  )
}