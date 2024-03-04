import { useState } from "react";

const ColorForm = ({onColorSubmit}) => {
    const [colorName, setColorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onColorSubmit(colorName);
        setColorName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color Name:
                <input
                    type="text"
                    value={colorName}
                    onChange={(event) => setColorName(event.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>

    )
        
    };
    //prop validation
    ColorForm.propTypes = {
        onColorSubmit: () => {},
    }

export default ColorForm
