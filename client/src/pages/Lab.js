import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LAB } from '../utils/queries';
import Auth from '../utils/auth';

// import MUI components
import { Box, Typography } from '@material-ui/core';

const Lab = () => {
    //retrieve email from jwt to use to find specific patient
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    //lab results query
    const { loading, data } = useQuery(QUERY_LAB, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading Lab Results</h1>
        )
    }
    else {
        const renderLabs = () => {
            //if patient not in database
            if (!data.onePatient) {
                return (
                    <p>Email not on file with a provider, contact your provider for details!</p>
                )
            }
            else {
                const labs = data.onePatient.labs;
                if (labs.length === 0) {
                    //if patient does not have any lab results in database
                    return (
                        <p>No lab results on file!</p>
                    )
                }
                else {
                    //styles lab results differently if outside of normal range
                    //TODO: make element with date stand out
                    const abnormal = {color: 'red'};
                    const normal = {color: 'black'}
                    return (
                            labs.map((lab) => (
                            <div>
                            <p>{`Results from ${lab.date}`}</p>
                            <p>Complete Blood Count</p>
                            <li style={lab.cbc.rbc < 4000000 || lab.cbc.rbc > 5400000 ? abnormal : normal}>
                                {`RBC: ${lab.cbc.rbc} cells/mcL`}
                            </li>
                            <li style={lab.cbc.wbc < 4500 || lab.cbc.wbc > 14000 ? abnormal : normal}>
                                {`WBC: ${lab.cbc.wbc} cells/mcL`}
                            </li>
                            <li style={lab.cbc.platelets < 164000 || lab.cbc.platelets > 369000 ? abnormal : normal}>
                                {`Platelets: ${lab.cbc.platelets} cells/mcL`}
                            </li>  
                            <li style={lab.cbc.hematocrit < 30.9 || lab.cbc.hematocrit > 56.1 ? abnormal : normal}>
                                {`Hematocrit: ${lab.cbc.hematocrit} %`}
                            </li>
                            <p>Comprehensive Metabolic Panel</p>
                            <li style={lab.cmp.sodium < 136 || lab.cmp.sodium > 144 ? abnormal : normal}>
                                {`Sodium: ${lab.cmp.sodium} mEq/L`}
                            </li>
                            <li style={lab.cmp.potassium < 3.7 || lab.cmp.potassium > 5.2 ? abnormal : normal}>
                                {`Potassium: ${lab.cmp.potassium} mEq/L`}
                            </li>
                            <li style={lab.cmp.chloride < 96 || lab.cmp.chloride > 106 ? abnormal : normal}>
                               {` Chloride: ${lab.cmp.chloride} mmol/L`}
                            </li>
                            <li style={lab.cmp.calcium < 8.5 || lab.cmp.calcium > 10.2 ? abnormal : normal}>
                                {`Calcium: ${lab.cmp.calcium} mg/dL`}
                            </li>
                            <li style={lab.cmp.glucose < 60 || lab.cmp.glucose > 100 ? abnormal : normal}>
                                {`Glucose: ${lab.cmp.glucose} mg/dL`}
                            </li>
                            <li style={lab.cmp.carbonDioxide < 23 || lab.cmp.carbonDioxide > 29 ? abnormal : normal}>
                                {`Carbon dioxide: ${lab.cmp.carbonDioxide} mmol/L`}
                            </li>
                            <li style={lab.cmp.bun < 6 || lab.cmp.bun > 20 ? abnormal : normal}>
                               {`BUN: ${lab.cmp.bun} mg/dL`}
                            </li>
                            <li style={lab.cmp.creatinine < 0.8 || lab.cmp.creatinine > 1.2 ? abnormal : normal}>
                                {`Creatinine: ${lab.cmp.creatinine} mg/dL`}
                            </li>
                            <li style={lab.cmp.alp < 44 || lab.cmp.alp > 147 ? abnormal : normal}>
                                {`ALP: ${lab.cmp.alp} IU/L`}
                            </li>
                            <li style={lab.cmp.alt < 7 || lab.cmp.alt > 40 ? abnormal : normal}>
                                {`ALT: ${lab.cmp.alt} IU/L`}
                            </li>
                            <li style={lab.cmp.ast < 10 || lab.cmp.ast > 34 ? abnormal : normal}>
                                {`AST: ${lab.cmp.ast} IU/L`}
                            </li>
                            <li style={lab.cmp.bilirubin < 0.3 || lab.cmp.bilirubin > 1.9 ? abnormal : normal}>
                                {`Bilirubin: ${lab.cmp.bilirubin} mg/dL`}
                            </li>
                            <li style={lab.cmp.albumin < 3.5 || lab.cmp.albumin > 5.4 ? abnormal : normal}>
                                {`Albumin: ${lab.cmp.albumin} g/dL`}
                            </li>
                            <li style={lab.cmp.totalProtein < 6 || lab.cmp.totalProtein > 8.3 ? abnormal : normal}>
                                {`Total protein: ${lab.cmp.totalProtein} g/dL`}
                            </li>
                            <p>Lipid Panel</p>
                            <li style={lab.lipid.total > 170 ? abnormal : normal}>{`Total cholesterol: ${lab.lipid.total} mg/dL`}</li>
                            <li style={lab.lipid.ldl > 110 ? abnormal : normal}>{`LDL cholesterol: ${lab.lipid.ldl} mg/dL`}</li>
                            <li style={lab.lipid.hdl < 45 ? abnormal : normal}>{`HDL cholesterol: ${lab.lipid.hdl} mg/dL`}</li>
                            <li style={lab.lipid.tg > 100 ? abnormal : normal}>{`Triglycerides: ${lab.lipid.tg} mg/dL`}</li>
                            <p style={lab.hb < 11 ? abnormal : normal}>{`Hemoglobin: ${lab.hb} g/dL`}</p>
                            </div>
                        ))
                    )
                }
            }
        }
        return (
            <Box className="wrap siteWrap">
                <Box className="card">
                    <Typography variant="h5">Lab Results</Typography>
                    {renderLabs()}
                </Box>
            </Box>
            
        )
    }
}

export default Lab;

