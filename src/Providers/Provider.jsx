// import { AuthContext } from "../Context/Context";

import { AuthContext } from "../Context/Context";


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const info = "Hridoy";


    const allInfo = {
        info
    }

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;