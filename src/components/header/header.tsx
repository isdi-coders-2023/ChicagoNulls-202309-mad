import './header.scss';

//type Props = {
//  children: JSX.Element;
//};
export function Header(/* children }: Props */) {
  return (
    <header>
      <img
        src="../../../public/logoheader.png"
        alt="imagen de logotipo de Elden Ring"
      />
      <h1>Elden Ring </h1>

      {/*  {children} */}
    </header>
  );
}
