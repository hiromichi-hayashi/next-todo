import { useState } from "react";

import styles from "../../styles/sass/style.module.scss";

const Form = (props) => {
	const [todo, setTodo] = useState("");

	const submitTodo = () => {
	if (todo === "") {
	 		alert("Todoを入力してください")
			return
		}
    props.getTodo(todo, false);
		setTodo("");
  }

	return (
		<>
			<form className={styles.main_form}>
				<input
					className={styles.main_form_txt}
					type="text"
					placeholder="TODO"
					onChange={e => setTodo(e.target.value)}
					value={todo}
				/>
				<button className={styles.main_form_submit} type="button" onClick={submitTodo}>
					追加
				</button>
			</form>
		</>
	);
};

export default Form;
