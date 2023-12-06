import React, { useEffect } from "react";

const PriceSliderAndInput = ({
  priceChek,
  setPriceChek,
  clue,
  setClue,
  setCheck,
  check,
  initialPaymentSlider,
  setPriceSliderValue,
  totalPriceInstallments,
  priceSliderValue,
  installmentPeriodSlider,
  setMonthlyPayment,
  monthlyPayment,
  calculateInitialSlider,
  setCalculateInitialSlider,
  manualInitialSlider,
  setManualInitialSlider,
}) => {
  const handleSliderChange = (event) => {
    if (event.target.value >= 0 && event.target.value <= 1000000) {
      setPriceSliderValue(event.target.value);
      setCalculateInitialSlider(initialPaymentSlider);
      setManualInitialSlider(initialPaymentSlider);
      setPriceChek(totalPriceInstallments);
      setClue(true);
      setCheck(false);
    }
    if (event.target.value > 1000000) {
      setPriceSliderValue(100000);
    }
  };

  const handleInputChange = (event) => {
    if (event.target.value >= 0 && event.target.value <= 1000000) {
      const inputValue = event.target.value;
      setCalculateInitialSlider(initialPaymentSlider);
      setManualInitialSlider(initialPaymentSlider);
      setPriceChek(totalPriceInstallments);
      setPriceSliderValue(inputValue);
      setClue(true);
      setCheck(false);
    }
    if (event.target.value > 1000000) {
      setPriceSliderValue(1000000);
    }
  };

  useEffect(() => {
    const newMonthlyPayment =
      initialPaymentSlider <= priceSliderValue * 0.9 &&
      initialPaymentSlider >= 0
        ? Math.round(
            (totalPriceInstallments - initialPaymentSlider) /
              installmentPeriodSlider
          )
        : initialPaymentSlider > priceSliderValue * 0.9
        ? (totalPriceInstallments - priceSliderValue * 0.9) /
          installmentPeriodSlider
        : undefined;
    setMonthlyPayment(Math.round(newMonthlyPayment));
  }, [
    initialPaymentSlider,
    totalPriceInstallments,
    priceSliderValue,
    installmentPeriodSlider,
    setMonthlyPayment,
    monthlyPayment,
  ]);

  return (
    <div className="priceBlock">
      <div className="priceProduct">Введите cтоимость товара:</div>
      <input
        className="input"
        type="number"
        placeholder={0}
        min={0}
        max={10000000}
        value={
          priceSliderValue > 1000000
            ? 1000000
            : priceSliderValue < 0
            ? 0
            : priceSliderValue
        }
        onChange={handleInputChange}
      />
      <input
        className="slider"
        type="range"
        min={0}
        max={1000000}
        step={10000}
        value={priceSliderValue || 0}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export { PriceSliderAndInput };
