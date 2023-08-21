
document.addEventListener('DOMContentLoaded',function(){
    let text = document.getElementById('inputText');
    let btn = document.getElementById('buttonText');

    btn.addEventListener('click',()=>{

        localStorage.setItem('saved', JSON.stringify(text.value));
    })

})