import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_LAB } from '../utils/queries';

const Lab = () => {
    //TODO: when we have login we need to retrieve email from the jwt token instead of this const var
    const email = 'mgreen@test.com';
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
        const lab = data.onePatient.labs[0]
        return (
            <div>
                <p>Showing Results from: {lab.date}</p>
                <p>Complete Blood Count</p>
                <li>
                    RBC:{lab.cbc.rbc} cells/mcL
                </li>
                <li>
                    WBC:{lab.cbc.wbc} cells/mcL
                </li>
                <li>
                    Platelets:{lab.cbc.platelets} cells/mcL
                </li>  
                <li>
                    Hematocrit:{lab.cbc.hematocrit} percent
                </li>
                <p>Comprehensive Metabolic Panel</p>
                <li>
                    Sodium:{lab.cmp.sodium} mEq/L
                </li>
                <li>
                    potassium:{lab.cmp.potassium} mEq/L
                </li>
                <li>
                    chloride:{lab.cmp.chloride} mmol/L
                </li>
                <li>
                    calcium:{lab.cmp.calcium} mg/dL
                </li>
                <li>
                    glucose:{lab.cmp.glucose} mg/dL
                </li>
                <li>
                    carbon dioxide:{lab.cmp.carbonDioxide} mmol/L
                </li>
                <li>
                    bun:{lab.cmp.bun} mg/dL
                </li>
                <li>
                    creatinine:{lab.cmp.creatinine} mg/dL
                </li>
                <li>
                    alp:{lab.cmp.alp} IU/L
                </li>
                <li>
                    alt:{lab.cmp.alt} IU/L
                </li>
                <li>
                    ast:{lab.cmp.ast} IU/L
                </li>
                <li>
                    bilirubin:{lab.cmp.bilirubin} mg/dL
                </li>
                <li>
                    albumin:{lab.cmp.albumin} g/dL
                </li>
                <li>
                    total protein:{lab.cmp.totalProtein} g/dL
                </li>
                <p>Lipid Panel</p>
                <li>Total Cholesterol:{lab.lipid.total} mg/dL</li>
                <li>LDL Cholesterol:{lab.lipid.ldl} mg/dL</li>
                <li>HDL Cholesterol:{lab.lipid.hdl} mg/dL</li>
                <li>Triglycerides:{lab.lipid.tg} mg/dL</li>
                <p>Hemoglobin {lab.hb} g/dL</p>
                
                
            </div>
        )
    }
}

export default Lab;

