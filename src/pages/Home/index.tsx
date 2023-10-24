import { MainContainer } from './styles'
import coffeMainImage from '../../assets/coffe-main-image.svg'

export function Home() {
  return (
    <MainContainer>
      <div className="div_main_information">Test 1</div>
      <div className="div_img_coffe">
        <img src={coffeMainImage} alt="" />
      </div>
    </MainContainer>
  )
}
