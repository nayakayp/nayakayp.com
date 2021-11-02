export default function ComponentMessageAlert() {
  return (
    <div className="root alert">
      <style jsx>{`
        .root {
          opacity: 0;
          width: 90%;
          padding: 2rem 1rem;
          margin: 0 auto;
          background: var(--accent-color);
          position: fixed;
          top: 7vh;
          transition: 0.5s;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0.5rem;
          z-index: 99;
        }
        .root.active.success {
          background: var(--accent-color);
        }
        .root.active.error {
          background: red;
        }
        .root.active {
          transition: 0.5s;
          top: 10vh;
          opacity: 1;
        }
        p {
          text-align: center;
          color: var(--secondary-color);
        }
      `}</style>
      <p>Message Sent</p>
    </div>
  );
}
