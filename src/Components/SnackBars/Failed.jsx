import { useSnackbar } from 'notistack';
import React from 'react'

export default function Failed({message}) {
    const { enqueueSnackbar } = useSnackbar();

    const FailedSnackBar = () => {
        enqueueSnackbar(message, { 
            variant: 'error',
        });
    }
    return (
        <div>
            {FailedSnackBar()}
        </div>
    )
}
