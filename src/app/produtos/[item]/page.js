// import { useRouter } from 'next/router';
import Image from 'next/image';

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

      {/* <h5>{params.item}</h5> */}
    </>
  )
}

// export async function getServerSideProps({ params }) {
//   const { item } = params;
//   return {
//     props: {
//       item,
//     },
//   };
// }