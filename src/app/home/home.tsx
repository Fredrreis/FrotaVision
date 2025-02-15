"use client";

import React, { useEffect } from "react"; // Adicione o useEffect aqui
import './home.css';
import { Button, Container, Typography } from "@mui/material";
import Header from "./components/header/header";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {

    return (
        <>
            <Header />
        </>
    );
};
