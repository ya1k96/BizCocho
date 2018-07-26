var conten = {
  username: {
      presence: true,
        exclusion: {      
          message: "'%{value}' is not allowed"
    }
  },
  password: {
    presence: true,
      length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
  };

  


//Instancia vue
var vue = new Vue({
  el:'section',
  data:{
    usuarios:"",
    isUser:false,
    mensaje: "",
    usuario: "",
    contraseña:"",
  },
  methods:{
    verificar: function(e){
        validate(this.usuario,conten);
    }
  }
});


var config = {
    apiKey: "AIzaSyCUstf7v0aKDr19cMDYTUpMMG5M3WrB5hQ",
    authDomain: "tienda-6923a.firebaseapp.com",
    databaseURL: "https://tienda-6923a.firebaseio.com",
    projectId: "tienda-6923a",
    storageBucket: "tienda-6923a.appspot.com",
    messagingSenderId: "90139174668"
  };
  firebase.initializeApp(config);

  var dbref = firebase.database().ref().child("yamil");  

firebase.initializeApp({
  apiKey: "AIzaSyCUstf7v0aKDr19cMDYTUpMMG5M3WrB5hQ",
  authDomain: "tienda-6923a.firebaseapp.com",
  projectId: "tienda-6923a"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore(); //conexion con la base de datos

var usuarios = db.collection('users'); //Documento users
  
//cuando cambia un valor dentro de la base de datos
  dbref.on('value', function(snap){
      
      });