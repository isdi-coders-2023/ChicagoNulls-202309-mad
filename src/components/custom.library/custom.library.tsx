type Props = {
  children: JSX.Element;
};
export function CustomLibrary({ children }: Props) {
  return (
    <div className="character" role="main">
      {children}
    </div>
  );
}
