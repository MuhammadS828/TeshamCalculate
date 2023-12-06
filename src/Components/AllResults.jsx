import React from "react";
import { useMediaQuery } from "react-responsive";

const AllResults = ({
  monthlyPayment,
  tradeMargin,
  totalPriceInstallments,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <div className="monthlyPayment">
        <div>
          {isMobile ? (
            <div className="isMobile">
              {" "}
              <div>Ежемесячный</div>
              <div>платеж:</div>
            </div>
          ) : (
            "Ежемесячный платеж:"
          )}
        </div>
        <div>{monthlyPayment}&#8381;</div>
      </div>
      <div className="tradeMargin">
        <div>
          {isMobile ? (
            <div className="isMobile">
              {" "}
              <div>Торговая</div>
              <div>наценка:</div>
            </div>
          ) : (
            "Торговая наценка:"
          )}
        </div>
        <div>{tradeMargin}&#8381;</div>
      </div>
      <div className="totalPriceInstallments">
        <div>
          {isMobile ? (
            <div className="isMobile">
              {" "}
              <div>Общая</div>
              <div>стоимость:</div>
            </div>
          ) : (
            "Общая стоимость товара:"
          )}
        </div>
        <div>{totalPriceInstallments ? totalPriceInstallments : 0}&#8381;</div>
      </div>
    </>
  );
};

export default AllResults;
