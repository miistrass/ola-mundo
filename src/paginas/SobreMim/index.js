import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Milena!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto da Milena sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>Heey! 🙋‍♀️</p>

      <p className={styles.paragrafo}>
        Eu sou a Milena, tenho 25 anos, sou graduanda em Análise e
        Desenvolvimento de Sistemas e estou transitando para a área de
        tecnologia, muito prazer!
      </p>

      <p className={styles.paragrafo}>
        Sou uma pessoa extrovertida, curiosa, determinada e apaixonada por
        tecnologia! Contando um pouco sobre a minha trajetória, tenho sólida
        experiência em Marketing Digital, mas acabei me envolvendo com a área do
        front-end e me identifiquei muito!
      </p>

      <p className={styles.paragrafo}>
        Me dediquei no último ano a estudar sobre o desenvolvimento web, então
        passei por todas as etapas, desde o início com HTML & CSS, Flexbox, Grid
        e então parti para o que realmente faz sentido: Javascript e React.
      </p>

      <p className={styles.paragrafo}>
        No meu Linkedin você pode visualizar todas as minhas certificações. Já
        no meu perfil do Github, você vai encontrar todos os meus projetos.
      </p>

      <p className={styles.paragrafo}>
        Hoje posso dizer que estou pronta para entrar em um time e desempenhar
        as minhas habilidades técnicas adquiridas ao longo desse ano de estudos,
        além de trazer a minha bagagem com o Marketing, que proporcionou muitas
        softs skils, como: comunicação, trabalho em equipe, autonomia,
        resiliência, foco em resultados e muita vontade de aprender.
      </p>

      <p className={styles.paragrafo}>
        Procuro uma equipe que queira dar oportunidade para uma pessoa que está
        fazendo transição e que tem muita vontade de aprender. Quero poder
        contribuir ao máximo para alcançar os resultados desejáveis, e continuar
        evoluindo como profissional.
      </p>

      <p className={styles.paragrafo}>
        E um extra sobre mim: sou entusiasta da astronomia, adoro jogos de RPG e
        souls like, e a minha franquia de filmes favorita é Star Wars.
      </p>
    </PostModelo>
  );
}
