import React from "react";
import './Welcome.css';
import { Container } from '@mui/material'

export default function Welcome() {
    return (
        <Container maxWidth="lg">
            <div className="button-container">
                <div className="button-style">Create New Post</div>
            </div>
        </Container>
    )
}
