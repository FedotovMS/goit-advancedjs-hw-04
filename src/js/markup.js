export default function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
      <div class="photo-card">
      <a href="${largeImageURL}" class="image-link">
       <img src="${webformatURL}" alt="${tags}" loading="lazy" class="image"/>
      </a
      <div class="info">
          <p class="info-item">
              <b>Likes: ${likes}</b>
          </p>
              <p class="info-item">
          <b>Views: ${views}</b>
          </p>
          <p class="info-item">
              <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
              <b>Downloads: ${downloads}</b>
          </p>
      </div>
  </div>`
    )
    .join('');
}
