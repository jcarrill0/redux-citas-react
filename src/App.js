import React from 'react';

// Componentes
import AgregarCita from './components/AgregarCita';
import ListadoCita from './components/ListadoCitas';

// Redux 
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
          <header>
            <h1 className="text-center">Administrador de Pacientes de Veterinaria</h1>
          </header>

          <div className="row mt-3">
            <div className="col-md-6">
                <AgregarCita />
            </div>
            <div className="col-md-6">
                <ListadoCita />
            </div>
          </div>
    </div>
    </Provider>
  );
}

export default App;
