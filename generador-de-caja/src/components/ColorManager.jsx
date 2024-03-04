import { useState } from "react";
import ColorForm from "./ColorForm";
import ColorBox from "./ColorBox";
import '../App.css'; 


const ColorManager = () => {
    const [colors, setColors] = useState([]);

    const handleColorSubmit = (colorName) => {
        setColors([...colors, colorName]);
    };
    return (
        <div className="color-manager">
            <ColorForm onColorSubmit={handleColorSubmit} />
        <div>
        {colors.map((color) => (
            <ColorBox key={color} color={color} />
        ))}
        </div>
        </div>

    )
}

export default ColorManager;