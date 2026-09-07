function importPhotoshootPortfolio(r) {
  return r.keys().map(key => {
    const filename = key.replace('./', '').replace(/\.[^/.]+$/, '');
    const label = filename.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
    return {
      src: r(key),
      label: label || 'Photo'
    };
  });
}

const portfolioPhotos = importPhotoshootPortfolio(
  require.context('../public/photoshoot-portfolio', false, /\.(png|jpe?g|avif)$/)
);

export default portfolioPhotos;
