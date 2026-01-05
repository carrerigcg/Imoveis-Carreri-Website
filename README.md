<h1 align="center">🏡 Carreri Imóveis</h1>

<p align="center">
  Website moderno e responsivo para a Carreri Imóveis
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

<p align="center">
  <a href="#">Ver Demo</a> •
  <a href="https://github.com/carrerigcg/Imoveis-Carreri-Website/issues">Reportar Bug</a> •
  <a href="https://github.com/carrerigcg/Imoveis-Carreri-Website/issues">Solicitar Feature</a>
</p>

<hr />

---

## 📋 Sobre o Projeto

Site institucional desenvolvido para a **Carreri Imóveis**, uma imobiliária focada em oferecer as melhores oportunidades do mercado imobiliário. O projeto foi construído utilizando tecnologias modernas para garantir performance, responsividade e uma excelente experiência do usuário.

### ✨ Principais Funcionalidades

- 🏠 **Catálogo de Imóveis**: Visualização completa de propriedades disponíveis
- 🔍 **Sistema de Busca**: Filtros avançados para encontrar o imóvel ideal
- 📱 **Design Responsivo**: Interface adaptada para todos os dispositivos
- ⚡ **Performance Otimizada**: Carregamento rápido e navegação fluida
- 🎨 **UI/UX Moderna**: Interface intuitiva e visualmente atraente
- 📞 **Formulário de Contato**: Canal direto de comunicação com a imobiliária

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool moderna e extremamente rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis e acessíveis

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[Bun](https://bun.sh/)** como gerenciador de pacotes
- **[Git](https://git-scm.com/)** para controle de versão

---

## 🔧 Instalação e Configuração

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/carrerigcg/Imoveis-Carreri-Website.git
```

### 2️⃣ Acesse o diretório do projeto

```bash
cd Imoveis-Carreri-Website
```

### 3️⃣ Instale as dependências

Usando npm:
```bash
npm install
```

Ou usando Bun (mais rápido):
```bash
bun install
```

### 4️⃣ Inicie o servidor de desenvolvimento

Com npm:
```bash
npm run dev
```

Com Bun:
```bash
bun run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o linter para verificar o código |

---

## 🏗️ Estrutura do Projeto

```
Imoveis-Carreri-Website/
├── public/              # Arquivos estáticos públicos
├── src/                 # Código fonte da aplicação
│   ├── components/      # Componentes React reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── lib/            # Utilitários e helpers
│   ├── hooks/          # Custom React hooks
│   └── assets/         # Imagens, fontes e outros assets
├── index.html          # Arquivo HTML principal
├── package.json        # Dependências e scripts
├── tailwind.config.ts  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
└── vite.config.ts      # Configuração do Vite
```

---

## 🎨 Componentes UI

O projeto utiliza a biblioteca **shadcn/ui** que fornece componentes acessíveis e customizáveis. Para adicionar novos componentes:

```bash
npx shadcn-ui@latest add [nome-do-componente]
```

Exemplo:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

---

## 🚀 Deploy

### Deploy Manual

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Faça deploy da pasta 'dist' no Netlify
```

#### GitHub Pages
```bash
npm run build
# Configure o GitHub Pages para servir da pasta 'dist'
```

---

## 🌐 Domínio Customizado

Para conectar um domínio personalizado:

1. Acesse **Project > Settings > Domains**
2. Clique em **Connect Domain**
3. Siga as instruções para configuração DNS

📚 Documentação completa: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### 📋 Padrões de Código

- Use TypeScript para todos os novos arquivos
- Siga as convenções do ESLint configuradas no projeto
- Escreva commits descritivos seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/)
- Teste suas alterações antes de submeter

---

## 🐛 Reportar Problemas

Encontrou um bug? Tem uma sugestão? Abra uma [issue](https://github.com/carrerigcg/Imoveis-Carreri-Website/issues) detalhando:

- Descrição do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Ambiente (navegador, SO, etc.)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

- **[@carrerigcg](https://github.com/carrerigcg)** - Desenvolvimento

---

## 📞 Contato

**Carreri Imóveis**
- 🌐 Website: [Em breve]
- 📧 Email: contato@carreriimoveis.com.br
- 📱 Instagram: [@carreri_corretor_de_imoveis]

---

## 🙏 Agradecimentos

- [Lovable](https://lovable.dev/) pela plataforma de desenvolvimento
- [shadcn/ui](https://ui.shadcn.com/) pelos componentes UI
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- Comunidade React e TypeScript

---

<div align="center">

**Desenvolvido com ❤️ para transformar o mercado imobiliário**

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!

</div>
```