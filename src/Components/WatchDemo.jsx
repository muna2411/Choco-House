import { Helmet } from "react-helmet";


const WatchDemo = () => {
    return (
        <div className="flex justify-around items-start">
           <Helmet>
                <title>Choco House | WatchDemo</title>
            </Helmet>
            <div>
                <img className="w-[450px] h-[1000px]" src="https://i.ibb.co/jzHY8KX/Brown-and-Black-Modern-Opening-Hour-Instagram-Story.png"></img>
            </div>
           
             <div>
               <iframe
               className="mx-auto my-[50px]"
                 width="1000px"
                 height="600px"
                 src="https://www.youtube.com/embed/BV6-aH2C4S4?si=E7aNJlUT1YauJpkH"
                 title="YouTube Video Player"
                 frameBorder="0"
                 allowFullScreen
      ></iframe>
      <div>
        <p className="font-a text-[40px] text-[#411900]">The World Of Chocolate</p>
        <div className="divider bg-[#411900] h-[2px]"></div>
        <p>
        In the heart of our chocolate bakery, each day begins with a meticulous selection of premium ingredients, ensuring the foundation of our sweet<br/> 
        creations is of the highest quality. Our skilled bakers then embark on the artistry of recipe development, crafting unique combinations that <br/>
        tantalize the taste buds. The dance of melting and tempering chocolate follows, a delicate process that transforms this decadent ingredient into<br/>
        a velvety symphony of flavors. Mixing and baking are executed with precision, resulting in confections that boast the perfect balance of texture<br/>
        and taste. As the ovens work their magic, our commitment to quality control remains unwavering, with constant vigilance over the ingredients and<br/>
        final products. Our chocolate creations not only taste exquisite but are also a feast for the eyes, adorned with artistic presentations that <br/>
        reflect the passion embedded in every indulgent bite.</p>
      </div>
    </div>
        </div>
    );
};

export default WatchDemo;