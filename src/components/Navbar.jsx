function Navbar() {
    return (
      <div className="flex items-center justify-between p-4 bg-black text-white">
        <h1 className="text-2xl font-bold text-red-600">NETFLIX</h1>
        <ul className="flex gap-6 text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">My List</li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  