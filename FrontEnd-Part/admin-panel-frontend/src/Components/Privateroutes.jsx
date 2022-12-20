import { useToast } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {

    const toast = useToast()
    const { isAuth } = useSelector(({auth} ) => auth.data)

    if (!isAuth) {
        return <Navigate to={"/login"} />
    }

    return children 

}