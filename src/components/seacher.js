const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const textToSearch = document.querySelectorAll('.textToSearch');

function searchAndHighlight() {
    const searchValue = searchInput.value;
    const searchRegExp = new RegExp(searchValue, 'gi');

    textToSearch.forEach(function(element) {
        element.innerHTML = element.textContent.replace(searchRegExp, function(match) {
            return `<span class="highlight">${match}</span>`;
        });
    });
}

searchButton.addEventListener('click', searchAndHighlight);

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchAndHighlight();
    }
});