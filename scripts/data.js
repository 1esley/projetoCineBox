const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ficção Científica",
    description: "Uma jornada épica pelo espaço e pelo tempo.",
    poster: "../images/interestelar.png",
    synopsis: "Um grupo de exploradores viaja pelo espaço em busca de um novo lar para a humanidade."
  },
  {
    id: 2,
    title: "As Branquelas",
    genre: "Comédia",
    description: "Dois agentes do FBI se disfarçam de socialites para investigar um crime.",
    poster: "../images/branquelas.jpg",
    synopsis: "Dois agentes do FBI se disfarçam de mulheres brancas ricas para proteger socialites e investigar um crime."
  },
  {
    id: 3,
    title: "Titanic",
    genre: "Romance",
    description: "Um romance épico a bordo do navio Titanic.",
      poster: "../images/titanic.jpg",
    synopsis: "Jack e Rose vivem um romance proibido durante a viagem inaugural do Titanic."
  },
  {
    id: 4,
    title: "Toy Story",
    genre: "Animação",
    description: "Brinquedos ganham vida quando os humanos não estão por perto.",
      poster: "../images/toystory.jpg",
    synopsis: "Woody e Buzz Lightyear enfrentam desafios para voltar ao seu dono, Andy."
  },
  {
    id: 5,
    title: "Drácula de Bram Stoker",
    genre: "Gótico",
    description: "A clássica história do vampiro Drácula.",
      poster: "../images/dracula.jpg",
    synopsis: "O conde Drácula busca amor e vingança em Londres, espalhando terror e sedução."
  },
  {
    id: 6,
    title: "Missão Impossível",
    genre: "Ação",
    description: "Um agente secreto enfrenta missões perigosas ao redor do mundo.",
      poster: "../images/impossible.jpg",
    synopsis: "Ethan Hunt lidera uma equipe para impedir ameaças globais e salvar o mundo."
  },
  {
    id: 7,
    title: "O Senhor dos Anéis",
    genre: "Fantasia",
    description: "Uma jornada épica em um mundo de fantasia.",
      poster: "../images/senhordosaneis.jpg",
    synopsis: "Um hobbit parte em uma jornada para destruir um anel mágico e salvar o mundo."
  },
  {
    id: 8,
    title: "Cidade de Deus",
    genre: "Drama",
    description: "A história de dois jovens crescendo em uma favela do Rio de Janeiro.",
      poster: "../images/cidadedeus.jpg",
    synopsis: "Buscapé e Dadinho vivem na Cidade de Deus, enfrentando violência, escolhas e o destino de suas vidas."
  },
  {
    id: 9,
    title: "John Wick",
    genre: "Ação",
    description: "Um ex-assassino busca vingança após perder seu cachorro.",
      poster: "../images/johnwick.jpeg",
    synopsis: "John Wick retorna ao submundo do crime para se vingar de quem destruiu sua vida."
  },
  {
    id: 10,
    title: "Mad Max: Estrada da Fúria",
    genre: "Ação",
    description: "Em um mundo pós-apocalíptico, um guerreiro luta pela sobrevivência.",
      poster: "../images/madmax.jpg",
    synopsis: "Max e Furiosa enfrentam tiranos e buscam liberdade em um deserto caótico."
  },
  {
    id: 11,
    title: "Duro de Matar",
    genre: "Ação",
    description: "Um policial enfrenta terroristas em um prédio durante o Natal.",
      poster: "../images/durodematar.jpg",
    synopsis: "John McClane luta contra terroristas para salvar sua esposa e outros reféns."
  },
  {
    id: 12,
    title: "Missão Impossível: Protocolo Fantasma",
    genre: "Ação",
    description: "Ethan Hunt enfrenta uma ameaça global.",
      poster: "../images/missionimpo.jpg",
    synopsis: "Ethan Hunt e sua equipe precisam impedir um ataque nuclear."
  },
  {
    id: 13,
    title: "O Protetor",
    genre: "Ação",
    description: "Um ex-agente ajuda pessoas em perigo e enfrenta criminosos.",
      poster: "../images/oprotetor.jpg",
    synopsis: "Robert McCall usa suas habilidades para proteger inocentes e combater o crime."
  },
  {
    id: 14,
    title: "Os Mercenários",
    genre: "Ação",
    description: "Um grupo de mercenários enfrenta missões explosivas ao redor do mundo.",
      poster: "../images/osmercenarios.jpg",
    synopsis: "Barney Ross lidera um time de mercenários em missões perigosas e cheias de ação."
  },
  {
    id: 15,
    title: "Velocidade Máxima",
    genre: "Ação",
    description: "Um policial precisa salvar passageiros de um ônibus com uma bomba.",
      poster: "../images/velocidademaxima.jpg",
    synopsis: "Jack Traven enfrenta um criminoso e tenta salvar todos em um ônibus em alta velocidade."
  },
  {
    id: 16,
    title: "Orgulho e Preconceito",
    genre: "Romance",
    description: "Uma história de amor e superação de diferenças sociais.",
    poster: "../images/orgulhoepreconceito.jpg",
    synopsis: "Elizabeth Bennet e Mr. Darcy enfrentam preconceitos e diferenças para viver um grande amor."
  },
  {
    id: 17,
    title: "Diário de uma Paixão",
    genre: "Romance",
    description: "Um casal luta para ficar junto apesar das adversidades.",
    poster: "../images/diariodeumapaixao.jpg",
    synopsis: "Noah e Allie vivem um romance intenso e inesquecível, marcado por obstáculos e memórias."
  },
  {
    id: 18,
    title: "Como Eu Era Antes de Você",
    genre: "Romance",
    description: "Uma jovem cuida de um homem tetraplégico e transforma sua vida.",
    poster: "../images/comoeueraantesdevc.jpg",
    synopsis: "Louisa Clark muda a vida de Will Traynor, mostrando que o amor pode transformar tudo."
  },
  {
    id: 19,
    title: "Simplesmente Amor",
    genre: "Romance",
    description: "Histórias de amor entrelaçadas durante o Natal em Londres.",
    poster: "../images/simplesmenteamor.jpg",
    synopsis: "Diversas histórias de amor se cruzam em Londres durante o Natal, mostrando diferentes formas de amar."
  },
  {
    id: 20,
    title: "A Proposta",
    genre: "Romance",
    description: "Uma chefe e seu assistente fingem um casamento para evitar deportação.",
    poster: "../images/aproposta.jpg",
    synopsis: "Margaret e Andrew fingem um casamento, mas acabam se apaixonando de verdade."
  },
  {
    id: 21,
    title: "Um Lugar Chamado Notting Hill",
    genre: "Romance",
    description: "Um romance improvável entre uma estrela de cinema e um dono de livraria.",
    poster: "../images/nothinghill.jpg",
    synopsis: "William e Anna vivem um romance inesperado entre o glamour de Hollywood e a simplicidade de Londres."
  },
  {
    id: 22,
    title: "A Culpa é das Estrelas",
    genre: "Romance",
    description: "Dois adolescentes com câncer vivem um romance emocionante.",
    poster: "../images/aculpaehdasestrelas.jpg",
    synopsis: "Hazel e Gus enfrentam desafios e vivem um amor intenso apesar das dificuldades."
  },
  {
    id: 23,
    title: "Matrix",
    genre: "Ficção Científica",
    description: "Um hacker descobre a verdadeira natureza da realidade.",
    poster: "../images/matrix.jpeg",
    synopsis: "Um hacker descobre a verdadeira natureza da realidade e se une a uma resistência para lutar contra os controladores."
  },
  {
    id: 24,
    title: "Blade Runner",
    genre: "Ficção Científica",
    description: "Um caçador de androides em um futuro distópico.",
    poster: "../images/bladerunner.jpg",
    synopsis: "Um caçador de androides em um futuro distópico onde ele precisa enfrentar os limites da humanidade e da tecnologia."
  },
  {
    id: 25,
    title: "A Origem",
    genre: "Ficção Científica",
    description: "Um ladrão invade sonhos para roubar segredos e implantar ideias.",
    poster: "../images/origem.jpg",
    synopsis: "Dom Cobb é um especialista em roubar segredos do inconsciente das pessoas durante o sono, mas recebe a missão de implantar uma ideia na mente de alguém."
  },
  {
    id: 26,
    title: "O Homem Bicentenário",
    genre: "Ficção Científica",
    description: "Um robô busca se tornar humano ao longo de dois séculos.",
    poster: "../images/bicentenario.jpg",
    synopsis: "Andrew, um robô, luta para conquistar sua humanidade e liberdade."
  },
  {
    id: 27,
    title: "O Quinto Elemento",
    genre: "Ficção Científica",
    description: "Um taxista e uma mulher misteriosa salvam o mundo de uma ameaça cósmica.",
    poster: "../images/quintoelemento.jpg",
    synopsis: "Korben Dallas e Leeloo enfrentam forças do mal para salvar a Terra."
  },
  {
    id: 28,
    title: "Minority Report: A Nova Lei",
    genre: "Ficção Científica",
    description: "Um policial investiga crimes antes que eles aconteçam.",
    poster: "../images/minoriryreport.jpg",
    synopsis: "John Anderton descobre uma conspiração enquanto trabalha com o sistema de prevenção de crimes."
  },
  {
    id: 29,
    title: "A Chegada",
    genre: "Ficção Científica",
    description: "Uma linguista tenta se comunicar com alienígenas que chegam à Terra.",
    poster: "../images/achegada.jpg",
    synopsis: "Louise Banks desvenda o idioma dos alienígenas e descobre segredos sobre o tempo e a humanidade."
  },
  {
    id: 30,
    title: "Se Beber, Não Case",
    genre: "Comédia",
    description: "Três amigos acordam em Las Vegas sem lembrar da noite anterior.",
    poster: "../images/sebebernaocase.jpg",
    synopsis: "Após uma noite de festas em Las Vegas, três amigos precisam encontrar o noivo desaparecido antes do casamento."
  },
  {
    id: 31,
    title: "Superbad - É Hoje",
    genre: "Comédia",
    description: "Adolescentes tentam aproveitar ao máximo a última festa antes da faculdade.",
    poster: "../images/superbad.jpg",
    synopsis: "Dois amigos embarcam em uma noite cheia de confusões para conseguir bebidas e conquistar garotas."
  },
  {
    id: 32,
    title: "O Máscara",
    genre: "Comédia",
    description: "Um homem tímido encontra uma máscara mágica que transforma sua personalidade.",
    poster: "../images/mascara.jpg",
    synopsis: "Stanley Ipkiss descobre uma máscara que lhe dá poderes e o transforma em um personagem extravagante."
  },
  {
    id: 33,
    title: "Click",
    genre: "Comédia",
    description: "Um homem recebe um controle remoto que pode controlar sua vida.",
    poster: "../images/click.jpg",
    synopsis: "Michael Newman descobre um controle remoto mágico que pode avançar, pausar e retroceder momentos de sua vida."
  },
  {
    id: 34,
    title: "Esqueceram de Mim",
    genre: "Comédia",
    description: "Um garoto é deixado sozinho em casa e precisa se defender de ladrões.",
    poster: "../images/esqueceramdemim.jpg",
    synopsis: "Kevin é esquecido pela família e precisa proteger sua casa de dois ladrões atrapalhados."
  },
  {
    id: 35,
    title: "A Mentira",
    genre: "Comédia",
    description: "Uma estudante inventa uma mentira que foge do controle.",
    poster: "../images/amentira.jpg",
    synopsis: "Olive inventa uma mentira sobre sua vida amorosa e acaba virando o centro das atenções na escola."
  },
  {
    id: 36,
    title: "Jumanji: Bem-vindo à Selva",
    genre: "Comédia",
    description: "Quatro adolescentes são transportados para um videogame.",
    poster: "../images/jumanji.jpg",
    synopsis: "Quatro adolescentes entram em um videogame e precisam vencer desafios para voltar ao mundo real."
  },
  {
    id: 37,
    title: "O Fantasma da Ópera",
    genre: "Gótico",
    description: "Um fantasma assombra uma ópera de Paris.",
    poster: "../images/fastasmadaopera.jpg",
    synopsis: "O Fantasma se apaixona por uma jovem cantora e cria um clima de mistério e medo."
  },
  {
    id: 38,
    title: "Sweeney Todd: O Barbeiro Demoníaco da Rua Fleet",
    genre: "Gótico",
    description: "Um barbeiro busca vingança em Londres.",
    poster: "../images/obarbeiro.jpg",
    synopsis: "Sweeney Todd retorna a Londres para se vingar, criando uma série de assassinatos macabros."
  },
  {
    id: 39,
    title: "A Lenda do Cavaleiro Sem Cabeça",
    genre: "Gótico",
    description: "Um investigador enfrenta um cavaleiro fantasmagórico.",
    poster: "../images/alendadocavaleiro.jpg",
    synopsis: "Ichabod Crane investiga assassinatos misteriosos causados por um cavaleiro sem cabeça."
  },
  {
    id: 40,
    title: "O Corvo",
    genre: "Gótico",
    description: "Um homem volta dos mortos para buscar vingança.",
    poster: "../images/ocorvo.jpg",
    synopsis: "Eric Draven retorna do além para vingar sua morte e a de sua noiva."
  },
  {
    id: 41,
    title: "Entrevista com o Vampiro",
    genre: "Gótico",
    description: "Dois vampiros contam suas histórias ao longo dos séculos.",
    poster: "../images/entrevistacomovamp.jpg",
    synopsis: "Louis e Lestat exploram a imortalidade, o amor e a solidão."
  },
  {
    id: 42,
    title: "O Labirinto do Fauno",
    genre: "Gótico",
    description: "Uma menina descobre um mundo mágico e sombrio durante a guerra civil espanhola.",
    poster: "../images/olabirintodofauno.jpg",
    synopsis: "Ofelia encontra um fauno misterioso e precisa cumprir tarefas mágicas em um mundo sombrio."
  },
  {
    id: 43,
    title: "A Casa das Almas Perdidas",
    genre: "Gótico",
    description: "Uma família enfrenta espíritos em uma mansão assombrada.",
    poster: "../images/casa das almas perdidas.jpg",
    synopsis: "Uma família luta para sobreviver em uma casa cheia de espíritos e segredos."
  },
  {
    id: 44,
    title: "Procurando Nemo",
    genre: "Animação",
    description: "Um peixe-palhaço atravessa o oceano para encontrar seu filho.",
    poster: "../images/procurandonemo.jpg",
    synopsis: "Marlin e Dory embarcam em uma aventura para encontrar Nemo, que foi capturado por mergulhadores."
  },
  {
    id: 45,
    title: "Divertida Mente",
    genre: "Animação",
    description: "As emoções de uma menina enfrentam mudanças em sua vida.",
    poster: "../images/divertidamente.jpg",
    synopsis: "Alegria, Tristeza, Raiva, Medo e Nojinho ajudam Riley a lidar com uma mudança de cidade."
  },
  {
    id: 46,
    title: "Moana",
    genre: "Animação",
    description: "Uma jovem embarca em uma jornada pelo oceano para salvar seu povo.",
    poster: "../images/moana.jpg",
    synopsis: "Moana desafia o oceano e encontra Maui para restaurar o coração de Te Fiti."
  },
  {
    id: 47,
    title: "Frozen",
    genre: "Animação",
    description: "Duas irmãs enfrentam desafios para salvar seu reino do inverno eterno.",
    poster: "../images/froze.jpg",
    synopsis: "Elsa e Anna lutam para salvar Arendelle e descobrir o poder do amor verdadeiro."
  },
  {
    id: 48,
    title: "Meu Malvado Favorito",
    genre: "Animação",
    description: "Um vilão aprende o valor da família ao adotar três meninas.",
    poster: "../images/malvadofav.jpg",
    synopsis: "Gru planeja roubar a lua, mas sua vida muda ao adotar três meninas."
  },
  {
    id: 49,
    title: "Zootopia",
    genre: "Animação",
    description: "Uma coelha policial e uma raposa enfrentam mistérios em uma cidade de animais.",
    poster: "../images/zootopia.jpg",
    synopsis: "Judy Hopps e Nick Wilde desvendam um mistério em Zootopia, onde todos os animais convivem."
  },
  {
    id: 50,
    title: "Monstros S.A.",
    genre: "Animação",
    description: "Monstros trabalham em uma fábrica de sustos para gerar energia.",
    poster: "../images/monstrossa.jpg",
    synopsis: "Sulley e Mike precisam devolver a menina Boo ao seu mundo sem serem descobertos."
  },
]