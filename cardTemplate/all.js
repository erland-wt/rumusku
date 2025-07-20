// Fisika, Matematika Search Bar
const search = document.getElementById("search");
const items = document.querySelectorAll('.materi');

if(search) {
    search.addEventListener('input', (e) => filterData(e.target.value));

    function filterData(searchText) {
        items.forEach((item) => {
            const title = item.querySelector('.header > h2').innerText;
            if (title.toLowerCase().includes(searchText.toLowerCase())) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    }
}

// Matematika Search Bar
const searchMatematika = document.getElementById("searchMatematika");
const itemsMatematika = document.querySelectorAll('.materi-cards-matematika .isi-wrapper');

if(searchMatematika) {
    searchMatematika.addEventListener('input', (e) => filterDataMatematika(e.target.value));

    function filterDataMatematika(searchTextMatematika) {
        itemsMatematika.forEach((itemMatematika) => {
            const search = itemMatematika.querySelector('.penjelasan > h2').innerText;
            if (search.toLowerCase().includes(searchTextMatematika.toLowerCase())) {
                itemMatematika.classList.remove('hide');
            } else {
                itemMatematika.classList.add('hide');
            }
        });
    }
}
