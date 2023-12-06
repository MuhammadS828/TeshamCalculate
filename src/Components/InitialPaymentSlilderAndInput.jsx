import React, { useEffect } from "react";

const InitialPaymentSlilderAndInput = ({
  clue,
  setClue,
  setCheck,
  check,
  calculateInitialSlider,
  setCalculateInitialSlider,
  manualInitialSlider,
  setManualInitialSlider,
  totalPriceInstallments,
  priceSliderValue,
  initialPaymentSlider,
  setInitialPaymentSlider,
  setTotalPriceInstallments,
  tradeMargin,
  setTradeMargin,
}) => {
  const handleSliderChange = (event) => {
    if (
      event.target.value >= 0 &&
      event.target.value <= priceSliderValue * 0.9
    ) {
      setInitialPaymentSlider(event.target.value);
      if (!check) {
        setCalculateInitialSlider(initialPaymentSlider);
        setCheck(true);
      }
      if (
        event.target.value <= priceSliderValue * 0.9 &&
        event.target.value >= 0
      ) {
        setManualInitialSlider(event.target.value);
      }
      if (event.target.value > priceSliderValue * 0.9) {
        setManualInitialSlider(priceSliderValue * 0.9);
      }

      setClue(false);
    }
    if (event.target.value > priceSliderValue * 0.9) {
      setInitialPaymentSlider(priceSliderValue * 0.9);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (
      event.target.value >= 0 &&
      event.target.value <= priceSliderValue * 0.9
    ) {
      setInitialPaymentSlider(inputValue);
      if (!check) {
        setCalculateInitialSlider(initialPaymentSlider);
        setCheck(true);
      }
      if (
        event.target.value <= priceSliderValue * 0.9 &&
        event.target.value >= 0
      ) {
        setManualInitialSlider(event.target.value);
      }
      if (event.target.value > priceSliderValue * 0.9) {
        setManualInitialSlider(priceSliderValue * 0.9);
      }

      setClue(false);

      // Проверяем, изменилось ли значение initialPaymentSlider
      if (inputValue !== initialPaymentSlider) {
        setInitialPaymentSlider(inputValue);
      }
    }
    if (event.target.value > priceSliderValue * 0.9) {
      setInitialPaymentSlider(priceSliderValue * 0.9);
      if (!check) {
        setCalculateInitialSlider(priceSliderValue * 0.9);
        setCheck(true);
      }
      if (event.target.value > priceSliderValue * 0.9) {
        setManualInitialSlider(priceSliderValue * 0.9);
      }

      setClue(false);

      // Проверяем, изменилось ли значение initialPaymentSlider
      if (inputValue !== initialPaymentSlider) {
        setInitialPaymentSlider(inputValue);
      }
    }
  };

  // Используем useEffect для вычисления initialPaymentSlider при изменении totalPriceInstallment
  useEffect(() => {
    const initialPayment = Math.round(totalPriceInstallments * 0.2);

    if (!check) {
      setInitialPaymentSlider(Math.round(initialPayment));
    }

    const newTradeMargin = totalPriceInstallments - priceSliderValue;
    setTradeMargin(Math.round(newTradeMargin));
  }, [
    manualInitialSlider,
    totalPriceInstallments,
    check,
    setCheck,
    setCalculateInitialSlider,
    priceSliderValue,
    setInitialPaymentSlider,
    setTradeMargin,
    setTotalPriceInstallments,
  ]);

  return (
    <div className="priceBlock">
      <div className="priceProduct">Первоначальный взнос:</div>
      <input
        className="input"
        type="number"
        placeholder={0}
        value={
          initialPaymentSlider < 0
            ? 0
            : initialPaymentSlider > priceSliderValue * 0.9
            ? priceSliderValue * 0.9
            : initialPaymentSlider
        }
        onChange={handleInputChange}
      />

      <input
        className="slider"
        type="range"
        min={0}
        max={priceSliderValue * 0.9}
        step={1000}
        value={initialPaymentSlider}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default InitialPaymentSlilderAndInput;
