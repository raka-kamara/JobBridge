import { useState } from "react";

const PurchaseCoin = ({ onPurchase }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handlePurchase = (amount) => {
    setSelectedAmount(amount); 
    onPurchase(amount); // Send the selected amount to the parent component
  };

  return (
    <div>
      <div className="flex justify-center items-center my-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card bg-base-100 w-60 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">10 Coins = 1 Dollar</h2>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-[#C8E6C9]"
                  onClick={() => handlePurchase(1)}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-60 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">100 Coins = 9 Dollar</h2>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-[#C8E6C9]"
                  onClick={() => handlePurchase(9)}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-60 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">500 Coins = 19 Dollar</h2>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-[#C8E6C9]"
                  onClick={() => handlePurchase(19)}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-60 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">1000 Coins = 39 Dollar</h2>
              <div className="card-actions justify-end">
                <button
                  className="btn bg-[#C8E6C9]"
                  onClick={() => handlePurchase(39)}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
