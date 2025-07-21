# 🐾 PetCure - Clínica Veterinária

**PetCure** é um site institucional fictício desenvolvido por uma equipe da Empresa Júnior **Visão Jr - UFOP** com o objetivo de promover uma clínica veterinária acolhedora, moderna e conectada com o bem-estar animal.

O projeto apresenta seções informativas sobre a clínica, equipe, serviços, estrutura e depoimentos, tudo com um visual amigável e responsivo.

## 🌐 Demonstração

> Acesse: [PetCure - Clínica Veterinária](https://seusiteaqui.com) *(coloque aqui o link se estiver publicado)*

---

## 🧱 Estrutura do Projeto

```
/
├── index.html
├── assests/
│   ├── images/             # Imagens do site (logotipo, equipe, estrutura etc.)
│   ├── styles/
│   │   ├── global.css      # Estilos gerais
│   │   ├── inicio.css
│   │   ├── sobre.css
│   │   ├── equipe.css
│   │   ├── servicos.css
│   │   ├── depoimentos.css
│   │   └── galeria.css
│   └── scripts/
│       └── index.js        # Script JS principal (indicador de rolagem e interações)
```

---

## 🚀 Funcionalidades

- Seção inicial com **banner animado** e botão de contato via WhatsApp.
- Seção "Sobre Nós" com **Missão, Visão e Valores**.
- Seção da **equipe médica veterinária** com imagens e especialidades.
- Lista de **serviços oferecidos** (bem-estar, cirurgias e adicionais).
- **Depoimentos reais** de clientes fictícios.
- **Galeria de imagens** com estrutura da clínica.
- Rodapé com **endereços, links sociais e mapa de localização**.
- Barra de **rolagem animada** com o ID `#scrollIndicator`.

---

## 📷 Preview

*(adicione aqui prints do site após pronto)*

---

## ⚙️ Como executar o projeto

### Pré-requisitos

- Um navegador moderno (Chrome, Edge, Firefox, etc).
- Um servidor local simples (opcional, para evitar problemas de caminho).

### Abrir no navegador:

1. Clone este repositório:

```bash
git clone https://github.com/seuusuario/petcure.git
```

2. Navegue até a pasta:

```bash
cd petcure
```

3. Clique duas vezes no `index.html` ou utilize uma extensão como **Live Server** no VS Code.

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **Font Awesome** (ícones)
- **Google Fonts** (tipografia moderna)
- **JavaScript** (indicador de rolagem, menu responsivo)

---

## 🔍 Destaques de Código

- Indicador de rolagem no topo da página:
```css
#scrollIndicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: #23796d;
  width: 0%;
  z-index: 9999;
}
```

- Menu com botão hambúrguer para responsividade:
```html
<button class="menu-toggle" aria-label="Abrir menu">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</button>
```

- Contato direto via WhatsApp:
```html
<a href="https://wa.me/5531999081568" target="_blank" class="btn-contato">
  <i class="icon-wpp fa-brands fa-whatsapp"></i> CONTATO
</a>
```

---

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido pelos membros da empresa júnior **Visão Jr - UFOP**:

- Rafael (Cardiologista)
- Ronald (Ortopedia)
- Ryan (Exóticos)
- Lucas (Dermatologia)
- Vitor (Anestesia)
- Julia (Especialista Felina)

> Obs: Equipe fictícia criada para fins de simulação e estudo.

---

## 📄 Licença

Este projeto é de uso acadêmico/educacional e não possui fins lucrativos ou comerciais. Os direitos de imagem devem ser respeitados.

---

## 📌 Notas

- O projeto ainda pode ser expandido com funcionalidades reais como formulários de agendamento, blog de dicas para pets ou integração com sistemas backend.
- As imagens utilizadas estão na pasta `assests/images`, e não foram incluídas neste repositório público para manter o tamanho otimizado.

---
