const login = document.getElementById('Login');
const Register = document.getElementById('Register');
const RegisterDiv = document.getElementById('RegisterDiv');
const LoginDiv = document.getElementById('loginDiv');

Register.addEventListener('click' , () =>{
    RegisterDiv.style.display = 'block';
    LoginDiv.style.display = 'none';
})
login.addEventListener('click' , () =>{
    LoginDiv.style.display = 'block';
    RegisterDiv.style.display = 'none';
})
