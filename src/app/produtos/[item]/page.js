import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer/footer';

export default function Produto({ params }) {
  const { item } = params;
  const imagePath = `/produtos/${item}.jpg`;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Produto de categoria: {params.item}</h1>
      <div style={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={`Imagem de ${item}`}
          width={300}
          height={300}
        />
      </div>

      <div style={styles.buttonRows}>
        <div style={styles.buttonRow}>
          <Link href="/produtos/Camisa">
            <span style={styles.linkButton}>Camisa</span>
          </Link>
          <Link href="/produtos/calca">
            <span style={styles.linkButton}>Calça</span>
          </Link>
          <Link href="/produtos/bone">
            <span style={styles.linkButton}>Boné</span>
          </Link>
        </div>
        <div style={styles.buttonRow}>
          <Link href="/produtos/sapato">
            <span style={styles.linkButton}>Sapato</span>
          </Link>
          <Link href="/produtos/oculos">
            <span style={styles.linkButton}>Óculos</span>
          </Link>
          <Link href="/">
            <span style={styles.linkButton}>Home</span>
          </Link>
        </div>
      </div>
      <Footer></Footer>

    </div>
    
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '32px',
    color: 'darkslategray',
    marginBottom: '20px',
    textTransform: 'capitalize',
  },
  imageContainer: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  buttonRows: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  linkButton: {
    backgroundColor: 'lightblue',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px #888888',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    marginRight: '10px',
  },
  linkButtonHover: {
    backgroundColor: 'navy',
  },
};
