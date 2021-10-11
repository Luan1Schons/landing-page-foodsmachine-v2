import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';

export default function () {
    const [openQuest1, setOpenQuest1] = useState(true);
    const [openQuest2, setOpenQuest2] = useState(false);
    const [openQuest3, setOpenQuest3] = useState(false);
    const [openQuest4, setOpenQuest4] = useState(false);
    const [openQuest5, setOpenQuest5] = useState(false);
    const [openQuest6, setOpenQuest6] = useState(false);
    return (
        <>
            <div className="quest p-1">

                <div className="card-header text-center font-fbk"
                    onClick={() => setOpenQuest1(!openQuest1)}
                    aria-controls="quest1"
                    aria-expanded={openQuest1}
                >
                    Oque é a Foods Machine
                </div>
                <Collapse in={openQuest1}>
                    <div id="quest1">
                        <div className="card-body font-fbk">
                            Teste1
                        </div>
                    </div>
                </Collapse>
                
            </div>

            <div className="quest p-1">

                <div className="card-header text-center font-fbk"
                    onClick={() => setOpenQuest2(!openQuest2)}
                    aria-controls="quest2"
                    aria-expanded={open}
                >
                    Oque é a Foods Machine
                </div>
                <Collapse in={openQuest2}>
                    <div id="quest2">
                        <div className="card-body font-fbk">
                            Teste2
                        </div>
                    </div>
                </Collapse>
                
            </div>
        </>
    );
}
