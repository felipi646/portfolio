import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque
      inventore adipisci iste veritatis a laudantium? Accusamus eius esse,
      numquam deleniti saepe explicabo maxime quis porro molestiae ea vero
      asperiores?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=felipi646&show_icons=true&theme=dracula" />
      <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=felipi646&layout=compact&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
