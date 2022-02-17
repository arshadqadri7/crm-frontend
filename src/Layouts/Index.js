import { useRouter } from "next/router";
import AuthLayout from "./authLayout/AuthLayout";
import Main from "./main/Main";
import Crm from "./crm/Crm";
import Timetracking from "./timetracking/Timetracking";

const Layouts = ({ children }) => {
  const router = useRouter();
  let { pathname } = { ...router };

  if (
    [
      // '/login',
      "/",
    ].includes(pathname)
  ) {
    return <Main>{children}</Main>;
  } else if (
    [
      "/crm",
      "/crm/notification",
      "/myprofile",
      "/crm/contacts",
      "/crm/employees",
      "/crm/projects",
      "/crm/subprojects",
      "/crm/myprofile",
      "/crm/teams",
      "/crm/companys",
      "/crm/roles"
    ].includes(pathname)
  ) {
    return (
      <>
        <Crm>{children}</Crm>
      </>
    );
  } else if(
    [
      "/timetracking",
      "/timetracking/prioritytasks",
      "/timetracking/tasks",
      "/timetracking/completedtasks",
      "/timetracking/admin",
      "/timetracking/adminexport",
    ].includes(pathname)
  ) 
  {
    return <Timetracking>{children}</Timetracking>;
  }
  else {
    return <AuthLayout>{children}</AuthLayout>;
  }
};

export default Layouts;
 