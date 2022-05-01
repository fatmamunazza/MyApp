import { userService, alertService } from 'services';
import { Link } from 'components';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

export default Confirmation;

function Confirmation() {
    const router = useRouter();
    useEffect(() => {
       const id = router.asPath.split("/confirmation/")[1];
       if(!id.includes("[")){
        userService.confirmation(id)
             .then(async(res) => {
                alertService.success("Verification successfull", {
                    keepAfterRouteChange: true,
                  });
             })
             .catch(alertService.error);
       }
      
      
    }, []);
    
    return (
        <div className="p-4">
            <div className="container">
              
                <p><Link href="/account/login">Login</Link></p>
            </div>
        </div>
    );
}
