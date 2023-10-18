import Image from 'next/image';
import Link from 'next/link';

export default function Produto({ params }) {
  const { item } = params;
  const imagePath = `/produtos/${item}.jpg`;

  return (
    <>
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

        <ul style={styles.linkList}>
          <li style={styles.linkListItem}>
            <Link href="/">
              <span style={styles.linkButton}>Home</span>
            </Link>
          </li>
          <li style={styles.linkListItem}>
            <Link href="/produtos/Camisa">
              <span style={styles.linkButton}>Camisa</span>
            </Link>
          </li>

          <li style={styles.linkListItem}>
            <Link href="/produtos/calca">
              <span style={styles.linkButton}>Calça</span>
            </Link>
          </li>

          <li style={styles.linkListItem}>
            <Link href="/produtos/bone">
              <span style={styles.linkButton}>Boné</span>
            </Link>
          </li>

          <li style={styles.linkListItem}>
            <Link href="/produtos/sapato">
              <span style={styles.linkButton}>Sapato</span>
            </Link>
          </li>

          <li style={styles.linkListItem}>
            <Link href="/produtos/oculos">
              <span style={styles.linkButton}>Óculos</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
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
  linkList: {
    listStyleType: 'none',
    textAlign: 'left',
    paddingLeft: 0,
  },
  linkListItem: {
    marginBottom: '10px',
  },
  linkButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px #888888',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
  },
  linkButtonHover: {
    backgroundColor: 'navy',
  },
};
