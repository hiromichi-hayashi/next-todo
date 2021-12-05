import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "../../styles/sass/style.module.scss";

const Form = (props) => {
	const [text, setText] = useState("");

	const submitText = () => {
	if (text === "") {
	 		alert("Todoを入力してください");
			return;
		}

    props.addTodo(uuidv4(), text, false);
		setText("");
  }

	return (
		<form className={styles.form}>
			<input
				className={styles.form_txt}
				type="text"
				placeholder="TODO"
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<button className={styles.form_submit} type="button" onClick={submitText}>
				追加
			</button>
		</form>
	);
};

export default Form;
