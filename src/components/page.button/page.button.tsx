type Props = {
  pageButton: () => void;
};

export function PageButton({ pageButton }: Props) {
  return (
    <>
      <button className="button button--page" onClick={() => pageButton()}>
        <img src="/arrow-bird.png" alt="imagen de ave simboizando una flecha" />
      </button>
    </>
  );
}
