import { FiArrowRight } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

import { Grid, Form, 
    Button, Text, Icon } from "@/components";

import { FormFields } from "./FormFields";

function ContactForm()
{
    return (
        <Form autoComplete="off">

            <Grid cols={{ base: 12 }} gap={4}>
                
                {FormFields.map((field) => (
                    <Grid.Item key={field.id} span={field.span}>
                        {field.type === "textarea" ? (
                            <Form.Textarea
                                name={field.name}
                                id={field.id}
                                placeholder={field.placeholder}
                                className="rounded-md"
                            />
                        ) : (
                            <Form.Input
                                type={field.inputType}
                                name={field.name}
                                id={field.id}
                                label={field.label}
                                required={field.required}
                                floating="top"
                                className="rounded-md"
                            />
                        )}
                    </Grid.Item>
                ))}

                <Grid.Item span={{ base: 12 }}>
                    <Button variant="gradient" size="sm" className="rounded-md gap-2 mb-2">
                        Send Message <Icon icon={FiArrowRight} size="sm" variant="light" />
                    </Button>

                    <Grid.HStack gap={2} align="center">
                        <Icon icon={LuShieldCheck} size="sm" />
                        <Text variant="label">
                           We respect your privacy. Your information will never be shared
                        </Text>
                    </Grid.HStack>
                </Grid.Item>
            </Grid>

        </Form> 
    )
}

export default ContactForm;