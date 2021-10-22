import { useSnackbar } from 'notistack';
import React from 'react'

export default function Success({message}) {
    const { enqueueSnackbar } = useSnackbar();

    const SuccessSnackBar = () => {
        enqueueSnackbar(message, { 
            variant: 'success',
        });
    }
    return (
        <div>
            {SuccessSnackBar()}
        </div>
    )
}
