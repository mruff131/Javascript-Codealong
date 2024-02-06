// Get our ranger data
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log('Test')
    console.log(response.data)
    return response.data
};

// create constants to hold DOM elements
const DOM_Elements = {
    ranger_list : '.ranger-list'
};

// create the ranger list HTML
const create_list = (id, name) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`; // this will get saved to ranger-list
    // document = our html, queryselector queries our html for rangerlist then swaps it out with a-tag
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML("beforeend", html)
};


// functions to load data and display html
const load_data = async () => {
    const rangers = await getData();
    console.log('Test2')
    console.log(rangers)
    rangers.forEach( element => create_list(element.id, element.name))
};

const clear_data = async () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
};