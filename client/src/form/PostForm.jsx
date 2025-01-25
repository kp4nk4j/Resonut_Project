import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { AiOutlineCheckCircle } from 'react-icons/ai';  // Green check
import { AiOutlineCloseCircle } from 'react-icons/ai';  // Red cross
import './PostForm.css';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(false);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const isImage = selectedImage.type.startsWith('image/');
            if (isImage) {
                setImage(selectedImage);
                setImageError(false);
            } else {
                setImage(null);
                setImageError(true);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) formData.append('image', image);
        // Add your submit logic here (e.g., API call)
    };

    return (
        <div className='form-container'>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Button variant="contained" component="label">
                    Upload Image
                    <input type="file" hidden onChange={handleImageChange} />
                </Button>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    {imageError ? (
                        <AiOutlineCloseCircle style={{ color: 'red', marginRight: '10px', marginTop: -1 }} />
                    ) : image ? (
                        <AiOutlineCheckCircle style={{ color: 'green', marginRight: '10px', marginTop: -1 }} />
                    ) : null}
                    <span>{image ? 'Image Uploaded' : imageError ? 'Invalid Image' : ''}</span>
                </Box>
                <Button type="submit" variant="contained" color="primary" >
                    Submit
                </Button>
            </Box></div>
    );
};

export default PostForm;
