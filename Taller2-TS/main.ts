import { Serie } from './Serie.js';
import { series } from './data.js';

const component = document.getElementById('series')!;
const componentavg = document.getElementById('promedio')!;
const image = document.getElementById('imagen')!;
const title = document.getElementById('titulo')!;
const description = document.getElementById('descripcion')!;
const webPage = document.getElementById('paginaWeb')!;

function createRow(serie: Serie): void {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td style="font-weight: bold;">${serie.id}</td>
        <td style="color:#547dde;"><a id="${serie.id}">${serie.name}</a></td>
        <td>${serie.station}</td>
        <td>${serie.seasons}</td>
    `;
    component.appendChild(row);
}

function alterCard(id: number): void {
    const serie = series[id - 1];
    image.setAttribute('src', serie.image);
    title.innerHTML = serie.name;
    description.innerHTML = serie.description;
    webPage.setAttribute('href', serie.webPage);
    webPage.innerHTML = 'Página Web';
    const card = document.querySelector('.card') as HTMLElement;
    if (card) card.style.display = 'block';
}

function createBtn(): void {
    series.forEach(serie => {
        const btn = document.getElementById(`${serie.id}`)!;
        btn.addEventListener('click', () => alterCard(serie.id));
    });
}

function avg(): string {
    const averageSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length;
    return Math.round(averageSeasons).toString();
}


series.forEach(serie => createRow(serie));
componentavg.innerHTML = `Seasons average: ${avg()}`;
createBtn();
