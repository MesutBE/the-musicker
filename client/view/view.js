// UI Class: Handle UI Tasks
class UI {

    // Add Data
    static addDataToList(data) {

        const root = document.getElementById('root')
        const ul = document.createElement('ul');

        data.forEach(element => {
            ul.innerHTML += `
            <li><a href="#" class="link">${element.name}</li>
            `
        });

        root.appendChild(ul);
    }
}
