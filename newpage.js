function search(query) {
	url = 'http://www.google.com/search?q=' + query;
	window.location = url;
}

document.getElementById('query').addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		if (e.target.value !== '') {
			search(e.target.value);
		}
	}
});

document.getElementById('search').addEventListener('click', () => {
	if (document.getElementById('query').value !== '') {
		search(document.getElementById('query').value);
	}
});
