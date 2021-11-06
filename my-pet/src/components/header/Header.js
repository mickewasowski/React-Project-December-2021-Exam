import '../header/Header.css';

function Header(){
   return (
      <header className="navigationBar">
         <nav>
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">My Pets</a></li>
               <li><a href="#">My Profile</a></li>
               <li><a href="#">Logout</a></li>
               <li><a href="#">Register</a></li>
               <li><a href="#">Login</a></li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;