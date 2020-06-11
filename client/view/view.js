// UI Class: Handle UI Tasks
class UI {

    // Add Data
    static addDataToList(data) {

        const root = document.getElementById('root')
        const ul = document.createElement('ul');

        data.forEach(element => {
            if (!element.name.includes('sqlite_')) {
                if (element.name === 'artists' ||
                    element.name === 'albums' ||
                    element.name === 'tracks' ||
                    element.name === 'playlists') {
                root.innerHTML += `
                    <ul id="table-${element.name}"><a href="#" class="table-link">${element.name}</ul>
                    `
                } else {
                    root.innerHTML += `
                    <ul id="table-${element.name}">${element.name}</ul>
                    `
                }
            }
        });

        root.appendChild(ul);
    }

    static addChild(text, data) {
        const tableName = document.getElementById(`table-${text}`)
        if (text == 'artists') {
            data.forEach(element => {
                tableName.innerHTML += `
            <li class="table-child-link"><span style="display: none">${element.ArtistId}</span>${element.Name}</li>
            `
            })
        } else if (text == 'albums') {
            data.forEach(element => {
                tableName.innerHTML += `
            <li class="table-child-linkx"><span style="display: none">${element.AlbumId}</span>${element.Title}</li>
            `
            })
        } else if (text == 'tracks') {
            data.forEach(element => {
                tableName.innerHTML += `
            <li class="table-child-link"><span style="display: none">${element.AlbumId}</span>${element.Name}</li>
            `
            })
        } else if (text == 'playlists') {
            data.forEach(element => {
                tableName.innerHTML += `
            <li class="table-child-link"><span style="display: none">${element.PlaylistId}</span>${element.Name}</li>
            `
            })
        }
    }
}
