import CompareProducts from "../Components/compare";
import { products } from "../utils/data";
const ComparePage: React.FC = () => {
    return (
      <div>
        <CompareProducts myproducts={products} />
      </div>
    );
  };
  
  export default ComparePage;