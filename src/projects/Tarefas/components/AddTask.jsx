import AddTaskStyles from '../modules/AddTask.module.css';

function AddTask({ addTask, handleNewTask }) {
  return (
    <div className={AddTaskStyles.container}>
      <h1>Cadastrar nova tarefa</h1>
      <input placeholder='titulo da tarefa' onChange={handleNewTask} />
      <div className={AddTaskStyles.btn} onClick={addTask}>
        <p>Salvar</p>
      </div>
    </div>
  );
}

export { AddTask };
