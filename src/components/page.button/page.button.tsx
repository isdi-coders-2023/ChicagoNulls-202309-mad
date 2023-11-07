type Props = {
  pageButton: () => void;
};

export function PageButton({ pageButton }: Props) {
  return (
    <>
      <img
        role="button"
        className="pageButton"
        onClick={() => pageButton()}
        src="../../../arrow-bird.png"
        alt="imagen de ave simboizando una flecha"
      />
    </>
  );
}

import arrowBirdImage from './arrow-bird.png';

type Props = {
  pageButton: () => void;
};

export function PageButton({ pageButton }: Props) {
  return (
    <>
      <img
        role="button"
        className="pageButton"
        onClick={() => pageButton()}
        src={arrowBirdImage} // Utiliza la importación de imagen en lugar de la ruta relativa
        alt="imagen de ave simbolizando una flecha"
      />
    </>
  );
}
