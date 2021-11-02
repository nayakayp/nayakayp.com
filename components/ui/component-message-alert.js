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
function handleSubmit(e) {
  e.preventDefault();
  let myForm = document.querySelector("#contactForm");
  let formData = new FormData(myForm);
  alertMessage.classList.add("active", "success");
  alertMessage.children[0].textContent = "Pesan Sudah Terkirim";
  contactForm.reset();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then((resp) => console.log("Form successfully submitted", resp))
    .catch(() => {
      alertMessage.classList.add("active", "error");
      alertMessage.children[0].textContent =
        "Gagal mengirim! silahkan refresh dan coba lagi";
      contactForm.reset();
    });
}
