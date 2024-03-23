import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList: MediaQueryList = window.matchMedia(query);

        const updateMatch = () => {
            setMatches(mediaQueryList.matches);
        };

        mediaQueryList.addEventListener('change', updateMatch);

        updateMatch();

        return () => {
            mediaQueryList.removeEventListener('change', updateMatch);
        };
    }, [query]);

    return matches;
}
