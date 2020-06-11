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
                    <li class="nav-item">
                        <a class="nav-link table-link" href="#">${element.name}</a>
                    </li>
                    `
                } else {
                    // root.innerHTML += `
                    // <ul id="table-${element.name}">${element.name}</ul>
                    // `
                }
            }
        });

        root.appendChild(ul);
    }

    static addChild(text, data) {
        const tableName = document.getElementById('table-items');
        tableName.innerHTML = '';
        
        if (text.toLowerCase() == 'artists') {
            // data = [ { ArtistId: 1, Name: 'AC/DC' }, { ArtistId: 2, Name: 'Accept' } ]
            
            tableName.innerHTML = `
            <tbody>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Artists</th>
                        </tr>
                    </thead>
                    <tbody class="table-child-link">
                    </tbody>
                </table>
            </tbody>
            `
            for(let item in data[0]) {
                tableName.childNodes[1].childNodes[1].childNodes[1].innerHTML += `
                            <th scope="col">${item}</th>
                `
            }
            data.forEach((element, index) => {
                tableName.childNodes[1].childNodes[1].nextElementSibling.innerHTML += `
                        <tr>
                            <th scope="row">${index}</th>
                            <td>${element.ArtistId}</td>
                            <td>${element.Name}</td>
                            <td><a href="#" class="btn btn-warning btn-sm info">info</a></td>
                        </tr>
            `
            // <li class="table-child-link"><span style="display: none">${element.ArtistId}</span>${element.Name}</li>
            })
        } else if (text.toLowerCase() == 'albums') {

            tableName.innerHTML = `
            <tbody>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Albums</th>
                        </tr>
                    </thead>
                    <tbody class="table-child-link">
                    </tbody>
                </table>
            </tbody>
            `
            for (let item in data[0]) {
                tableName.childNodes[1].childNodes[1].childNodes[1].innerHTML += `
                            <th scope="col">${item}</th>
                `
            }
            data.forEach((element, index) => {
                tableName.childNodes[1].childNodes[1].nextElementSibling.innerHTML += `
                        <tr>
                            <th scope="row">${index}</th>
                            <td>${element.ArtistId}</td>
                            <td>${element.Title}</td>
                        </tr>
            `
                // <li class="table-child-link"><span style="display: none">${element.ArtistId}</span>${element.Name}</li>
            })
        } else if (text.toLowerCase() == 'tracks') {

            tableName.innerHTML = `
            <tbody>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Tracks</th>
                        </tr>
                    </thead>
                    <tbody class="table-child-link">
                    </tbody>
                </table>
            </tbody>
            `
            for (let item in data[0]) {
                tableName.childNodes[1].childNodes[1].childNodes[1].innerHTML += `
                            <th scope="col">${item}</th>
                `
            }
            data.forEach((element, index) => {
                tableName.childNodes[1].childNodes[1].nextElementSibling.innerHTML += `
                        <tr>
                            <th scope="row">${index}</th>
                            <td>${element.AlbumId}</td>
                            <td>${element.Name}</td>
                            <td><a href="#" class="btn btn-warning btn-sm info">info</a></td>
                            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                        </tr>
            `
                // <li class="table-child-link"><span style="display: none">${element.ArtistId}</span>${element.Name}</li>
            })
        } else if (text.toLowerCase() == 'playlists') {

            tableName.innerHTML = `
            <tbody>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Playlists</th>
                        </tr>
                    </thead>
                    <tbody class="table-child-link">
                    </tbody>
                </table>
            </tbody>
            `
            for (let item in data[0]) {
                tableName.childNodes[1].childNodes[1].childNodes[1].innerHTML += `
                            <th scope="col">${item}</th>
                `
            };
            data.forEach((element, index) => {
                tableName.childNodes[1].childNodes[1].nextElementSibling.innerHTML += `
                        <tr>
                            <th scope="row">${index}</th>
                            <td>${element.PlaylistId}</td>
                            <td>${element.Name}</td>
                            <td><a href="#" class="btn btn-warning btn-sm info">info</a></td>
                            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                        </tr>
            `
                // <li class="table-child-link"><span style="display: none">${element.ArtistId}</span>${element.Name}</li>
            });
        }
    }
}
