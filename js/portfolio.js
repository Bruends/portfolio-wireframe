'use strict'

// altere os dados do portfolio no arquivo 'portfolioData.js'

// verifica se o link não está vazio
// e cria o html com o link para o item do portfolio
const hasLink = (link, title) => {
  if (link) {
    const icon = (title === 'github') ? 'fa fa-github' : 'fa fa-external-link-square';

    return (`
      <a href="${link}" class="button button--small" title="${title}" target="_blank">
        <i class="${icon}" ></i>
      </a>
    `);
  } else {
    return '';
  }
};

// retorna html com os itens do portfolio
const createPortfolio = (portfolioData) => {
  let portfolioHtml = '';

  portfolioData.forEach(item => {
    const {img, title, description, github, link} = item;
    const githubHtml = hasLink(github, 'github');
    const linkHtml = hasLink(link, 'link');

    portfolioHtml += `
      <div class="card">
        <img src="${img}" class="card__img" >          
        <article class="card__info">
          <h3 class="card__info__title">${title}</h3>
          <p class="card__info__desc">${description}</p>
          <div class="card__info__links">
            ${githubHtml}           
            ${linkHtml}           
          </div>         
        </article>
      </div>    
    `;
  });

  return portfolioHtml;
};
