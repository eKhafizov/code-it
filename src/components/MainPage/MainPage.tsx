import SectionAbout from '../SectionAbout/SectionAbout'
import SectionExpertise from '../SectionExpertise/SectionExpertise'
import SectionDifference from '../SectionDifference/SectionDifference'
import SectionComfort from '../SectionComfort/SectionComfort'
import SectionBenefits from '../SectionBenefits/SectionBenefits'
import SectionMarketing from '../SectionMarketing/SectionMarketing'
import SectionAdvice from '../SectionAdvice/SectionAdvice'
import SectionControl from '../SectionControl/SectionControl'
import SectionAdaptive from '../SectionAdaptive/SectionAdaptive'
//import SectionLogos from '../SectionLogos/SectionLogos'
import SectionTurnkey from '../SectionTurnkey/SectionTurnkey'
import SectionBrands from '../SectionBrands/SectionBrands'
import SectionTeam from '../SectionTeam/SectionTeam'
import SectionPortfolio from '../SectionPortfolio/SectionPortfolio'
import SectionReviews from '../SectionReviews/SectionReviews'
import SectionPrices from '../SectionPrices/SectionPrices'
import SectionContacts from '../SectionContacts/SectionContacts'


export default function MainPage() : JSX.Element {
  return (
    <main className='main-landing'>
        <h1 className='hidden'>Веб-студия Новая Победа: разработка под ключ продающих сайтов для победителей. Разработка интернет-магазинов под ключ.</h1>
        <SectionAbout />
        <SectionExpertise />
        <SectionDifference />
        <SectionComfort />
        <SectionBenefits />
        <SectionMarketing />
        <SectionAdvice />
        <SectionControl />
        <SectionAdaptive />
        {/* <SectionLogos /> */}
        <SectionTurnkey />
        <SectionBrands />
        <SectionTeam />
        <SectionPortfolio />
        <SectionReviews />
        <SectionPrices />
        <SectionContacts />
    </main>
  )
}