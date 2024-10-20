import { useEffect } from "react";

const InstallmentPeriodSliderAndInput = ({
  setCheck,
  check,
  calculateInitialSlider,
  setCalculateInitialSlider,
  manualInitialSlider,
  setManualInitialSlider,
  installmentPeriodSlider,
  setInstallmentPeriodSlider,
  totalPriceInstallments,
  setTotalPriceInstallments,
  priceSliderValue,
  initialPaymentSlider,
  tradeMargin,
  setTradeMargin,
}) => {
  const handleSliderChange = (event) => {
    if (event.target.value >= 0 && event.target.value <= 12) {
      setInstallmentPeriodSlider(event.target.value);
    }
    if (event.target.value > 12) {
      setInstallmentPeriodSlider(12);
    }
    if (event.target.value < 0) {
      setInstallmentPeriodSlider(1);
    }
  };

  const handleInputChange = (event) => {
    if (event.target.value >= 0 && event.target.value <= 12) {
      const inputValue = event.target.value;
      setInstallmentPeriodSlider(inputValue);
    }
    if (event.target.value > 12) {
      setInstallmentPeriodSlider(12);
    }
    if (event.target.value < 0) {
      setInstallmentPeriodSlider(1);
    }
  };

  useEffect(() => {
    // Объект с процентами в зависимости от installmentPeriodSlider

    const percentages = {
      1: 0.04,
      2: 0.08,
      3: 0.12,
      4: 0.16,
      5: 0.2,
      6: 0.25,
      7: 0.27,
      8: 0.3,
      9: 0.33,
      10: 0.35,
      11: 0.37,
      12: 0.4,
    };

    // Пересчитываем monthlyPayment с использованием объекта
    const percentage = percentages[installmentPeriodSlider] || 0;
    const newtotalPriceInstallments =
      manualInitialSlider > calculateInitialSlider
        ? Math.round(
            priceSliderValue * (1 + percentage) -
              ((manualInitialSlider - calculateInitialSlider) / 1000) * 200
          )
        : manualInitialSlider < calculateInitialSlider
        ? Math.round(
            priceSliderValue * (1 + percentage) +
              ((calculateInitialSlider - manualInitialSlider) / 1000) * 500
          )
        : Math.round(priceSliderValue * (1 + percentage));

    // Округляем результат до целого числа
    setTotalPriceInstallments(Math.round(newtotalPriceInstallments));
  }, [
    installmentPeriodSlider,
    calculateInitialSlider,
    manualInitialSlider,
    priceSliderValue,
    setTotalPriceInstallments,
    totalPriceInstallments,
    initialPaymentSlider,
    tradeMargin,
    setTradeMargin,
    check,
    setCheck,
    setCalculateInitialSlider,
    setManualInitialSlider,
  ]);
  return (
    <div className="priceBlock">
      <div className="priceProduct">Выберите срок рассрочки:</div>
      <input
        className="input"
        type="number"
        value={
          installmentPeriodSlider > 12
            ? 12
            : installmentPeriodSlider < 0
            ? 0
            : installmentPeriodSlider
        }
        onChange={handleInputChange}
      />
      <input
        className="slider"
        type="range"
        min={1}
        max={12}
        step={1}
        value={installmentPeriodSlider || 1}
        onChange={handleSliderChange}
      />
    </div>
  );
};
export { InstallmentPeriodSliderAndInput };
