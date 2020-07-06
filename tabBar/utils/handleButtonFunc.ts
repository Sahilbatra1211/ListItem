export const handleButtonClick = (e: any, handleClick: (...args: any[]) => void) => {
    e.preventDefault();
    handleClick();
};

export const handleCheckFocus = (e: any) => {
    e.preventDefault();
    if (e.relatedTarget) {
        e.relatedTarget.focus();
    } else {
        e.currentTarget.blur();
    }
};
