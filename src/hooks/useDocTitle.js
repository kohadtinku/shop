import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - The Y Mart`;
        } else {
            document.title = 'The Y Mart';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
