import Button from "./component-button";
import Script from "next/script";
import * as gtag from "../../lib/gtag";

export default function ComponentForm() {
  const submitForm = () => {
    gtag.event({
      action: "submit_form",
      category: "lead",
      label: "Form submitted",
      value: "success",
    });
  };
  return (
    <div className="root">
      <style jsx>{`
        .root {
          background: var(--primary-color);
          border-radius: 0.5rem;
          max-width: 77rem;
        }
        form {
          display: flex;
          flex-direction: column;
          padding: 4rem 3rem;
        }
        label {
          font-size: 1.8rem;
          color: var(--secondary-text-color);
          font-family: "Open Sans", san-serif;
          margin-bottom: 1rem;
        }
        input,
        textarea {
          font-family: "Open Sans", san-serif;
          padding: 0 1rem;
          font-size: 1.8rem;
          border-radius: 0.5rem;
          border: none;
        }
        input {
          height: 5rem;
        }
        textarea {
          padding: 1rem;
        }
        textarea:focus,
        input:focus {
          outline: none;
        }
        .input-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }
        .submit-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          color: var(--secondary-text-color);
          font-size: 1.6rem;
          padding-left: 4rem;
          font-weight: 400;
        }
        @media screen and (max-width: 414px) {
          .root {
            width: 100%;
          }
          .submit-wrapper {
            flex-direction: column;
          }
          p {
            margin-top: 2rem;
            text-align: center;
            padding-left: 0;
            font-size: 1.4rem;
          }
        }
      `}</style>
      <form
        id="contactForm"
        method="POST"
        data-netlify="true"
        name="contact"
        onSubmit={submitForm}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-wrapper">
          <label htmlFor="nama">Nama</label>
          <input type="text" name="nama" id="nama" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Alamat Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="whatsapp">Nomor WhatsApp</label>
          <input type="number" name="whatsapp" id="whatsapp" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="deskripsi">Deskripsi Proyek</label>
          <textarea
            name="deskripsi"
            id=""
            cols="30"
            rows="10"
            id="deskripsi"
            required
          ></textarea>
        </div>
        <div className="submit-wrapper">
          <Button
            textColor="var(--primary-color)"
            bgColor="var(--secondary-color)"
            submit={true}
          >
            Kirim
          </Button>
          <p>
            Form ini akan terkirim ke nomor whatsapp pribadi saya agar bisa
            cepat terbalas. Saya akan membalasnya melalui whatsapp (prioritas)
            atau email max 1x24 jam.
          </p>
        </div>
      </form>
      <Script>{`
      const contactForm= document.querySelector("form")
      const alertMessage=document.querySelector(".alert");
      
      contactForm.addEventListener("submit", handleSubmit)

      function handleSubmit(e) {
        e.preventDefault();
        let myForm = document.querySelector("#contactForm");
        let formData = new FormData(myForm);
        alertMessage.classList.add("active", "success");
        alertMessage.children[0].textContent = "Pesan Sudah Terkirim";
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then((resp) => {
            alertMessage.classList.add("active", "success");
            alertMessage.children[0].textContent = "Pesan Sudah Terkirim";
            contactForm.reset();
          })
          .catch((error) => {
            alertMessage.classList.add("active", "error");
            alertMessage.children[0].textContent =
              "Gagal mengirim! silahkan refresh dan coba lagi";
            contactForm.reset();
          });
      }

      `}</Script>
    </div>
  );
}
