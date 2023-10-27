import { useState } from 'react'


import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Button } from './components/Button'
import { TaskCounter } from './components/TaskCounter'
import { Table } from './components/Table'
import { Modal } from './components/Modal'


import './css/reset.css'

function App() {
  const [showModal, setShowModal] = useState(false); 

  function createTask(description, date){
    alert('Ola');
  }

  function closeModal(){
    setShowModal(false);
  }

  return (
    <>
      <div className='container'>

        <Header />

                  <main className='content'>
                    <div className='main-header'>
                            <Button 
                              onClick={()=> setShowModal(true)}
                              className="btn-new-task"
                              title="+ Nova tarefa"
                            />

                            <TaskCounter 
                              tasks={10} 
                            />
                    </div>


                    <Table />

                  </main>

        <Footer />


      </div>

      {
        showModal &&(
          <Modal 
            closeModal={closeModal}
            createTask={createTask}
          />
        )
          
      }
    </>
  )
}

export default App
