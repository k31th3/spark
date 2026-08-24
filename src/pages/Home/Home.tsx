
import { Wrapper, Grid } from "@/components";

import { LetStartHere, 
	WeSpeakHuman, TextBeforeGoogle, 
	MoreThanMaintenance
} from "./";

	function Home() 
	{
	  	return (
		    <>
                <Wrapper title="Spark Info-Tech Enterprise" path="">

                    <Wrapper.Background/>

                    <Wrapper.FullBleed className="relative">
                    
                        <Wrapper.Body>
                            
                            <Grid.VStack gap={12}>

                                <LetStartHere />
                                <WeSpeakHuman />
                                <TextBeforeGoogle />
                                <MoreThanMaintenance />

                            </Grid.VStack>

                        </Wrapper.Body>

                    </Wrapper.FullBleed>
                </Wrapper>
		    </>
	    );	
	}

export default Home;

