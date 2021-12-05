import { useState } from "react";
import Form from "./Form";
import styles from "../../styles/sass/style.module.scss";

const TextContents = () => {
	const [todos, setTodos] = useState([]);
	const [todoStatus, setTodoStatus] = useState("全て");
	
	const todoProcess = ["全て", "完了", "未完了"];

	//Formコンポーネントから渡された値を格納していく
	const getTodo = (todo, status) => {
		setTodos([...todos, {id: todos.length+1, todo, status }]);
	};

	//完了・未完了の場合のTodoをソートする
	const filterTodos = () => {
		if (todoStatus === "完了") {
			const completeTodos = todos.filter(value => value.status === true);

			return completeTodos;
		}else if (todoStatus === "未完了") {
			const incompleteTodos = (todos.filter(value => value.status === false));

			return incompleteTodos;
		}

		return todos;
	};

	//Todoが完了・未完了かを切り替える
	const isTodoChangeStatus = (id) => {
		const changeStatus = todos.map( index => {
			if (index.id === id) {
				index.status = !index.status ;
			}
			return index;
		})

		setTodos(changeStatus)
	};

	return (
		<main>
			<Form addTodo={getTodo}/>
			<div className={styles.contents}>
				<div className={styles.contents_tabs}>
					{todoProcess.map((status, index) => {
						return (
							<button 
								className={`${styles.contents_tabs_tab} ${todoStatus === status && styles.is_active}`}
								key={index}
								onClick={() => setTodoStatus(status)}>
									{status}
							</button>
						)
					})}
				</div>
				{filterTodos().map((value, index) => {
					return (
						<li className={styles.list_item} key={index}>
							<p
								className={`${styles.list_item_ttl} ${value.status && styles.is_done_item_ttl}`}>
									{value.todo}
							</p>
							<button
								className={`${styles.list_item_button} ${value.status && styles.is_done_item_button}`} 
									onClick={() => isTodoChangeStatus(value.id)}>
								完了
							</button>
						</li>
						)
				})}
			</div>
		</main>
	);
};

export default TextContents;
