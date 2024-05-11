import React, { useState } from 'react';

export function CreateTodo(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return <div>
        <input id="title" type="text" placeholder="Title"  
            onChange={function(e) {
                setTitle(e.target.value)
            }}
        /><br />
        <input id="desc" type="text" placeholder="Description"
            onChange={function(e) {
                setDescription(e.target.value)
            }}
        /><br />
        <button
        onClick={function() {
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            })
            .then(async (res) => {
                const json = await res.json()
                alert("todo")
            })
        }}>Add a todo</button>

    </div>
}