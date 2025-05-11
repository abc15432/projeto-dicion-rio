<<<<<<< HEAD
function searchWord() {
    const word = document.getElementById("search").value.toLowerCase();
    const definitionElement = document.getElementById("definition");

    // Dicionário fictício com algumas palavras e definições
    const dictionary = {
        "javascript": "JavaScript é uma linguagem de programação usada principalmente no desenvolvimento de websites.",
        "html": "HTML (HyperText Markup Language) é a linguagem de marcação padrão para a criação de páginas web.",
        "css": "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.",
        "computador": "Um computador é uma máquina eletrônica capaz de processar dados e realizar cálculos.",
        "saúde": "Estado de completo bem-estar físico e mental.",
        "amor": "Sentimento profundo de afeto, carinho e dedicação.",
        "escola": "Instituição onde se ensina e se aprende.",
        "comida": "Substância que serve para alimentar o corpo.",
        "amizade": "Relação de afeto, simpatia e confiança entre pessoas.",
        "água": "Líquido essencial para a vida.",
        "trabalho": "Atividade realizada com um propósito ou objetivo.",
        "tristeza": "Sentimento causado por dor ou perda.",
        "sono": "Estado de repouso no qual o corpo descansa.",
        "família": "Grupo de pessoas unidas por laços de sangue ou afeto.",
        "amigo": "Pessoa com quem se tem afeição e confiança.",
        "trânsito": "Movimento de veículos e pessoas nas vias.",
        "tempo": "Duração dos fatos, momentos.",
        "estudo": "Ato de aprender ou adquirir conhecimento.",
        "celular": "Aparelho portátil para comunicação.",
        "viagem": "Deslocamento para um lugar diferente.",
        "internet": "Rede mundial de computadores.",
        "dinheiro": "Meio de troca usado para adquirir bens e serviços.",
        "alegria": "Sentimento de prazer ou felicidade.",
        "casa": "Lugar onde alguém mora."
        }
    };

    // Verificar se a palavra está no dicionário
    if (dictionary[word]) {
        definitionElement.textContent = dictionary[word];
    } else {
        definitionElement.textContent = "Desculpe, palavra não encontrada!";
    }

=======
function searchWord() {
    const word = document.getElementById("search").value.toLowerCase();
    const definitionElement = document.getElementById("definition");

    // Dicionário fictício com algumas palavras e definições
    const dictionary = {
        "javascript": "JavaScript é uma linguagem de programação usada principalmente no desenvolvimento de websites.",
        "html": "HTML (HyperText Markup Language) é a linguagem de marcação padrão para a criação de páginas web.",
        "css": "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.",
        "computador": "Um computador é uma máquina eletrônica capaz de processar dados e realizar cálculos.",
        "saúde": "Estado de completo bem-estar físico e mental.",
        "amor": "Sentimento profundo de afeto, carinho e dedicação.",
        "escola": "Instituição onde se ensina e se aprende.",
        "comida": "Substância que serve para alimentar o corpo.",
        "amizade": "Relação de afeto, simpatia e confiança entre pessoas.",
        "água": "Líquido essencial para a vida.",
        "trabalho": "Atividade realizada com um propósito ou objetivo.",
        "tristeza": "Sentimento causado por dor ou perda.",
        "sono": "Estado de repouso no qual o corpo descansa.",
        "família": "Grupo de pessoas unidas por laços de sangue ou afeto.",
        "amigo": "Pessoa com quem se tem afeição e confiança.",
        "trânsito": "Movimento de veículos e pessoas nas vias.",
        "tempo": "Duração dos fatos, momentos.",
        "estudo": "Ato de aprender ou adquirir conhecimento.",
        "celular": "Aparelho portátil para comunicação.",
        "viagem": "Deslocamento para um lugar diferente.",
        "internet": "Rede mundial de computadores.",
        "dinheiro": "Meio de troca usado para adquirir bens e serviços.",
        "alegria": "Sentimento de prazer ou felicidade.",
        "casa": "Lugar onde alguém mora."
        }
    };

    // Verificar se a palavra está no dicionário
    if (dictionary[word]) {
        definitionElement.textContent = dictionary[word];
    } else {
        definitionElement.textContent = "Desculpe, palavra não encontrada!";
    }

>>>>>>> e9f16c3798f57717184aa3db2095f4422f0916fe
