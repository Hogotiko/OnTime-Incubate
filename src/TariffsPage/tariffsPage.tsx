import PriceList from '../components/PriceList/priceList'
import SettingsList from '../components/SettingsList/settingsList'
import './tariffsPage.scss'

const TariffsPage = () => {

  return (
    <div className="tariffPageContainer">
      <SettingsList />
      <PriceList />
    </div>
  )
}

export default TariffsPage