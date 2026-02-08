import { useState } from "react";


function AuthPopup() {
    const [isOpen, SetISOpen] = useState(false);

    return (
        <>
            {isOpen? 
                (
                    <></>
                ) : 
                (
                    <></>
                )
            };
        </>
    )    
}

export default AuthPopup;