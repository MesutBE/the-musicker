// UI Class: Handle UI Tasks
class UI {

    // Add Data
    static addDataToList(data) {

        const root = document.getElementById('root')
        const ul = document.createElement('ul');

        data.forEach(element => {
            root.innerHTML += `
            <ul id="table-${element.name}"><a href="#" class="link">${element.name}</ul>
            `
        });

        root.appendChild(ul);
    }

    static addChild(text, data) {
        const tableName = document.getElementById(`table-${text}`)
        
        data.forEach(element => {
            tableName.innerHTML += `
            <li>${element.Name}</li>
            `
        })
    }
}
