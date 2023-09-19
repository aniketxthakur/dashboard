import React, { FC} from 'react';
import LoadingSpinner from '../spinners/spinner';

interface DefaultButtonProps {
    name: string;
    wid?: string;
    small?: string;
    loading:any;
}

const DefaultButton: FC<DefaultButtonProps> = ({ name, wid, small ,loading}) => {
    return (
        <button disabled={loading}
            className={`bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 ${wid} ${small} my-2 rounded-lg .loading-spinner`}
            type='submit'>{name}
        </button>
    );
};

export default DefaultButton;
