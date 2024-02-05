const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const textToSearch = document.getElementById('textToSearch');

searchButton.addEventListener('click', function() {
    const searchValue = searchInput.value;
    const searchRegExp = new RegExp(searchValue, 'gi');
    
    textToSearch.innerHTML = textToSearch.textContent.replace(searchRegExp, function(match) {
        return `<span class="highlight">${match}</span>`;
    });
});