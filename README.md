<h1 align="center">
  🧪 LogicTS.Lab
</h1>

<p align="center">
  <strong>Laboratório de Lógica de Programação com TypeScript</strong><br>
  <em>Front-End • TypeScript • Algoritmos • Em evolução</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-orange" alt="Status">
</p>

<p align="center">
  • <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-projetos">Projetos</a> •
  <a href="#-como-executar-o-projeto">Como executar</a> •
  <br>
  • <a href="#-conceitos-praticados">Conceitos</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-estrutura-do-projeto">Estrutura</a> •
  <a href="#-autor">Autor</a> •
</p>

---

## 💻 Sobre o projeto

O **LogicTS.Lab** é um laboratório de estudos dedicado à lógica de programação, aos algoritmos e aos fundamentos do TypeScript.

O projeto reúne miniaplicações interativas desenvolvidas para praticar conceitos essenciais do desenvolvimento de software, explorando desde tipagem estática, interfaces e estruturas de dados até programação orientada a objetos, geração procedural e visualização de dados com SVG.

A proposta é consolidar o raciocínio lógico e aprofundar os conhecimentos em TypeScript por meio de projetos pequenos, progressivos e funcionais, aproximando os fundamentos da programação de problemas práticos.

### 🎯 Objetivos do projeto

- Desenvolver o raciocínio lógico e a capacidade de resolver problemas.
- Praticar TypeScript e seus recursos de tipagem estática.
- Compreender interfaces, Union Types e estruturas de dados.
- Trabalhar com arrays, Maps, objetos, funções e algoritmos.
- Aplicar conceitos de Programação Orientada a Objetos (POO).
- Explorar matrizes, lógica espacial e geração procedural.
- Desenvolver interfaces dinâmicas com HTML, CSS e JavaScript.
- Construir gráficos e representações visuais utilizando SVG.
- Registrar a evolução dos estudos por meio de projetos práticos.

---

## 🚀 Projetos

O laboratório reúne cinco atividades, cada uma com foco em diferentes conceitos da programação e do TypeScript.

| Projeto | Conceitos principais |
|---|---|
| **Organizador de Inventário** | Tipagem estrita, interfaces, Union Types e manipulação de arrays. |
| **Analisador de Frequência de Texto** | Maps, Regex, transformação de dados e algoritmos de ordenação. |
| **Simulador de Batalha por Turnos** | POO, classes, herança, encapsulamento e lógica de combate. |
| **Gerador de Labirinto Procedural** | Matrizes bidimensionais, aleatoriedade controlada e lógica espacial. |
| **Simulador de Clima com Gráficos SVG** | Normalização matemática, estatística e visualização de dados. |

### 🎒 1. Organizador de Inventário

Sistema de gerenciamento de itens com controle de peso máximo de **20 kg**.

**Funcionalidades e implementação:**
- Definição de contratos de dados com `interface Item`.
- Restrição de categorias utilizando Union Types: `'arma' | 'pocao' | 'escudo'`.
- Cálculo do peso total com `.reduce()`.
- Validação da capacidade do inventário.
- Renderização condicional baseada nas propriedades dos itens.

**Conceitos praticados:** Tipagem estrita, segurança de tipos, interfaces e manipulação de estruturas de dados mutáveis.

### 🔍 2. Analisador de Frequência de Texto

Aplicação que processa textos e identifica as **5 palavras mais recorrentes**, transformando os dados em informações visuais.

**Funcionalidades e implementação:**
- Contagem de palavras utilizando `Map<string, number>`.
- Normalização de texto com Regex.
- Transformação e ordenação de dados com `.map()`, `.sort()` e `.slice()`.
- Cálculo de porcentagens dinâmicas.
- Representação visual dos resultados com barras de progresso.

**Conceitos praticados:** Estruturas de dados, processamento de strings, manipulação funcional de dados e algoritmos de ordenação.

### ⚔️ 3. Simulador de Batalha por Turnos

Simulador de combate entre heróis e monstros, desenvolvido com foco na modelagem de entidades e na lógica de jogos.

**Funcionalidades e implementação:**
- Modelagem de combatentes utilizando classes.
- Classe base `Combatente` e subclasses `Heroi` e `Monstro`.
- Encapsulamento de atributos e controle do estado interno.
- Motor de batalha com loop `while`.
- Geração de números aleatórios (RNG) para críticos e erros.
- Registro histórico de eventos por meio de logs estruturados.

**Conceitos praticados:** Programação Orientada a Objetos, herança, encapsulamento, abstração da lógica de negócio e fundamentos de arquitetura de jogos.

### 🗺️ 4. Gerador de Labirinto Procedural

Gerador de labirintos dinâmicos baseado em matrizes e densidade de paredes.

**Funcionalidades e implementação:**
- Representação do cenário com arrays bidimensionais: `Celula[][]`.
- Geração aleatória de paredes com base na densidade configurada.
- Inicialização independente das células, evitando referências compartilhadas.
- Validação das bordas e garantia de posições livres para início e fim.
- Renderização dinâmica utilizando CSS Grid.

**Conceitos praticados:** Matrizes, algoritmos probabilísticos, lógica espacial, geração procedural e integração entre dados e interface.

### ☁️ 5. Simulador de Clima com Gráficos SVG

Simulador de clima com visualização de temperaturas por meio de gráficos de linha construídos com SVG puro.

**Funcionalidades e implementação:**
- Construção de gráficos vetoriais sem bibliotecas externas.
- Normalização matemática para conversão de temperaturas em coordenadas.
- Geração de caminhos SVG utilizando comandos `M` e `L`.
- Cálculo de média, temperatura máxima e mínima.
- Gráfico responsivo com dimensões recalculadas conforme o container.

**Conceitos praticados:** Matemática aplicada à interface, manipulação de SVG, agregação de dados, estatística e visualização de informações.

---

## 🧠 Conceitos praticados

Ao longo dos projetos, o laboratório aborda diferentes fundamentos importantes da programação.

**Lógica de programação e algoritmos**
- Variáveis, tipos de dados e operadores.
- Estruturas condicionais e loops.
- Funções, parâmetros e validações.
- Algoritmos de contagem, transformação e ordenação.
- Geração aleatória e lógica espacial.

**TypeScript e estruturas de dados**
- Tipagem estática e tipagem estrita.
- Interfaces e Union Types.
- Arrays e matrizes bidimensionais.
- Maps e objetos.
- Classes, herança e encapsulamento.
- Tipagem de entidades e estruturas de dados.

**Desenvolvimento Front-End**
- Estruturação com HTML5.
- Estilização com CSS3.
- Integração entre TypeScript e JavaScript.
- Manipulação do DOM e renderização dinâmica.
- CSS Grid.
- Criação de gráficos com SVG.
- Interfaces interativas e responsivas.

---

## 🛠 Tecnologias

As seguintes tecnologias e ferramentas fazem parte do desenvolvimento do laboratório.

### Front-End

- **HTML5** — Estrutura e semântica das páginas.
- **CSS3** — Estilização, layouts e apresentação visual.
- **TypeScript** — Tipagem estática, modelagem de dados e implementação da lógica.
- **JavaScript** — Execução da lógica compilada no navegador.
- **SVG** — Construção de gráficos e representações vetoriais.

### Ferramentas

- **Visual Studio Code** — Ambiente de desenvolvimento.
- **TypeScript Compiler (`tsc`)** — Compilação de TypeScript para JavaScript.
- **Live Server** — Execução local das páginas durante o desenvolvimento.
- **Git** — Controle de versão.
- **GitHub** — Hospedagem do código e acompanhamento da evolução do projeto.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Dferreiraz/LogicTS.Lab.git
```

### 2. Entre na pasta do projeto

```bash
cd LogicTS.Lab
```

### 3. Abra o projeto

Abra a pasta no Visual Studio Code:

```bash
code .
```

### 4. Compile o TypeScript

O navegador executa JavaScript, portanto, os arquivos TypeScript precisam ser compilados antes da execução.

Se o projeto possuir `tsconfig.json` e o compilador TypeScript estiver instalado:

```bash
tsc
```

Caso o compilador ainda não esteja disponível, siga a configuração de dependências do projeto para instalá-lo.

### 5. Execute no navegador

Abra o arquivo `index.html` correspondente à atividade desejada.

Você também pode utilizar a extensão **Live Server** no VS Code para executar as páginas localmente e facilitar os testes durante o desenvolvimento.

Certifique-se de que os arquivos JavaScript compilados estejam disponíveis nos caminhos referenciados pelo HTML.

---

## 📂 Estrutura do Projeto

```text
LogicTS.Lab/                  # Dashboard principal
├── package.json                # Scripts e módulos do projeto
├── tsconfig.json               # Configuração do compilador TypeScript
├── vercel.json                 # Configuração de deploy na Vercel
├── .gitignore                  # Arquivos e diretórios ignorados
├── public/                     # Interface do Menu Principal
│    ├── index.html
│    └── src/
│    └── img/
│          └──TSlogo.svg
├── inventario/
│   ├── index.html              # Interface do Inventário
│   └── src/
│       ├── types.ts            # Interface Item e tipos auxiliares
│       └── main.ts             # Lógica de negócio e manipulação do DOM
│
├── analisador/
│   ├── index.html              # Interface do Analisador de Texto
│   └── src/
│       ├── types.ts            # ResultadoAnalise e PalavraFrequente
│       └── main.ts             # Map, ordenação e renderização
│
├── batalha/
│   ├── index.html              # Interface do Simulador de Batalha
│   └── src/
│       ├── types.ts            # LogBatalha, StatusCombate e TipoAtaque
│       ├── combatente.ts       # Classe base e encapsulamento
│       ├── personagens.ts      # Heroi/Monstro e herança
│       ├── motor-batalha.ts    # Turnos e orquestração do combate
│       └── main.ts             # Integração com DOM e logs
│
├── labirinto/
│   ├── index.html              # Interface do Gerador Procedural
│   └── src/
│       ├── types.ts            # MatrizLabirinto, Celula e Posicao
│       ├── gerador.ts          # Algoritmo de geração 2D
│       └── main.ts             # CSS Grid dinâmico e controles
│
└── clima/
    ├── index.html              # Interface do Simulador Meteorológico
    └── src/
        ├── types.ts            # RegistroClima e Estatisticas
        ├── processador.ts      # Cálculos estatísticos e dados simulados
        ├── grafico.ts          # Geração dinâmica de SVG Path
        └── main.ts             # Dashboard reativo e Resize Listener
```

> **Organização:** Cada atividade possui sua própria interface e diretório `src/`, mantendo os tipos, algoritmos e responsabilidades separados conforme a complexidade de cada projeto.

---

## 📈 Evolução do aprendizado

A sequência de atividades representa uma progressão de complexidade e de aplicação dos conceitos de programação:

1. **Dados estruturados:** organização, tipagem e validação de inventário.
2. **Processamento de dados:** análise textual, contagem e ordenação.
3. **Modelagem de sistemas:** entidades, estados e regras de combate.
4. **Geração algorítmica:** construção procedural de ambientes.
5. **Representação visual:** aplicação de matemática e estatística para construir gráficos.

Essa progressão fortalece fundamentos úteis para o desenvolvimento de aplicações web, sistemas mais complexos e, futuramente, projetos de desenvolvimento de jogos.

---

## 👨‍💻 Autor

Desenvolvido por **Davi Ferreira** como parte da jornada de aprendizado em desenvolvimento de software e aprofundamento em TypeScript.

<p>
  <a href="https://github.com/Dferreiraz">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://br.linkedin.com/in/davirobertoferreira">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>
