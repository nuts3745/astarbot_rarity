import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import bots_rarity from "../public/bots_rarity.json";
import PunksImage from "../public/GI3q2dJp_400x400.jpg";
import BotsImage from "../public/J0GyOuro_400x400.png";
import punks_rarity from "../public/punks_rarity.json";

export default function Home() {
    const [selectNft, setSelectNft] = useState("Bots");
    const [traitType, setTraitType] = useState("Background");
    const [index, setIndex] = useState(0);
    const TABLE_BOTS_DATA = JSON.parse(JSON.stringify(bots_rarity));
    const TABLE_PUNKS_DATA = JSON.parse(JSON.stringify(punks_rarity));
    const BOTS_COLUMNS = [
        { field: "trait", headerName: "trait", type: "string", flex: 1 },
        { field: "weight", headerName: "weight", type: "number", flex: 1 },
        {
            field: "occurrence",
            headerName: "occurrence",
            type: "string",
            flex: 1,
        },
        {
            field: "occurrence_percent",
            headerName: "occurrence_percent",
            type: "number",
            flex: 1,
        },
    ];
    const PUNKS_COLUMNS = [
        { field: "trait", headerName: "trait", type: "string", flex: 1 },
        {
            field: "percent",
            headerName: "percent",
            type: "number",
            flex: 1,
        },
    ];
    return (
        <>
            <div>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setTraitType("Background");
                        setIndex(0);
                        if (selectNft === "Bots") {
                            setSelectNft("Punks");
                        } else {
                            setSelectNft("Bots");
                        }
                    }}>
                    {selectNft === "Bots"
                        ? "Switch To Punks"
                        : "Switch To Bots"}
                </Button>
            </div>
            {selectNft === "Bots" ? (
                <>
                    <FormControl>
                        <div>
                            <Image src={BotsImage} width={30} height={30} />
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                AstarBots Rarity
                            </FormLabel>
                        </div>

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            defaultValue="Background"
                            name="row-radio-buttons-group">
                            <FormControlLabel
                                value="Background"
                                control={
                                    <Radio
                                        checked={traitType === "Background"}
                                    />
                                }
                                onChange={() => {
                                    setTraitType("Background");
                                    setIndex(0);
                                }}
                                label="Background"
                            />
                            <FormControlLabel
                                value="Type"
                                control={
                                    <Radio checked={traitType === "Type"} />
                                }
                                onChange={() => {
                                    setTraitType("Type");
                                    setIndex(1);
                                }}
                                label="Type"
                            />
                            <FormControlLabel
                                value="Eyes"
                                control={
                                    <Radio checked={traitType === "Eyes"} />
                                }
                                onChange={() => {
                                    setTraitType("Eyes");
                                    setIndex(2);
                                }}
                                label="Eyes"
                            />
                            <FormControlLabel
                                value="Mouth"
                                control={
                                    <Radio checked={traitType === "Mouth"} />
                                }
                                onChange={() => {
                                    setTraitType("Mouth");
                                    setIndex(3);
                                }}
                                label="Mouth"
                            />
                            <FormControlLabel
                                value="Head"
                                control={
                                    <Radio checked={traitType === "Head"} />
                                }
                                onChange={() => {
                                    setTraitType("Head");
                                    setIndex(4);
                                }}
                                label="Head"
                            />
                            <FormControlLabel
                                value="Body"
                                control={
                                    <Radio checked={traitType === "Body"} />
                                }
                                onChange={() => {
                                    setTraitType("Body");
                                    setIndex(5);
                                }}
                                label="Body"
                            />
                            <FormControlLabel
                                value="Accessories"
                                control={
                                    <Radio
                                        checked={traitType === "Accessories"}
                                    />
                                }
                                onChange={() => {
                                    setTraitType("Accessories");
                                    setIndex(6);
                                }}
                                label="Accessories"
                            />
                        </RadioGroup>
                    </FormControl>
                    <div style={{ height: 800, width: "100%" }}>
                        <DataGrid
                            getRowId={(row) => row.trait}
                            rows={TABLE_BOTS_DATA.TraitType[index][traitType]}
                            columns={BOTS_COLUMNS}
                            pageSize={34}
                            rowsPerPageOptions={[34]}
                            checkboxSelection
                            components={{
                                Toolbar: GridToolbar,
                            }}
                        />
                    </div>
                </>
            ) : (
                <>
                    <FormControl>
                        <div>
                            <Image src={PunksImage} width={30} height={30} />
                            <FormLabel id="demo-row-radio-buttons-group-label">
                                AstarPunks Rarity
                            </FormLabel>
                        </div>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            defaultValue="Background"
                            name="row-radio-buttons-group">
                            <FormControlLabel
                                value="Background"
                                control={
                                    <Radio
                                        checked={traitType === "Background"}
                                    />
                                }
                                onChange={() => {
                                    setTraitType("Background");
                                    setIndex(0);
                                }}
                                label="Background"
                            />
                            <FormControlLabel
                                value="Extra"
                                control={
                                    <Radio checked={traitType === "Extra"} />
                                }
                                onChange={() => {
                                    setTraitType("Extra");
                                    setIndex(1);
                                }}
                                label="Extra"
                            />
                            <FormControlLabel
                                value="Eyes"
                                control={
                                    <Radio checked={traitType === "Eyes"} />
                                }
                                onChange={() => {
                                    setTraitType("Eyes");
                                    setIndex(2);
                                }}
                                label="Eyes"
                            />
                            <FormControlLabel
                                value="Head"
                                control={
                                    <Radio checked={traitType === "Head"} />
                                }
                                onChange={() => {
                                    setTraitType("Head");
                                    setIndex(3);
                                }}
                                label="Head"
                            />

                            <FormControlLabel
                                value="Mouth"
                                control={
                                    <Radio checked={traitType === "Mouth"} />
                                }
                                onChange={() => {
                                    setTraitType("Mouth");
                                    setIndex(4);
                                }}
                                label="Mouth"
                            />
                            <FormControlLabel
                                value="Type"
                                control={
                                    <Radio checked={traitType === "Type"} />
                                }
                                onChange={() => {
                                    setTraitType("Type");
                                    setIndex(5);
                                }}
                                label="Type"
                            />
                        </RadioGroup>
                    </FormControl>
                    <div style={{ height: 800, width: "100%" }}>
                        <DataGrid
                            getRowId={(row) => row.trait}
                            rows={TABLE_PUNKS_DATA.TraitType[index][traitType]}
                            columns={PUNKS_COLUMNS}
                            pageSize={31}
                            rowsPerPageOptions={[31]}
                            checkboxSelection
                            components={{
                                Toolbar: GridToolbar,
                            }}
                        />
                    </div>
                </>
            )}
        </>
    );
}
