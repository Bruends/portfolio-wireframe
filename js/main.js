'use strict'

window.onload = () => {
  // polifyfill "window.scroll"
  polyfill();
  
  // cria portfolio
  const portfolioContainer = document.querySelector('#portfolio-container');
  portfolioContainer.innerHTML = createPortfolio(portfolioData);

  // listeners
  setMenuLinksListener();
  setToggleMenuListener();
  setFixHeaderOnScrollListener();
};
