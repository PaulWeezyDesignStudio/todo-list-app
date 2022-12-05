export const Todo = ({todo}) => {
    return (
        <div className="todo">
            <div className="todo__title">
                <p>{todo.title}</p>
            </div>
            <div className="todos__btns">
                <label htmlFor="check"></label>
                <input type="checkbox" name="check" id="check" />
                <button>x</button>
                <button>x</button>
            </div>
        </div>
    );
}