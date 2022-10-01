import GroceryList from "../components/GroceryList";
import SearchBar from "../components/SearchBar";
const Home = () => {
    return ( 
        <div className="Home">
            <SearchBar/>
            <h1>Shopping List</h1>
            <GroceryList/>
        </div>
     );
}
 
export default Home;