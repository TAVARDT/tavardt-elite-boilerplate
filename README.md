# TAVARDT Elite Boilerplate

> A High-Performance Next.js Boilerplate achieving 100/100 PageSpeed scores, tailored for the Elite Digital Market.

![100/100 PageSpeed](https://img.shields.io/badge/PageSpeed-100%2F100-brightgreen?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ⚡ Por que este boilerplate?

Na **TAVARDT**, construímos marcas invisíveis e as transformamos em autoridades de mercado. Este boilerplate é a nossa base proprietária desenhada para entregar:
- **Performance Absoluta:** Otimização de Critical Rendering Path, fontes pré-carregadas e lazy loading rigoroso.
- **Estética "Elite Dark Glassmorphism":** Sistema de design pré-configurado no Tailwind CSS.
- **SEO Ready:** Metadados estruturados e JSON-LD embutido.

## 🚀 Como usar

```bash
# Clone o repositório
git clone https://github.com/TAVARDT/tavardt-elite-boilerplate.git

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

## 🛠️ Stack Tecnológica

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Vanilla CSS (para otimizações específicas)
- **Animações:** Framer Motion (configurado para carregar sem penalizar a hidratação)
- **Deploy:** Otimizado para Vercel ou VPS (Docker/Nginx)

## 🔒 Boas Práticas Implementadas
- Sem hidratação global desnecessária.
- Imagens servidas em WebP/AVIF.
- Uso de `next/font` para prevenir Cumulative Layout Shift (CLS).
