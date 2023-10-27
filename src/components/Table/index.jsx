import { TableRow } from './TableRow'
import './table.css'


const tasks = [
    {
        id: 1,
        description: "Estudar Javascript",
        date: 25/10/2023
    },
    {
        id: 2,
        description: "Finalizar curso React",
        date: 25/10/2023
    }
]

export function Table() {
    return ( 
        <table>
               <thead>
                    <tr>
                        <th>Descrição da tarefa</th>
                        <th>Data da tarefa</th>
                        <th>Ações</th>
                    </tr>

               </thead>
               <tbody>
                    {
                        tasks.map(task => (
                            <TableRow 
                            key={task.id}
                            task={task}
                            />
                        ))
                    }
               </tbody>
        </table>
       
     );
}

