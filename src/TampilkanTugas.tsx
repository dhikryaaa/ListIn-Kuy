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
                <li key={tugas.id} className="p-2 bg-gray-100 rounded-lg">
                    <h3 className="font-semibold text-center text-gray-800">{tugas.name}</h3>
                    <p className="text-gray-600">Description: {tugas.description}</p>
                    <span className="text-sm text-gray-500">Deadline: {tugas.deadline}</span>
                    
                    {/* Buttons */}
                    <div className="mt-2 flex justify-between">
                    <button onClick={() => onEditTask(tugas)} className="text-blue-500 hover:underline">
                        Edit
                    </button>
                        <button onClick={() => onDeleteTask(tugas.id)} className="text-green-500 hover:underline">
                            Mark as Done
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TampilkanTugas;