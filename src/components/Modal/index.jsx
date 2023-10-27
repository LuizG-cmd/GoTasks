
import { Button } from '../Button';
import { FormGroup } from './FormGroup';
import './modal.css'

export function Modal({closeModal, createTask}) {
    return (
        <div className='modal-background'>
            <article className='modal-container'>
                <h2 className='title-modal'>Criar uma nova tarefa</h2>
                    <form action="">

                        <FormGroup 
                            type="text"
                            id="description"
                            placeholder="Descrição"
                            value=""
                            onChange={()=>{}}
                            label="Descrição da tarefa"
                        />

                        <FormGroup 
                            type="date"
                            id="date"
                            placeholder=""
                            value=""
                            onChange={()=>{}}
                            label="Data"
                        />

                        <div className='buttons-modal'>
                                <Button 
                                onClick={()=>closeModal()}
                                className='btn-cancel'
                                title='Cancelar'
                                />
                                 <Button 
                                onClick={() => createTask()}
                                className='btn-save'
                                title='Salvar'
                                />
                        </div>


                    </form>
            </article>
        </div>
      );
}
