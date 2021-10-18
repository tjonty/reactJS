import React, { useState } from "react";

const Todo = () => {
    const [data, setData] = useState([]);
    const [tempTodo, setTempTodo] = useState("");

    const createTodo = (e) => {
        e.preventDefault();
        if (data.indexOf(tempTodo) < 0) {
            setData((oldData) => [...oldData, tempTodo]);
        }
    };

    const handleInput = (e) => {
        setTempTodo(e.target.value);
    };

    const delTodo = (name) => {
        if (name === -1) {
            setData([]);
        } else {
            const newData = data.filter((d) => d !== name);
            setData(newData);
        }
    };

    const ShowTodo_Comp = (props) => {
        return (
            <div>
                {props.data.length ? (
                    props.data.map((entry) => {
                        return (
                            <div className="data">
                                <p> {entry}</p>
                                <button name="delete" onClick={() => delTodo(entry)}>
                                    Delete
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p>No Data </p>
                )}
            </div>
        );
    };

    return (
        <div id="container">
            <h1>Todo</h1>
            <form className="form" id="addTodo" onSubmit={createTodo}>
                <input name="list" className="input" onChange={handleInput} />
                <button className="add-btn" type="submit">
                    Add
                </button>
            </form>
            <ShowTodo_Comp data={data} />
            <button className="clr-btn" onClick={() => delTodo(-1)}>
                ClearAll
            </button>
        </div>
    );
};

export default Todo;
