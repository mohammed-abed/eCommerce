import { useSnackbar } from 'notistack';
import React from 'react'

export default function Warning({message}) {
    const { enqueueSnackbar } = useSnackbar();

    const WarningSnackBar = () => {
        enqueueSnackbar(message, { 
            variant: 'warning',
        });
    }
    return (
        <div>
            {WarningSnackBar()}
        </div>
    )
}
