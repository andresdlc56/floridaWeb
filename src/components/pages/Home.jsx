import { Carousel } from "../../ui/components";
import { Productos } from "../../ui/components/Productos";


export const Home = () => {
    return (
        <>
            <Carousel />

            <div className="container mt-2">
                <Productos />
            </div>
        </>
        

        
    )
}
