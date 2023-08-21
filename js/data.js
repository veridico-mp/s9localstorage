document.addEventListener('DOMContentLoaded', function(){

    let load = localStorage.getItem('saved')

    document.getElementById('data').innerHTML= load;


})