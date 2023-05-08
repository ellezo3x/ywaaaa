function signInup(){
    document.getElementById('log-in').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
}
function back(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('log-in').style.display = 'none';
}
function signUp(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('log-in').style.display = 'none';
    document.getElementById('signup-main').style.display = 'flex';
}
function back2(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('signup-main').style.display = 'none';
}
function gologin(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('log-in').style.display = 'flex';
    document.getElementById('signup-main').style.display = 'none';
}