import './page.button.scss';
export function PageButton() {
  return (
    <div className="image-birds-container">
      <div className="image-birds-pagination-next">
        <img role="button" src="../../arrow-bird.png" alt="" />
      </div>
      <div className="image-birds-pagination-previous">
        <img role="button" src="../../arrow-bird.png" alt="" />
      </div>
    </div>
  );
}
