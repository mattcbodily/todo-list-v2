import React, {useState} from 'react';

export default () => {
    let [step, setStep] = useState('');

    const displaySteps = () => {
        switch(step){
            case 1:
                return (
                    <>
                        <h3>Welcome to Doist</h3>
                        <p>Doist is an incredibly simple task management application.</p>
                    </>
                ) 
                break;
        }
    }

    return (
        <div className='tutorial-backdrop'>
            <section className='tutorial-modal'>

            </section>
        </div>
    )
}