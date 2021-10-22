import React from 'react'
import {LoadingSpinner} from './Spinner.Style'
import load from '../../Assets/miky.png'
import { useSnackbar } from 'notistack';
import Button from '../../Components/Button/Button'

export default function Spinner() {

    const { enqueueSnackbar } = useSnackbar();
    const message = 'I Love React ..';

    const handleClick = () => {
        enqueueSnackbar(message, { 
            variant: 'success',
        });
    }
    const message2 = 'Your notification here';

const handleClick2 = () => {
    enqueueSnackbar(message, { 
        variant: 'warning',
    });
}
    return (
        <div style={{width:'100%', height:'800px', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}>
        <LoadingSpinner src={load}/>
        
{/* snack */}
{
    true?
    (handleClick()):("")
}
        <Button onClick={handleClick} text={'Show snackbar'}></Button>
        <Button onClick={handleClick2} text={'Show snackbar'}></Button>


        </div>
    )
}
