import Calculator from "./Components/Calculator";
import CommunButtons from "./Components/CommunButtons";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [clue, setClue] = useState(false);
  const [manualInitialSlider, setManualInitialSlider] = useState(false);
  const [check, setCheck] = useState(false);
  const [calculateInitialSlider, setCalculateInitialSlider] = useState(false);
  const [priceSliderValue, setPriceSliderValue] = useState("");
  const [initialPaymentSlider, setInitialPaymentSlider] = useState("");
  const [installmentPeriodSlider, setInstallmentPeriodSlider] = useState(6);
  const [totalPriceInstallments, setTotalPriceInstallments] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [tradeMargin, setTradeMargin] = useState(0);
  const [priceChek, setPriceChek] = useState(null);

  return (
    <div className="conteinerCalculator">
      <div className="App">
        <Header />
        <Calculator
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
          setPriceSliderValue={setPriceSliderValue}
          installmentPeriodSlider={installmentPeriodSlider}
          setInstallmentPeriodSlider={setInstallmentPeriodSlider}
          monthlyPayment={monthlyPayment}
          setMonthlyPayment={setMonthlyPayment}
          tradeMargin={tradeMargin}
          setTradeMargin={setTradeMargin}
        />
        <CommunButtons />
      </div>
    </div>
  );
}

export default App;
