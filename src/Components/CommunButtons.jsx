import React from "react";

const CommunButtons = () => {
  // Номер телефона для WhatsApp и Telegram
  const phoneNumber = +79270000677;
  const phoneNumberTelegram = "+79270000677";

  // Формируем ссылки для WhatsApp, Telegram и телефонного звонка
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  const telegramLink = `https://t.me/${phoneNumberTelegram}`;
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="containerButtons">
      <div className="phCont">
        <a href={phoneLink}>
          <button className="btnPhone">
            <i className="fas fa-phone"></i>&nbsp;Позвонить на сотовый
          </button>
        </a>
      </div>
      <div className="wCont">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="btnwhatsapp">
            <i className="fab fa-whatsapp"></i>&nbsp;Написать в WhatsApp
          </button>
        </a>
      </div>
      <div className="tCont">
        <a href={telegramLink} target="_blank" rel="noopener noreferrer">
          <button className="btntelegram">
            <i className="fab fa-telegram"></i>&nbsp;Написать в Telegram
          </button>
        </a>
      </div>
    </div>
  );
};

export default CommunButtons;
