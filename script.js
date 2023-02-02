const form = document.querySelector('#searchForm');
const body = document.querySelector('body');



form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const div = document.querySelectorAll('div');
    if (div.length != 0) {
        for (let i of div)
            i.style.display = 'none';
    }
    const data = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${data}`);
    let n = res.data.length;
    for (let i = n - 1; i >= 0; i--) {
        if (res.data[i].show.image == null)
            continue;
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        img.src = res.data[i].show.image.medium;
        img.alt = data;
        h1.innerHTML = res.data[i].show.name;
        div.appendChild(img);
        img.insertAdjacentElement('afterend', h1);
        form.insertAdjacentElement('afterend', div);
    }
})

// "https://www.tvmaze.com/shows/23728/big-apple"

// 'https://static.tvmaze.com/uploads/images/medium_portrait/360/901969.jpg', original: 'https://static.tvmaze.com/uploads/images/original_untouched/360/901969.jpg'}
// lang