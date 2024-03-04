
const ColorBox = ({ color }) => {
    const boxStyle = {
        backgroundColor: color,
        width: '100px',
        height: '200px',
        margin: '10px',
        display: 'inline-block',
    };
    return <div style={boxStyle} />;
};
//prop vLidation
ColorBox.propTypes = {
    color: () => {},
}
export default ColorBox;