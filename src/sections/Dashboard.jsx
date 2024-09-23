import axios from 'axios';
import React, { useState } from 'react';

export default function Dashboard() {
    const [newProject, setNewProject] = useState({
        file: null,  
        title: '',
        description: '',
        author: '',
        date: '',
    });

    const addProject = async (formData) => {
        try {
            const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:DnONaUrH/projects', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error adding project:', error.response ? error.response.data : error);
            throw error;
        }
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();

        // Check if a file is selected
        if (!newProject.file) {
            console.error('File is required.');
            return;
        }
        //formData is the object containing the data 
        //create a FormData object and append the project data
        const formData = new FormData();
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        formData.append('author', newProject.author);
        formData.append('date', newProject.date);

        formData.append('file', newProject.file);  

        try {
            //call the addProject function to send the data to the server.
            const response = await addProject(formData);
            console.log('Project added:', response);
            setNewProject({ title: '', description: '', author: '', date: '', file: null }); 
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setNewProject((prev) => ({
            ...prev,
            [name]: name === 'file' ? files[0] : value,  
        }));
    };

    return (
        <div className='h-[100vh] flex justify-center'>
            <form onSubmit={onSubmit} className='h-[600px] w-[600px] bg-slate-400 flex justify-center flex-col'>
                <input type="file" name="file" onChange={handleChange} />  
                <br/>
                <input type="text" name="title" value={newProject.title} onChange={handleChange} placeholder="Title" />  <br/>
                <input type="text" name="description" value={newProject.description} onChange={handleChange} placeholder="Description" />  <br/>
                <input type="text" name="author" value={newProject.author} onChange={handleChange} placeholder="Author" />  <br/>
                <input type="date" name="date" value={newProject.date} onChange={handleChange} />  <br/>
                <button type='submit'>Submit</button>  <br/>
            </form>
        </div>
    );
}
