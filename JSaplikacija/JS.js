// Povlačenje podataka iz localstorge
window.onload = function(){
    let ulTag = document.getElementById('listaZadataka');
    let storageList = localStorage.getItem('zadaci');
        if(storageList !== null){
        ulTag.innerHTML = storageList;
        } 
// Dodavanje zadataka u listu pomoću button definisano klasičnom funkcijom
document.getElementById('button').addEventListener('click', function(){
        return unesiZadatke();
    });
// Dodavanje zadataka u listu pomoću button definisano arrow funkcijom
    document.getElementById('noviZadatak').addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        return unesiZadatke();
    }
    });	
}
// Kreiranje elemenata i pripadajućih funkcionalnosti
function unesiZadatke(){
    let zadaci = document.createElement('li');
    let task = document.getElementById('noviZadatak').value;
    let unos = document.createTextNode(task);
    let a = document.createElement('a');
    a.appendChild(unos);
    zadaci.appendChild(a);
    document.getElementById('noviZadatak').value = "";
// Kreiranje elementa za pojedinačno brisanje unetih zadataka 
    let span = document.createElement('span');
    let x = document.createTextNode('\u00D7');
    span.className = 'obrisati';
    span.appendChild(x);
    a.appendChild(span);
// Kreiranje fokusa na polje za unos novih zadataka nakon event-a kojima se dodaju zadaci
    let fokus = document.getElementById('noviZadatak').focus();
// Dodavanje sadržaja u localstorage
    let ulTag = document.getElementById('listaZadataka');
    ulTag.appendChild(zadaci);
    let ulTagSadrzaj = ulTag.innerHTML;
    localStorage.setItem('zadaci', ulTagSadrzaj);  
// Kreiranje funkcionalnosti za pojedinačno brisanje zadataka
    let obrisi = document.getElementsByClassName('obrisati');
        for (i = 0; i < obrisi.length; i++) {
            obrisi[i].onclick = function() {
                let potvrda = confirm('Da li želite da izbrišete zadatak?');
                if (potvrda ===  true){
                let brisanje = this.parentElement.parentElement;
                brisanje.style.display = 'none'; 
                }
                let ulTag = document.getElementById('listaZadataka');
                ulTag.appendChild(zadaci);
                let ulTagSadrzaj = ulTag.innerHTML;
                localStorage.setItem('zadaci', ulTagSadrzaj); 
            } 
        }     
}
// Kreiranje funkcionalnosti za brisanje svih zadataka u isto vreme
document.getElementById('button1').addEventListener('click', function(){
    let potvrda = confirm('Da li želite da izbrišete zadatke?');
    if (potvrda === true) {
        document.getElementById('listaZadataka').remove('li');
    } 
    localStorage.clear();
});
// Kreiranje funkcionalnosti za filter polje
document.getElementById('filter').addEventListener('keyup', function(){
    let unos, caseInsensitive, ul, li, a, i;
    unos = document.getElementById('filter');
    caseInsensitive = unos.value.toUpperCase();
    ul = document.getElementById('listaZadataka');
    li = ul.getElementsByTagName('li');
        for (i = 0; i < li.length; i++) {
             a = li[i].getElementsByTagName('a')[0];
            if (a.innerHTML.toUpperCase().indexOf(caseInsensitive) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = 'none';
            }
        }    
});









