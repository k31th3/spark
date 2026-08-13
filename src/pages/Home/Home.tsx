
import { Wrapper } from "@/components";

import { Title, 
	AboutUsContent, TechnologyJumbotron, 
	WeSpeakHuman
} from "./";

	function Home() 
	{
	  	return (
		    <>
                <Wrapper title="Spark Info-Tech Enterprise" path="">
                    <Wrapper.FullBleed className="relative min-h-screen">

                        <Wrapper.Background/>
                    
                        <Wrapper.Body className="vstack gap-12">
                            
                            <Title />
                            <AboutUsContent />
                            <TechnologyJumbotron />
                            <WeSpeakHuman />

                        </Wrapper.Body>

                    </Wrapper.FullBleed>
                </Wrapper>
		    </>
	    );	
	}

export default Home;

