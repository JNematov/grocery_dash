import GroceryList from "../components/GroceryList";
import SearchBar from "../components/SearchBar";
const Home = () => {
    return ( 
        <div className="Home">
            <SearchBar/>
            <h1>Shopping List</h1>
            <GroceryList/>
            <img src={require('../images/path.png')}/>
        </div>
     );
}
 
export default Home;