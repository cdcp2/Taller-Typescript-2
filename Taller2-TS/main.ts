import {Serie} from './Serie.js';
import { series } from './data.js';

let component: HTMLElement = document.getElementById('series')!;
let componentavg: HTMLElement = document.getElementById('promedio')!;
let image:HTMLElement = document.getElementById('imagen')!;
let title:HTMLElement = document.getElementById('titulo')!;
let description: HTMLElement = document.getElementById('descripcion')!;
let webPage: HTMLElement = document.getElementById('paginaWeb')!;

series.forEach(e => createRow(e));
componentavg.innerHTML = `Seasons average: ${avg()}`;
createBtn();

function createRow(serie: Serie):void{
    let row = document.createElement('tr');
    row.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde;">
        <a id = "${serie.id}">${serie.name}</a>
    </td>
    <td>
        ${serie.station}
    </td>
    <td>
        ${serie.seasons}
    </td>`);
    component.appendChild(row);
}

function alterCard(id: string){
    let idR: number = parseInt(id);
    let serie: Serie = series[idR - 1];
    image.setAttribute('src', serie.image);
    title.innerHTML = `${serie.name}`;
    description.innerHTML = `${serie.description}`;
    webPage.setAttribute('href', `${serie.webPage}`);
    webPage.innerHTML = 'Página Web';
    const card = document.querySelector('.card');
    if (card && card.classList.contains('card')) {
    (card as HTMLElement).style.display = 'block';
    }

}


function createBtn(){
    series.forEach(e=>{
        let btn = document.getElementById(`${e.id}`)!;
        btn.onclick = () => {alterCard(btn.id)};
    });
}

function avg(): string{
    let avg = 0;
    series.forEach(s => avg += s.seasons);
    avg /= series.length;
    return Math.round(avg).toString();
}