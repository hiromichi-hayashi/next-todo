import { useState } from "react";
import styles from "../../styles/sass/style.module.scss";

const Form = (props) => {
	const [text, setText] = useState("");

	const submitText = () => {
	if (text === "") {
	 		alert("Todoを入力してください");
			return;
		}

    props.addTodo(text, false);
		setText("");
  }

	return (
		<>
			<form className={styles.main_form}>
				<input
					className={styles.main_form_txt}
					type="text"
					placeholder="TODO"
					onChange={e => setText(e.target.value)}
					value={text}
				/>
				<button className={styles.main_form_submit} type="button" onClick={submitText}>
					追加
				</button>
			</form>
		</>
	);
};

export default Form;
