import TampilkanTugas, { ListTugasDeclaration } from './TampilkanTugas';
import { useState } from 'react';
import './App.css';

function App() {
    const task: ListTugasDeclaration[] = [];

    const [listTugas, setListTugas] = useState<ListTugasDeclaration[]>(task);
    const [editTask, setEditTask] = useState<ListTugasDeclaration | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const filteredTasks = listTugas.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteTask = (id: number) => {
        setListTugas(listTugas.filter(task => task.id !== id));
    };

    const handleEditTask = (task: ListTugasDeclaration) => {
        setEditTask(task);
        setName(task.name);
        setDescription(task.description);
        setDeadline(task.deadline);
    };

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !description || !deadline) return;

        if (editTask) {
            setListTugas(listTugas.map(task =>
                task.id === editTask.id
                    ? { ...task, name, description, deadline }
                    : task
            ));
            setEditTask(null);
        } else {
            const newTask: ListTugasDeclaration = {
                id: listTugas.length + 1,
                name,
                description,
                deadline
            };
            setListTugas([...listTugas, newTask]);
        }

        setName('');
        setDescription('');
        setDeadline('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-indigo-100">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-5xl p-8">
                <h1 className="text-3xl font-bold mb-1 text-black text-center flex justify-center items-center">
                    <img
                        src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Ada+Tugas+Baru?;ListIn+Kuy!;"
                        alt="Typing Animation"
                    />
                </h1>
                <p className="mb-6 font-medium font-montserrat text-slate-500 text-center">
                    Aplikasi Todo List sederhana menggunakan React
                </p>

                {/* Form Input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-5 bg-gray-50 rounded-xl h-[430px]">
                        <h2 className="text-xl font-montserrat font-semibold mb-3 text-black text-center">
                            Masukkan Tugas
                        </h2>
                        <form onSubmit={handleAddTask}>
                            <div className="mb-3">
                                <label className="block mb-2 text-slate-700 text-sm font-bold">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Masukkan nama tugas"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block mb-2 text-slate-700 text-sm font-bold">Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Masukkan deskripsi tugas"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-slate-700 text-sm font-bold">Deadline</label>
                                <input
                                    type="date"
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#512da8] hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                {editTask ? "Update" : "Submit"}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setEditTask(null);
                                    setName('');
                                    setDescription('');
                                    setDeadline('');
                                }}
                                className={`w-full mt-2 text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${editTask ? "block" : "hidden"}`}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>

                    {/* Search and List Task */}
                    <div className="p-5 bg-gray-50 rounded-xl h-[430px]">
                        <h2 className="text-xl font-semibold mb-3 text-black text-center">
                            Daftar Tugas
                        </h2>

                        {/* Input Search */}
                        <div className="flex gap-2 mb-4">
                            <input
                                type="text"
                                placeholder="Cari nama tugas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 flex-1"
                            />
                        </div>

                        {/* List Tugas dengan Scroll */}
                        <div className="overflow-y-scroll max-h-72 scrollbar-thin scrollbar-thumb-gray-400">
                            <TampilkanTugas listTugas={filteredTasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
