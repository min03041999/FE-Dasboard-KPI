import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const PieSimple = (props) => {
    const { data, setHeightChart } = props;

    return (
        <ResponsiveContainer width={"100%"} minHeight={setHeightChart}>
            <PieChart>
                <Pie
                    isAnimationActive={false}
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    label={(entry) => entry.value}
                    cx="50%"
                    cy="50%"
                    style={{ width: "100%", height: "100%" }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieSimple;