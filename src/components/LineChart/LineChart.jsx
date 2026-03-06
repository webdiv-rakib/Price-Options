import React from 'react';
import { Line, LineChart as LChart, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarksData = [
        { "id": 1, "name": "Student 1", "math": 65, "physics": 70, "chemistry": 68 },
        { "id": 2, "name": "Student 2", "math": 72, "physics": 75, "chemistry": 71 },
        { "id": 3, "name": "Student 3", "math": 58, "physics": 60, "chemistry": 63 },
        { "id": 4, "name": "Student 4", "math": 81, "physics": 79, "chemistry": 85 },
        { "id": 5, "name": "Student 5", "math": 77, "physics": 74, "chemistry": 76 },
        { "id": 6, "name": "Student 6", "math": 69, "physics": 72, "chemistry": 70 },
        { "id": 7, "name": "Student 7", "math": 90, "physics": 88, "chemistry": 91 },
        { "id": 8, "name": "Student 8", "math": 84, "physics": 82, "chemistry": 86 },
        { "id": 9, "name": "Student 9", "math": 73, "physics": 76, "chemistry": 74 },
        { "id": 10, "name": "Student 10", "math": 88, "physics": 85, "chemistry": 89 }
    ]
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
                <Line dataKey='chemistry' stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;