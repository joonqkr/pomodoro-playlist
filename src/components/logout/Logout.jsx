export default function Logout() {
 
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    };
 
    return (
        <button onClick={logout}>Log out</button>
    );
  
}