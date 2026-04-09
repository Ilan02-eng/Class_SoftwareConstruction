let TRADUCTIONS_ESP = [
  " ¡Ven a pasar una tarde acogedora en nuestra cafetería de gatos, donde te esperan deliciosas bebidas, dulces y adorables gatitos! Ya sea que quieras relajarte, estudiar, leer un libro o simplemente disfrutar de la compañía de gatos amigables, nuestra cafetería es el lugar perfecto para desconectar. Trae a tus amigos y vive un ambiente cálido y acogedor lleno de ronroneos, mimos y diversión. ¡Te esperamos!",
  "¡Ven a pasar una tarde acogedora en nuestra cafetería de gatos, donde te esperan deliciosas bebidas, dulces y adorables gatitos! Ya sea que quieras relajarte, estudiar, leer un libro o simplemente disfrutar de la compañía de gatos amigables, nuestra cafetería es el lugar perfecto para desconectar. Trae a tus amigos y vive un ambiente cálido y acogedor lleno de ronroneos, mimos y diversión. ¡Te esperamos!",
  "Nuestras Redes:",
  "☕ BIENVENIDO A NUESTRO CATCAFE ☕",
];
function español() {
  titulo = document.getElementById("titulo");
  paragraph_1 = document.getElementById("paragraph_1");
  paragraph_2 = document.getElementById("paragraph_2");
  socials = document.getElementById("socials");
  const change = [
    paragraph_1.innerHTML,
    paragraph_2.innerHTML,
    socials.innerHTML,
    titulo.innerHTML,
  ];
  paragraph_1.innerHTML = TRADUCTIONS_ESP[0];
  paragraph_2.innerHTML = TRADUCTIONS_ESP[1];
  socials.innerHTML = TRADUCTIONS_ESP[2];
  titulo.innerHTML = TRADUCTIONS_ESP[3];
}

let TRADUCTIONS_ENG = [
  "Come spend a cozy afternoon at our catcafe, where delicious drinks, sweet treats, and adorable cats are waiting for you! Whether you want to relax, study, read a book, or simply enjoy the company of friendly cats, our café is the perfect place to unwind. Bring your friends and experience a warm, welcoming atmosphere filled with purrs, cuddles, and fun. We can’t wait to see you!",
  "Our catcafe also offers special events throughout the month, including kitten play sessions, themed afternoons, and opportunities to learn more about cat care and adoption. Every visit helps support the well-being of our resident cats and gives them a safe, loving environment while they wait for their forever homes. With comfortable seating, free Wi-Fi, and plenty of playful companions, it is the perfect place to create memorable moments while making a difference.",
  "Our Socials: ",
  "☕ WELCOME TO OUR CATCAFE ☕",
];

function english() {
  titulo = document.getElementById("titulo");
  paragraph_1 = document.getElementById("paragraph_1");
  paragraph_2 = document.getElementById("paragraph_2");
  socials = document.getElementById("socials");
  const change = [
    paragraph_1.innerHTML,
    paragraph_2.innerHTML,
    socials.innerHTML,
    titulo.innerHTML,
  ];
  paragraph_1.innerHTML = TRADUCTIONS_ENG[0];
  paragraph_2.innerHTML = TRADUCTIONS_ENG[1];
  socials.innerHTML = TRADUCTIONS_ENG[2];
  titulo.innerHTML = TRADUCTIONS_ENG[3];
}

let TRADUCTIONS_FRA = [
  "Venez passer un après-midi agréable dans notre café à chats! De délicieuses boissons, des friandises et d’adorables chats vous y attendent ! Que vous souhaitiez vous détendre, étudier, lire un livre ou simplement profiter de la compagnie de chats amicaux, notre café est l’endroit idéal pour décompresser. Amenez vos amis et découvrez une ambiance chaleureuse et accueillante, emplie de ronronnements, de câlins et de jeux. Nous avons hâte de vous accueillir!",
  "Notre café à chats propose également des événements spéciaux tout au long du mois, notamment des séances de jeu avec des chatons, des après-midis à thème et des occasions d'en apprendre davantage sur les soins et l'adoption des chats. Chaque visite contribue au bien-être de nos chats résidents et leur offre un environnement sûr et affectueux en attendant qu'ils trouvent leur foyer définitif. Avec des sièges confortables, le Wi-Fi gratuit et de nombreux compagnons joueurs, c'est l'endroit idéal pour créer des moments mémorables tout en faisant une bonne action.",
  "Nos réseaux sociaux : ",
  "☕ BIENVENUE DANS NOTRE CAWÉ ☕",
];

function française() {
  titulo = document.getElementById("titulo");
  paragraph_1 = document.getElementById("paragraph_1");
  paragraph_2 = document.getElementById("paragraph_2");
  socials = document.getElementById("socials");
  const change = [
    paragraph_1.innerHTML,
    paragraph_2.innerHTML,
    socials.innerHTML,
    titulo.innerHTML,
  ];
  paragraph_1.innerHTML = TRADUCTIONS_FRA[0];
  paragraph_2.innerHTML = TRADUCTIONS_FRA[1];
  socials.innerHTML = TRADUCTIONS_FRA[2];
  titulo.innerHTML = TRADUCTIONS_FRA[3];
}

let TRADUCTIONS_POR = [
  "Venha passar uma tarde acolhedora no nosso café com gatos, onde bebidas deliciosas, doces e gatinhos adoráveis ​​esperam por si! Quer queira relaxar, estudar, ler um livro ou simplesmente desfrutar da companhia de gatos amigáveis, o nosso café é o local perfeito para relaxar. Traga os seus amigos e experimente uma atmosfera acolhedora e calorosa, repleta de ronrons, carícias e diversão. Aguardamos a sua visita!",
  "¡Ven a Venha passar uma tarde acolhedora no nosso café com gatos, onde bebidas deliciosas, doces e gatinhos adoráveis ​​esperam por si! Quer queira relaxar, estudar, ler um livro ou simplesmente desfrutar da companhia de gatos amigáveis, o nosso café é o local perfeito para relaxar. Traga os seus amigos e experimente uma atmosfera acolhedora e calorosa, repleta de ronrons, carícias e diversão. Aguardamos a sua visita!",
  "As nossas Redes:",
  "☕ BEM-VINDO AO NOSSO CAFÉ DE GATOS ☕",
];
function portugues() {
  titulo = document.getElementById("titulo");
  paragraph_1 = document.getElementById("paragraph_1");
  paragraph_2 = document.getElementById("paragraph_2");
  socials = document.getElementById("socials");
  const change = [
    paragraph_1.innerHTML,
    paragraph_2.innerHTML,
    socials.innerHTML,
    titulo.innerHTML,
  ];
  paragraph_1.innerHTML = TRADUCTIONS_POR[0];
  paragraph_2.innerHTML = TRADUCTIONS_POR[1];
  socials.innerHTML = TRADUCTIONS_POR[2];
  titulo.innerHTML = TRADUCTIONS_POR[3];
}

const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2-icon lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>`;
const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-off-icon lucide-volume-off"><path d="M16 9a5 5 0 0 1 .95 2.293"/><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"/><path d="m2 2 20 20"/><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"/><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/></svg>`;
const audio = new Audio("./audio.mp3");
const container = document.querySelector("#control");
audio.addEventListener("canplaythrough", () => {
  container.innerHTML = playIcon;
  audio.loop = true;
  audio.play();
});

container.addEventListener("click", () => {
  if (audio.paused) {
    container.innerHTML = playIcon;
    audio.play();
  } else {
    container.innerHTML = pauseIcon;
    audio.pause();
  }
});

const modeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Light-Dark-Mode--Streamline-Sharp-Remix">
  <desc>
    Light Dark Mode Streamline Icon: https://streamlinehq.com
  </desc>
  <g id="light-dark-mode--light-dark-mode-setting-camera-picture-photo-image-brightness">
    <path id="Union" fill="#000000" fill-rule="evenodd" d="M16.7177 5.51463c-1.0046 -0.73201 -2.1858 -1.23626 -3.4677 -1.43686V0h-2.5v4.07784c-1.28179 0.20066 -2.4629 0.70493 -3.46746 1.43693L4.39853 2.63076 2.63076 4.39853l2.88401 2.88401C4.78277 8.2871 4.2785 9.46821 4.07784 10.75H0v2.5h4.07777c0.20059 1.2819 0.70484 2.4631 1.43683 3.4677l-2.88359 2.8836 1.76777 1.7677 2.88352 -2.8835c1.00461 0.7321 2.18582 1.2364 3.4677 1.4371V24h2.5v-4.0773c1.282 -0.2006 2.4632 -0.7049 3.4679 -1.437l2.8834 2.8833 1.7677 -1.7677 -2.8833 -2.8834c0.7321 -1.0047 1.2364 -2.1859 1.437 -3.4679H24v-2.5h-4.0774c-0.2007 -1.28187 -0.705 -2.46305 -1.4371 -3.46765l2.8839 -2.88382 -1.7678 -1.76777 -2.8839 2.88387ZM9.49603 7.08044c0.75157 -0.38332 1.60267 -0.59948 2.50417 -0.59948 3.0482 0 5.5193 2.47106 5.5193 5.51924 0 0.9013 -0.2161 1.7522 -0.5992 2.5036 -0.2267 0.023 -0.4568 0.0347 -0.6896 0.0347 -3.7386 0 -6.76929 -3.0307 -6.76929 -6.76924 0 -0.23253 0.01173 -0.46233 0.03462 -0.68882Z" clip-rule="evenodd" stroke-width="1"></path>
  </g>
</svg>`;

function toggleMode() {
  let state = "light";
  return () => {
    if (state === "light") {
      state = "dark";
      document.body.classList.add("darkMode");
    } else {
      state = "light";
      document.body.classList.remove("darkMode");
    }
  };
}

const btn = document.getElementById("modeButton");
btn.innerHTML = modeIcon;
btn.addEventListener("click", toggleMode());
// document.getElementById("modeButton").innerHTML = modeIcon();
