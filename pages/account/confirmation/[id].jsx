import { userService, alertService } from "services";
import { Link } from "components";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../login";

export default Confirmation;

function Confirmation() {
  const router = useRouter();
  useEffect(() => {
    const id = router.asPath.split("/confirmation/")[1];
    if (!id.includes("[")) {
      userService
        .confirmation(id)
        .then(async (res) => {
          alertService.success("Verification successfull", {
            keepAfterRouteChange: true,
          });
        })
        .catch(alertService.error);
    }
  }, []);

  return <Login />;
}
