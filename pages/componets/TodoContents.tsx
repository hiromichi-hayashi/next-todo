import { useState } from "react";
import Form from "./Form";
import styles from "../../styles/sass/style.module.scss";

const TextContents = () => {
	const [todos, setTodos] = useState([]);
	const [todoStatus, setTodoStatus] = useState("");
	
	const todoProcess = ["全て", "完了", "未完了"];

	//todosに値を格納
	const getTodo = (todo, status) => {
		setTodos([...todos, {id: todos.length+1, todo: todo, status: status }]);
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

	//完了・未完了を判定する
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
			<Form getTodo={getTodo}/>
			<div className={styles.main_contents}>
				<div className={styles.main_contents_tabs}>
					{todoProcess.map((status) => {
						return (
							<button className={`${styles.main_contents_tabs_tab} ${todoStatus === status && styles.is_active}`} 
								onClick={() => setTodoStatus(status)}>
									{status}
							</button>
						)
					})}
				</div>
				{filterTodos().map((value, index) => {
					return (
						<li className={styles.main_contents_list_item} key={index.toString()}>
							<p className=
								{`${styles.main_contents_list_item_ttl} ${value.status && styles.is_done_item_ttl}`}>
									{value.todo}
							</p>
							<button
								className={`${styles.main_contents_list_item_button} ${value.status && styles.is_done_item_button}`} 
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
