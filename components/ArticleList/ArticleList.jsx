import Image from "next/image";
import Link from "next/link";

const ArticleList = ({ id, date, title, excerpt }) => {
  return (
    <div className="root">
      <style jsx>{`
        .root {
          max-width: 108rem;
        }
        .artikel-image {
          position: relative;
          width: 25.5rem;
          height: 17.1rem;
        }
        .artikel-info {
          max-width: 73.3rem;
        }
        .list-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .date {
          font-size: 1.4rem;
        }
        .excerpt {
          font-size: 1.8rem;
        }
        a {
          margin: 1rem 0 1.6rem 0;
          font-family: "Open Sans", san-serif;
          font-weight: 600;
          line-height: 3.8rem;
          font-size: 2.8rem;
          color: var(--primary-text-color);
        }
        a:hover {
          color: var(--accent-color);
        }
        @media screen and (max-width: 414px) {
          a {
            line-height: 100%;
            font-size: 2rem;
          }
          .excerpt {
            font-size: 1.4rem;
          }
          .artikel-image {
            width: 30rem;
          }
        }
      `}</style>
      <div className="list-wrapper">
        <div className="artikel-info">
          <p className="date">{date}</p>
          <Link href={`artikel/${id}`}>
            <a>{title}</a>
          </Link>
          <p className="excerpt"> {excerpt}</p>
        </div>
        <div className="artikel-image">
          <Link href={`artikel/${id}`}>
            <a>
              <Image
                src="/images/140x100.png"
                layout="fill"
                objectFit="contain"
                placeholder="empty"
              ></Image>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
