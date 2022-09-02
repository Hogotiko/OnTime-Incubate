import "./settingsList.scss";
import { SettingsPageData } from "../../mock/settingsPageData";

const SettingsList = () => {
  const settingItemsData = SettingsPageData()

  return (
    <div className="settingsListContainer">
      <div className="headText">
        Learn what Inkubate products can do for you
      </div>

      <div className="settingItemsContainer">
        {settingItemsData.map((item) => {
          return (
            <div key={item.id} className="settingsItem">
              <div className="settingsListImgMain">
                <img alt="" src={item.imgMain} />
              </div>
              <span className="settingsListHeadText">{item.headText}</span>
              <span className="settingsListSubText">{item.subText}</span>
              <div className="settingsListImgLearn">
                <img alt="" src={item.imgLearn} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsList;
