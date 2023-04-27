# Projeto Aplicativo de Receitas
Este projeto foi realizado durante a minha jornada de aprendizado de **React Native**. Trata-se de um app voltado ao público interessado pelo universo da culinária. São receitas para quem quer aprender a cozinhar ou quem já cozinha, mas esqueceu aquele pequeno detalhe na hora de preparar seu prato.
> Leve suas habilidades culinárias ao próximo nível. Cozinhe, explore e surpreenda com seus pratos.

## 🚀 Funcionalidades:
- Explore receitas e aprenda a cozinhar o prato que sempre quis.
- Tenha acesso a vídeos no YouTube ensinando cada receita.
- Favorite seus pratos prediletos para acessar depois.


## 👷 Instalação:

**Você precisa ter o [VSCode](https://code.visualstudio.com/download) instalado em seu computador!** Depois, no terminal do VSCode (acesse com <em>**ctrl** + **"**</em>), clone o projeto via HTTPS usando o seguinte comando:
<code>https://github.com/Pauloviictorss/appReceitasMobile.git</code>
- **Instalando as dependências:**
	- Na pasta raiz do projeto, execute: <code>npm i</code>
- **Rodando o banco de dados do App:**
	- Ainda no terminal do VSCode, após clonar o repositório e instalar as dependências, digite `ipconfig`e copie o seu endereço IPv4;
	- Vá até a pasta <em>src > services</em> e abra o arquivo <em>api.js</em>
	- Na linha 8, na frente de <em>baseURL</em>, cole seu endereço IPv4 copiado anteriormente entre aspas;
	- Lembre-se de salvar o arquivo.

## 🏃 Iniciando o App:
- No terminal do VSCode, ainda dentro da pasta raiz do projeto, execute o comando `npx expo start`
- Abra outro terminal clicando no ícone de '+', localizado no canto superior direito do terminal e execute o comando `json-server --watch -d 180 --host SEU-IP db.json`
- Substitua `SEU-IP` pelo seu endereço IPv4;
- **Emulando no seu dispositivo móvel:**
	- Faça donload do aplicativo Expo Go ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US))/([IoS](https://apps.apple.com/br/app/expo-go/id982107779));
	- No aplicativo, escolha a opção de escanear QR Code e aponte sua câmera para o QR Code gerado no terminal.


## 📮 FAQ:

**Quais foram as tecnologias utilizadas nesse projeto?**
- React Native;
- JavaScript.

**O App está 100% concluído?**
- Não. No futuro, pretendo lançar novas features e funcionalidades ao aplicativo, bem como atualizar sua interface visual e integrá-lo a um novo banco de dados.

**Como posso reportar algum bug ou contribuir com o projeto?**
- Sinta-se à vontade para sugerir melhorias ou problemas no aplicativo! Para isso, basta abrir uma issue no [repositório do app](https://github.com/Pauloviictorss/appReceitasMobile/issues) informando da forma mais detalhada possível o seu problema ou sugestão.

### ⚡️Stay growing!⚡️
