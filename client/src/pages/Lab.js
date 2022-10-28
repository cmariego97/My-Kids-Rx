import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LAB } from '../utils/queries';
import Auth from '../utils/auth';

const Lab = () => {
    const acctData = Auth.getProfile();
    const email = acctData.data.email;
    const { loading, data } = useQuery(QUERY_LAB, {
        variables: { email }
    });

    if(loading) {
        return (
            <h1>Loading Lab Results</h1>
        )
    }
    else {
        console.log(data);
        const labs = data.onePatient.labs;
        if (labs.length === 0) {
            return (
                <p>No lab results on file!</p>
            )
        }
        else {
            return (
                labs.map((lab) => (
                    <div>
                    <p>{`Results from ${lab.date}`}</p>
                    <p>Complete Blood Count</p>
                    <li>
                        {`RBC: ${lab.cbc.rbc} cells/mcL`}
                    </li>
                    <li>
                        {`WBC: ${lab.cbc.wbc} cells/mcL`}
                    </li>
                    <li>
                        {`Platelets: ${lab.cbc.platelets} cells/mcL`}
                    </li>  
                    <li>
                        {`Hematocrit: ${lab.cbc.hematocrit} percent`}
                    </li>
                    <p>Comprehensive Metabolic Panel</p>
                    <li>
                        {`Sodium: ${lab.cmp.sodium} mEq/L`}
                    </li>
                    <li>
                        {`Potassium: ${lab.cmp.potassium} mEq/L`}
                    </li>
                    <li>
                       {` Chloride: ${lab.cmp.chloride} mmol/L`}
                    </li>
                    <li>
                        {`Calcium: ${lab.cmp.calcium} mg/dL`}
                    </li>
                    <li>
                        {`Glucose: ${lab.cmp.glucose} mg/dL`}
                    </li>
                    <li>
                        {`Carbon dioxide: ${lab.cmp.carbonDioxide} mmol/L`}
                    </li>
                    <li>
                       {`BUN: ${lab.cmp.bun} mg/dL`}
                    </li>
                    <li>
                        {`Creatinine: ${lab.cmp.creatinine} mg/dL`}
                    </li>
                    <li>
                        {`ALP: ${lab.cmp.alp} IU/L`}
                    </li>
                    <li>
                        {`ALT: ${lab.cmp.alt} IU/L`}
                    </li>
                    <li>
                        {`AST: ${lab.cmp.ast} IU/L`}
                    </li>
                    <li>
                        {`Bilirubin: ${lab.cmp.bilirubin} mg/dL`}
                    </li>
                    <li>
                        {`Albumin: ${lab.cmp.albumin} g/dL`}
                    </li>
                    <li>
                        {`Total protein: ${lab.cmp.totalProtein} g/dL`}
                    </li>
                    <p>Lipid Panel</p>
                    <li>{`Total cholesterol: ${lab.lipid.total} mg/dL`}</li>
                    <li>{`LDL cholesterol: ${lab.lipid.ldl} mg/dL`}</li>
                    <li>{`HDL cholesterol: ${lab.lipid.hdl} mg/dL`}</li>
                    <li>{`Triglycerides: ${lab.lipid.tg} mg/dL`}</li>
                    <p>{`Hemoglobin: ${lab.hb} g/dL`}</p>
                    
                    
                </div>
                ))
            )
        }
    }
}

export default Lab;

