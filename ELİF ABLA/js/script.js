async function fetchJSON(file) {
    const response = await fetch(file);
    return await response.json();
}

async function loadProducts() {
    const products = await fetchJSON('data/products.json');
    const slider = document.getElementById('product-slider');
    slider.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;
        slider.appendChild(productCard);
    });
}

async function loadComments() {
    const comments = await fetchJSON('data/comments.json');
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `<p><strong>${comment.name}</strong>: ${comment.comment} (${comment.date})</p>`;
        commentsContainer.appendChild(commentDiv);
    });
}

document.getElementById('comment-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value;
    const comment = document.getElementById('comment-text').value;
    const newComment = { name, comment, date: new Date().toISOString().split('T')[0] };
    const commentsContainer = document.getElementById('comments-container');
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `<p><strong>${newComment.name}</strong>: ${newComment.comment} (${newComment.date})</p>`;
    commentsContainer.prepend(commentDiv);
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadComments();
});
