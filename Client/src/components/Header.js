import AuthButton from "./buttons/authButton";

const Header = ({ title }) => {    
    return (
            <div className="flex flex-row justify-between w-full text-2xl py-2 px-4 border-b-4 border-indigo-500 bg-indigo-300">
            <h1 >
                {title}
            </h1>
            <AuthButton 
                purpose = 'Log Out'
            />
            </div>



    )
}

export default Header;