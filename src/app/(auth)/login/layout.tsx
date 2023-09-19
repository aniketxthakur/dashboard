import React from 'react'

interface DashboardLayoutProps {
  children:React.ReactNode;
}
const Login : React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}
export default Login;
