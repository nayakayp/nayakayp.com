export default function Button({
  children,
  textColor,
  bgColor,
  border,
  submit,
}) {
  return (
    <>
      <style jsx>
        {`
          button {
            color: ${textColor};
            background-color: ${bgColor};
            font-size: 1.8rem;
            font-weight: 400;
            text-transform: uppercase;
            min-width: 20rem;
            border-radius: 0.5rem;
            padding: 1.2rem 0;
            border: ${border ? `1px solid ${textColor}` : "none"};
            cursor: pointer;
          }
        `}
      </style>
      <button type={submit ? "submit" : "button"}>{children}</button>
    </>
  );
}
