import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/15819565?s=460&u=d824e8cb634c7e75c90843c78275c1d95198dbd8&v=4"
          alt="Danyllo Silva"
        />
        <div>
          <strong>Danyllo Silva</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti
        sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Suco
        de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
        fermentis. Interessantiss quisso pudia ce receita de bolis, mais bolis
        eu num gostis.
      </p>

      <footer>
        <p>
          Preço/Hora <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
