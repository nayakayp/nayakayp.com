import Image from "next/image";

export default function ComponentCard({ children, imgHead, title }) {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          background: var(--light-background);
          padding: 3rem 2rem 4rem 2rem;
          width: 34rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 0.5rem;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        }
        .image-wrapper {
          width: 222px;
          height: 48px;
          position: relative;
          margin-bottom: 3rem;
        }
        h3 {
          font-size: 2.4rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-align: center;
          max-width: 19rem;
        }
        p {
          font-weight: 400;
          text-align: center;
        }
        @media screen and (max-width: 414px) {
          .root {
            width: 90%;
            margin: 0 2rem;
          }
          .root {
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <div className="image-wrapper">
        <Image
          src={`/images/${imgHead}.png`}
          alt="Nayaka Yoga Pradipta"
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
