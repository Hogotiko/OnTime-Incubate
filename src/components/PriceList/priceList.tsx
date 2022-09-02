import "./priceList.scss";
import { PriceListData } from "../../mock/priceListData";

const PriceList = () => {
  const checked = "assets/assetsPriceList/checked.svg";
  const unChecked = "assets/assetsPriceList/unchecked.svg";
  const hrimg = "assets/assetsPriceList/hr.svg";

  const priceListData = PriceListData()

  return (
    <div className="priceListContainer">
      <div className="headTextContainer">
        <p className="headTextPriceList">Choose The Best Plan For You</p>
        <p className="headSubTextPriceList">
          Choose the plan that's right for you, with the flexibility to upgrade
          anytime.
        </p>
      </div>

      <div className="tarifsContainer">
        {priceListData.map((item) => {
          return (
            <div key={item.id} className="cardItemContainer">
              <div className="tarifCard">
                <img alt="" src={item.tarifSrc} />
                <div className="tarifTextHead">{item.tarifText}</div>
              </div> 
              <div className="textItemsContainer">
                {item.isHave.map((i) => {
                  return (
                    <div key={i.id} className="iconTextContainer">
                      <span>
                        <img alt="" src={i.isExist ? checked : unChecked} />
                      </span>
                      <span className="textPriceList"> {i.text} </span>
                    </div>
                  );
                })}
              </div>
              <div className="hrPriceList">
                <span>
                  <img alt="" src={hrimg} />
                </span>
                <span className="itemPriceText">
                  ${item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceList;
