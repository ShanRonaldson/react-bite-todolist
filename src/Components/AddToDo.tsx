import React, { useState } from "react";
import { ToDo } from "../Interfaces/ToDoListInterface"
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const AddTask: React.FC = () => {

    const [todo, setToDo] = useState<ToDo[]>([]);
    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string | null>(null);
    const [priority, setPriority] = useState<string>("");

    const handleSubmit = (): void => {
        const newToDo = { taskName: name, taskDate: date, taskPriority: priority };
        setToDo([...todo, newToDo]);
        setName("");
        setDate(null);
    };


    return (
        <div className="header">
            <div className="inputContainer">
                <TextField
                    name="taskName"
                    id="taskName"
                    placeholder="Task..."
                    rows={4}
                    multiline
                    onChange={e => setName(e.target.value)}
                    value={name}
                />

                <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                    onChange={e => setDate(e.target.value)}
                />

                <Box sx={{m: 1, minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={priority}
                            label="Age"
                            onChange={e => setPriority(e.target.value)}
                            autoWidth
                        >
                            <MenuItem value={'low'}>Low</MenuItem>
                            <MenuItem value={'med'}>Medium</MenuItem>
                            <MenuItem value={'high'}>High</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>


            <Button variant="contained" color="success" onClick={handleSubmit}>
                Add Task
            </Button>
        </div>
    )
}