import React, { useEffect, useState } from 'react';

function PrintTable({ calculateTable }) {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        console.log('Print Table Runs');
        setRows(calculateTable(2));
    }, [calculateTable]);

    return rows.map((row, index) => {
        return <p key={index}>{row}</p>;
    });
}

export default PrintTable;
