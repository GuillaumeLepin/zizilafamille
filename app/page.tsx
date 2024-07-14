import { Button, Box, ButtonGroup, Typography } from "@mui/material"
import { DynamicWidget } from "../lib/dynamic"
import ButtonAppBar from "./components/navbar"
import Image from "next/image"
import Boxe from "./components/boxe"

export default function Main() {
    return (
        <div>
            <ButtonAppBar />
            <div className=" bg-black text-white grid grid-cols-3">
                <div></div>
                <div className="py-40 px-4">
                    <Boxe />
                </div>
                <div></div>
            </div>
        </div>
    )
}
