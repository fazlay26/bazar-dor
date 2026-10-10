
import Marquee from "react-fast-marquee";
import { getProducts } from "@/app/lib/api";
import { PriceItem } from "@/types";
const PriceMarquee = async () => {

    const products = await getProducts();
    console.log(products);


    return (
        <div className="w-full bg-white border-y border-gray-200 py-2">

            <Marquee
                speed={45}
                pauseOnHover={true}
                gradient={false}
            >

                {
                    products.slice(0, 20).map((item:PriceItem)=>(

                        <div
                            key={item.id}
                            className="flex items-center gap-2 mx-8 text-sm"
                        >

                           
                            <span>
                                {item.categoryIcon}
                            </span>


                           
                            <span className="font-medium text-gray-700">
                                {item.nameBn}
                            </span>


                            
                            <span className="font-semibold">
                                {item.today} টাকা/{item.unit}
                            </span>


                            
                            {
                                item.change.dir === "up" ? (

                                    <span className="text-red-600 flex items-center gap-1">
                                        ▲ {item.change.pct}%
                                    </span>

                                ) : (

                                    <span className="text-green-600 flex items-center gap-1">
                                       ▼ {item.change.pct}%
                                    </span>

                                )
                            }


                        </div>

                    ))
                }


            </Marquee>

        </div>
    );
};


export default PriceMarquee;