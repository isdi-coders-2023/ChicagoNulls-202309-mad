import './header.scss';

type Props = {
  children: JSX.Element;
};
export function Header({ children }: Props) {
  return (
    <header>
      <div className="logo">
        <img
          className="container-header-img"
          src="../../logoheader.png"
          alt="Logo de header de elden ring"
          width={280}
          height={90}
        />
        <h1>Elden Ring</h1>
      </div>
      {children}
    </header>
  );
}
