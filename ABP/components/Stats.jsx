function Stats({ total, max, min, ave }) {
    return (
        <div>
            <p>Total recetas: {total}</p>
            <p>Mayor tiempo de preparación: {max}</p>
            <p>Menor tiempo de preparación: {min}</p>
            <p>Promedio de calorias: {ave}</p>
        </div>
    );
}

export default Stats;
