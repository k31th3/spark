
import { Contents } from "./Contents";
import { Text, Accordion } from "@/components";

function ListOfService()
{
    return <>

        <Accordion defaultOpen="accordion0" className="vstack gap-2">
            {Contents.map((item, index) => {
                return (
                    <Accordion.Item
                        key={`accordion${index}`}
                        id={`accordion${index}`}
                        className="rounded-lg shadow-sm bg-white border border-mist-300">
                        
                        <Accordion.Header>
                            <Text variant="h6">{item.title}</Text>
                        </Accordion.Header>

                        <Accordion.Body className="border-t border-mist-300 rounded-b-lg
                            py-4 bg-primary/4">
                                {item.description.map((line, row) => (
                                    <Text 
                                        key={`text${row}`}
                                        variant="caption" 
                                        className="block leading-4 mb-2">         
                                        {line}
                                    </Text>
                                ))}
                            {item.email ? 
                                <>
                                <span className="text-xs">Email:{" "}</span>
                                <a href={`mailto:${item.email}`} className="text-xs text-primary">
                                    {item.email}</a> 
                                </>: ""
                            }
                        </Accordion.Body>

                    </Accordion.Item>
                );
            })}
        </Accordion>

    </>
}



export default ListOfService;
