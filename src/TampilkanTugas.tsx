export interface ListTugasDeclaration {
    id: number;
    name: string;
    description: string;
    deadline: string;
}

interface ListTugasProps {
    listTugas: ListTugasDeclaration[];
    onDeleteTask: (id: number) => void;
    onEditTask: (task: ListTugasDeclaration) => void;
}

function TampilkanTugas({ listTugas, onDeleteTask, onEditTask }: ListTugasProps) {
    return (
        <ul className="space-y-2">
            {listTugas.map((tugas) => (
                <li key={tugas.id} className="p-3 bg-gray-100 rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-center text-gray-800 truncate">{tugas.name}</h3>
                    <p className="text-gray-600 text-sm truncate">Description: {tugas.description}</p>
                    <span className="text-xs text-gray-500">Deadline: {tugas.deadline}</span>                                
                    <div className="mt-2 flex justify-between">
                        <button 
                            onClick={() => onEditTask(tugas)} 
                            className="text-blue-500 hover:underline text-sm"
                        >
                            Edit
                        </button>
                        <button 
                            onClick={() => onDeleteTask(tugas.id)} 
                            className="text-green-500 hover:underline text-sm"
                        >
                            Mark as Done
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TampilkanTugas;
