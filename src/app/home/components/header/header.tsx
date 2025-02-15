"use client";

import { useState } from "react";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import FrotaVisionLogo from "../../../img/FrotaVisionLogo.png";
import Image from 'next/image';
import Link from "next/link";
import "./header.css";

export default function Header() {
  const [active, setActive] = useState("HOME");

  return (
    <div className="header-container">
      {/* Primeiro Toolbar - Azul */}
      <Box className="header-blue-bg">
        <Toolbar className="header-toolbar-blue">
          <Box>
            <Image src={FrotaVisionLogo} alt="FrotaVision Logo" width={170} height={70} />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button sx={{ color: "#FFF", textTransform: "none" }}>Log In</Button>
            <Button variant="contained" sx={{ backgroundColor: "#FFF", color: "#173165", textTransform: "none", "&:hover": { backgroundColor: "#E5E5E5" } }}>
              Inscreva-se
            </Button>
          </Box>
        </Toolbar>
      </Box>

      {/* Segundo Toolbar - Branco */}
      <Box className="header-white-bg"> 
        <Toolbar className="header-toolbar-white">
          <Box sx={{ display: "flex", gap: 4 }}>
            {["HOME", "SERVIÇO", "PLANOS", "SOBRE", "SUPORTE"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`nav-link ${active === item ? "active" : ""}`}
                onClick={() => setActive(item)}
              >
                <Typography
                  variant="body1"
                  className={`nav-text ${active === item ? "active" : ""}`}
                  sx={{ fontWeight: active === item ? "bold" : "medium" }}
                >
                  {item}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </div>
  );
}
