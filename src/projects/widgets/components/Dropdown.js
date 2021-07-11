import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    useEffect(() => {

        const onBodyClick = (event) => {
            !ref.current.contains(event.target) && setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true, });
        };
    }, []);

    const renderedOptions = options.map((option) => {
        return (
            option.label !== selected.label && // selected item schould not be showed
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <>
            <div ref={ref} className="ui form">
                <div className="field" >
                    <label className="label" style={{ color: selected.value }}>{label}</label>
                    <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;