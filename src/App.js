import React from 'react';


import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';

import myImage from './imagenes/loto.jpg';
import myImage1 from './imagenes/flower1.jpeg';
import bot from './imagenes/Chatbot2.png';
import iconbot from './imagenes/Chatbot.png';
import * as components from './components';
import "./styles.css";





function App() {
  const [signIn, toggle]= React.useState(true);
  return (
   <components.Container>

      <components.SignUpContainer signinIn={signIn}>
        <components.Form>
         
          <components.Title>Iniciar Sesión</components.Title>
          <components.Input type='text' placeholder='Usuario'/>
          <components.Input type='password' placeholder='Contraseña'/>
          <components.Anchor onClick={()=> toggle(true)} href='#' >¿Olvidaste tu contraseña?</components.Anchor>
          <components.Button >Iniciar Sesión</components.Button>
          <components.Parrafo>¿Eres Nuevo?</components.Parrafo>
          <components.Button >Crear cuenta</components.Button>
     
          
        </components.Form>
      </components.SignUpContainer>


      <components.SignInContainer signinIn={signIn}>
        
        <components.Form>
        <components.Title>Recuperar Contraseña</components.Title>
        <components.Parrafo>Ingresa el correo asociado a tu cuenta</components.Parrafo>
          <components.Input type='email' placeholder='Email'/>
          <components.Button>Enviar</components.Button>
          <components.Anchor onClick={()=> toggle(false)} href='#' >Iniciar Sesión</components.Anchor>
        </components.Form>
      </components.SignInContainer>


      <components.OverlayContainer signinIn={signIn}>

        <components.Overlay signinIn={signIn}>

          <components.leftOverLayPanel signinIn={signIn}>
          
          <components.Title>Bienvenido de nuevo!</components.Title>
          <components.Title2>Jardín del Edén</components.Title2>
         
          </components.leftOverLayPanel>


          <components.RightOverLayPanel signinIn={signIn}>
  
          <components.GhostButton onClick={()=> toggle(false)}>Iniciar Sesión</components.GhostButton>
          </components.RightOverLayPanel>

          <img src={myImage} className="my-image" alt="Mi imagen" />
          <img src={myImage1} className="my-image" alt="Mi imagen" />
        </components.Overlay>
       
      </components.OverlayContainer>
      
   </components.Container> 
      
  );
}

function chatbot() {
   const steps=[{
    id:'saludo',
    message:'Hola, bienvenido a Soporte al cliente, ¿En que te puedo ayudar?',  
    trigger:'opciones' 
  },
  {
    id:'opciones',
    options:[{value: "Flores Populares",label: "1. Flores Populares",trigger:"Populares"},
             {value: "Cuidado de Flores",label: "2. Cuidado de Flores",trigger:"Cuidado"},
             {value: "Flores que Ofrecemos",label: "3. Flores que Ofrecemos",trigger:"Ofrecemos"},
             {value: "Duración de las flores",label: "4. Duración de las flores",trigger:"Duracion"},
             {value: "Reembolsos/Devoluciones",label: "5. Reembolsos/Devoluciones",trigger:"RD"},
             {value: "Envíos y costos",label: "6. Envíos y costos",trigger:"EC"},
             {value: "Seguimiento de pedido",label: "7. Seguimiento de pedido",trigger:"Seguimiento"},
             {value: "Métodos de pago",label: "8. Métodos de pago",trigger:"Metodosp"},
             {value: "Garantías",label: "9. Garantías",trigger:"garantias"},
    ],
  },
  {
    id:'Populares',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'Cuidado',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'Ofrecemos',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'Duracion',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'RD',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'EC',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'Seguimiento',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'Metodosp',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  },
  {
    id:'garantias',
    message:'Las flores más populares son:',  
    trigger:'opciones'
  }

];
return (
  <>
    <Segment floated='left'>
  
      <ChatBot 
        headerTitle= "Servicio al Cliente"
        
        botAvatar={bot}
        steps={steps}
        bubbleStyle={{ backgroundColor: '#f5f8fb', color: '#000' }}
        opened={false}
        floatingIcon={<img src={iconbot} height={'50px'} alt="Mi Icono" />}
        floatingStyle={{ backgroundColor:'#d72d3b', color: '#000' }}
        floating={true}
        
      />
     
    
    </Segment>
  </>
);
}
export { App, chatbot };


