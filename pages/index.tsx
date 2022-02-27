import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import rarity from "../public/rarity.json";

export default function Home() {
    const [traitType, setTraitType] = useState("Background");
    const [index, setIndex] = useState(0);
    const tableData = JSON.parse(JSON.stringify(rarity));
    const columns = [
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
    return (
        <>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                    AstarBots Rarity
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    defaultValue="Background"
                    name="row-radio-buttons-group">
                    <FormControlLabel
                        value="Background"
                        control={<Radio />}
                        onChange={() => {
                            setTraitType("Background");
                            setIndex(0);
                        }}
                        label="Background"
                    />
                    <FormControlLabel
                        value="Type"
                        control={<Radio />}
                        onChange={() => {
                            setTraitType("Type");
                            setIndex(1);
                        }}
                        label="Type"
                    />
                    <FormControlLabel
                        value="Eyes"
                        control={<Radio />}
                        onChange={() => {
                            setTraitType("Eyes");
                            setIndex(2);
                        }}
                        label="Eyes"
                    />
                    <FormControlLabel
                        value="Mouth"
                        control={<Radio />}
                        onChange={() => {
                            setTraitType("Mouth");
                            setIndex(3);
                        }}
                        label="Mouth"
                    />
                    <FormControlLabel
                        value="Head"
                        control={<Radio />}
                        onChange={() => {
                            setTraitType("Head");
                            setIndex(4);
                        }}
                        label="Head"
                    />
                    <FormControlLabel
                        value="Body"
                        control={<Radio />}
                        onChange={() => {
                            setTraitType("Body");
                            setIndex(5);
                        }}
                        label="Body"
                    />
                    <FormControlLabel
                        value="Accessories"
                        control={<Radio />}
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
                    rows={tableData.TraitType[index][traitType]}
                    columns={columns}
                    pageSize={34}
                    rowsPerPageOptions={[34]}
                    checkboxSelection
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </>
    );
}
