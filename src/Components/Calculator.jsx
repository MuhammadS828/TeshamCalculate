import { PriceSliderAndInput } from "./PriceSliderAndInput";
import InitialPaymentSlilderAndInput from "./InitialPaymentSlilderAndInput";
import { InstallmentPeriodSliderAndInput } from "./InstallmentPeriodSliderAndInput";
import AllResults from "./AllResults";
const Calculator = ({
  priceChek,
  setPriceChek,
  clue,
  setClue,
  setCheck,
  check,
  calculateInitialSlider,
  setCalculateInitialSlider,
  manualInitialSlider,
  setManualInitialSlider,
  initialPaymentSlider,
  setInitialPaymentSlider,
  priceSliderValue,
  totalPriceInstallments,
  setTotalPriceInstallments,
  setPriceSliderValue,
  installmentPeriodSlider,
  setInstallmentPeriodSlider,
  setMonthlyPayment,
  monthlyPayment,
  setTradeMargin,
  tradeMargin,
}) => {
  return (
    <div className="mainBlock">
      <div className="inputsAndSlidersConteiner">
        <PriceSliderAndInput
          priceChek={priceChek}
          setPriceChek={setPriceChek}
          clue={clue}
          setClue={setClue}
          setCheck={setCheck}
          check={check}
          initialPaymentSlider={initialPaymentSlider}
          setInitialPaymentSlider={setInitialPaymentSlider}
          totalPriceInstallments={totalPriceInstallments}
          setTotalPriceInstallments={setTotalPriceInstallments}
          priceSliderValue={priceSliderValue}
          setPriceSliderValue={setPriceSliderValue}
          installmentPeriodSlider={installmentPeriodSlider}
          setMonthlyPayment={setMonthlyPayment}
          monthlyPayment={monthlyPayment}
          calculateInitialSlider={calculateInitialSlider}
          setCalculateInitialSlider={setCalculateInitialSlider}
          manualInitialSlider={manualInitialSlider}
          setManualInitialSlider={setManualInitialSlider}
        />

        <InitialPaymentSlilderAndInput
          priceChek={priceChek}
          setPriceChek={setPriceChek}
          clue={clue}
          setClue={setClue}
          setCheck={setCheck}
          check={check}
          calculateInitialSlider={calculateInitialSlider}
          setCalculateInitialSlider={setCalculateInitialSlider}
          manualInitialSlider={manualInitialSlider}
          setManualInitialSlider={setManualInitialSlider}
          initialPaymentSlider={initialPaymentSlider}
          setInitialPaymentSlider={setInitialPaymentSlider}
          totalPriceInstallments={totalPriceInstallments}
          setTotalPriceInstallments={setTotalPriceInstallments}
          priceSliderValue={priceSliderValue}
          tradeMargin={tradeMargin}
          setTradeMargin={setTradeMargin}
        />
        <InstallmentPeriodSliderAndInput
          priceChek={priceChek}
          setPriceChek={setPriceChek}
          setCheck={setCheck}
          check={check}
          calculateInitialSlider={calculateInitialSlider}
          setCalculateInitialSlider={setCalculateInitialSlider}
          manualInitialSlider={manualInitialSlider}
          setManualInitialSlider={setManualInitialSlider}
          initialPaymentSlider={initialPaymentSlider}
          totalPriceInstallments={totalPriceInstallments}
          setTotalPriceInstallments={setTotalPriceInstallments}
          installmentPeriodSlider={installmentPeriodSlider}
          setInstallmentPeriodSlider={setInstallmentPeriodSlider}
          priceSliderValue={priceSliderValue}
          setPriceSliderValue={setPriceSliderValue}
        />
      </div>
      <div className="allResultsConteiner">
        <AllResults
          monthlyPayment={monthlyPayment}
          tradeMargin={tradeMargin}
          totalPriceInstallments={totalPriceInstallments}
        />
      </div>
    </div>
  );
};

export default Calculator;
