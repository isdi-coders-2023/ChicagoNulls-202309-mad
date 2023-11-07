type Props = {
  onClick: () => void; // Cambia el nombre de la prop a "onClick"
};

export function PageButton({ onClick }: Props) {
  return (
    <button className="pageButton" onClick={onClick}>
      <img src={''} alt="imagen de ave simbolizando una flecha" />
    </button>
  );
}
